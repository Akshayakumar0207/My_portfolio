import { useState, useRef } from "react";
import { Upload, Download, Loader2, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { pipeline, env } from '@huggingface/transformers';

// Configure transformers.js
env.allowLocalModels = false;
env.useBrowserCache = false;

const MAX_IMAGE_DIMENSION = 1024;

function resizeImageIfNeeded(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D, image: HTMLImageElement) {
  let width = image.naturalWidth;
  let height = image.naturalHeight;

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    if (width > height) {
      height = Math.round((height * MAX_IMAGE_DIMENSION) / width);
      width = MAX_IMAGE_DIMENSION;
    } else {
      width = Math.round((width * MAX_IMAGE_DIMENSION) / height);
      height = MAX_IMAGE_DIMENSION;
    }

    canvas.width = width;
    canvas.height = height;
    ctx.drawImage(image, 0, 0, width, height);
    return true;
  }

  canvas.width = width;
  canvas.height = height;
  ctx.drawImage(image, 0, 0);
  return false;
}

const removeBackground = async (imageElement: HTMLImageElement): Promise<Blob> => {
  try {
    console.log('Starting background removal process...');
    const segmenter = await pipeline('image-segmentation', 'Xenova/segformer-b0-finetuned-ade-512-512', {
      device: 'webgpu',
    });
    
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    if (!ctx) throw new Error('Could not get canvas context');
    
    const wasResized = resizeImageIfNeeded(canvas, ctx, imageElement);
    console.log(`Image ${wasResized ? 'was' : 'was not'} resized. Final dimensions: ${canvas.width}x${canvas.height}`);
    
    const imageData = canvas.toDataURL('image/jpeg', 0.8);
    console.log('Image converted to base64');
    
    console.log('Processing with segmentation model...');
    const result = await segmenter(imageData);
    
    console.log('Segmentation result:', result);
    
    if (!result || !Array.isArray(result) || result.length === 0 || !result[0].mask) {
      throw new Error('Invalid segmentation result');
    }
    
    const outputCanvas = document.createElement('canvas');
    outputCanvas.width = canvas.width;
    outputCanvas.height = canvas.height;
    const outputCtx = outputCanvas.getContext('2d');
    
    if (!outputCtx) throw new Error('Could not get output canvas context');
    
    outputCtx.drawImage(canvas, 0, 0);
    
    const outputImageData = outputCtx.getImageData(0, 0, outputCanvas.width, outputCanvas.height);
    const data = outputImageData.data;
    
    for (let i = 0; i < result[0].mask.data.length; i++) {
      const alpha = Math.round((1 - result[0].mask.data[i]) * 255);
      data[i * 4 + 3] = alpha;
    }
    
    outputCtx.putImageData(outputImageData, 0, 0);
    console.log('Mask applied successfully');
    
    return new Promise((resolve, reject) => {
      outputCanvas.toBlob(
        (blob) => {
          if (blob) {
            console.log('Successfully created final blob');
            resolve(blob);
          } else {
            reject(new Error('Failed to create blob'));
          }
        },
        'image/png',
        1.0
      );
    });
  } catch (error) {
    console.error('Error removing background:', error);
    throw error;
  }
};

const loadImage = (file: Blob): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = URL.createObjectURL(file);
  });
};

const ImageProcessor = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type.startsWith('image/')) {
        setSelectedFile(file);
        setProcessedImage(null);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please select an image file.",
          variant: "destructive"
        });
      }
    }
  };

  const processImage = async () => {
    if (!selectedFile) return;

    setIsProcessing(true);
    try {
      const imageElement = await loadImage(selectedFile);
      const processedBlob = await removeBackground(imageElement);
      const processedUrl = URL.createObjectURL(processedBlob);
      setProcessedImage(processedUrl);
      
      toast({
        title: "Success!",
        description: "Background removed successfully. You can now download the processed image."
      });
    } catch (error) {
      console.error('Processing error:', error);
      toast({
        title: "Processing Failed",
        description: "Failed to remove background. Please try again with a different image.",
        variant: "destructive"
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadImage = () => {
    if (processedImage) {
      const link = document.createElement('a');
      link.href = processedImage;
      link.download = 'processed-image.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  return (
    <Card className="glass-effect border-0 max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-primary flex items-center gap-3">
          <ImageIcon size={28} />
          Background Remover Tool
        </CardTitle>
        <p className="text-muted-foreground">
          Upload your photo to automatically remove the background using AI
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* File Upload */}
        <div className="space-y-4">
          <input
            type="file"
            accept="image/*"
            onChange={handleFileSelect}
            ref={fileInputRef}
            className="hidden"
          />
          
          <Button
            onClick={() => fileInputRef.current?.click()}
            variant="outline"
            className="w-full h-20 border-2 border-dashed border-glass-border hover:border-primary transition-colors"
          >
            <div className="flex flex-col items-center gap-2">
              <Upload size={24} />
              <span>Click to upload your photo</span>
            </div>
          </Button>
          
          {selectedFile && (
            <p className="text-sm text-muted-foreground text-center">
              Selected: {selectedFile.name}
            </p>
          )}
        </div>

        {/* Process Button */}
        {selectedFile && !processedImage && (
          <Button
            onClick={processImage}
            disabled={isProcessing}
            className="w-full gradient-hero text-white hover:opacity-90"
          >
            {isProcessing ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Removing Background...
              </>
            ) : (
              'Remove Background'
            )}
          </Button>
        )}

        {/* Preview Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedFile && (
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Original</h4>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={URL.createObjectURL(selectedFile)}
                  alt="Original"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
          
          {processedImage && (
            <div className="space-y-2">
              <h4 className="font-semibold text-primary">Processed</h4>
              <div className="relative aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                <img
                  src={processedImage}
                  alt="Processed"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          )}
        </div>

        {/* Download Button */}
        {processedImage && (
          <Button
            onClick={downloadImage}
            className="w-full gradient-hero text-white hover:opacity-90"
          >
            <Download className="mr-2 h-4 w-4" />
            Download Processed Image
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ImageProcessor;