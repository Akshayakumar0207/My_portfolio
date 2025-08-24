import ImageProcessor from "@/components/ImageProcessor";

const Tools = () => {
  return (
    <div className="min-h-screen py-20 gradient-section">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 animate-fade-in-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              <span className="gradient-hero bg-clip-text text-transparent">
                Photo Processing Tools
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional AI-powered tools to enhance your photos. Remove backgrounds, 
              create formal portraits, and more with cutting-edge machine learning technology.
            </p>
          </div>

          {/* Background Removal Tool */}
          <div className="mb-16 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <ImageProcessor />
          </div>

          {/* Instructions */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 gradient-hero bg-clip-text text-transparent">
                How to Use
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Step 1: Upload</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Click the upload button and select your photo. Supported formats include JPG, PNG, and other common image types.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Step 2: Process</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our AI will automatically detect and remove the background while preserving the subject with high precision.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Step 3: Download</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Download your processed image with transparent background, ready for use in professional contexts.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-semibold text-primary">Tips</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    For best results, use photos with clear subject-background separation and good lighting conditions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tools;