# Portfolio Setup Instructions for VS Code

## Prerequisites
Before setting up this portfolio in VS Code, make sure you have the following installed:
- **Node.js** (version 16 or later) - [Download here](https://nodejs.org/)
- **Git** - [Download here](https://git-scm.com/)
- **VS Code** - [Download here](https://code.visualstudio.com/)

## Step-by-Step Setup

### 1. Clone or Download the Portfolio
```bash
# If you have the portfolio as a Git repository
git clone <repository-url>
cd portfolio-project

# Or if you have it as a folder, navigate to it
cd path/to/your/portfolio-folder
```

### 2. Open in VS Code
```bash
# Open the project in VS Code
code .

# Or open VS Code and use File > Open Folder to select your portfolio directory
```

### 3. Install Dependencies
Open the terminal in VS Code (View > Terminal or Ctrl+`) and run:
```bash
# Install all project dependencies
npm install

# This will install all packages listed in package.json including:
# - React, TypeScript, Vite
# - Tailwind CSS for styling
# - Lucide React for icons
# - Radix UI components
# - And many more...
```

### 4. Start Development Server
```bash
# Start the development server
npm run dev

# This will:
# - Start Vite development server
# - Open your portfolio at http://localhost:5173
# - Enable hot reloading (changes appear instantly)
```

### 5. Recommended VS Code Extensions
Install these extensions for the best development experience:
- **ES7+ React/Redux/React-Native snippets** - React code snippets
- **Tailwind CSS IntelliSense** - Autocomplete for Tailwind classes
- **TypeScript Importer** - Auto import TypeScript modules
- **Prettier - Code formatter** - Code formatting
- **Auto Rename Tag** - Rename HTML/JSX tags automatically
- **Bracket Pair Colorizer** - Color matching brackets
- **GitLens** - Enhanced Git capabilities

## Project Structure
```
portfolio/
├── public/             # Static files (images, resume.pdf, etc.)
├── src/
│   ├── assets/         # Images and icons
│   ├── components/     # React components
│   │   ├── ui/         # Reusable UI components (buttons, cards, etc.)
│   │   ├── About.tsx   # About section
│   │   ├── Hero.tsx    # Home/Hero section
│   │   └── ...         # Other components
│   ├── pages/          # Page components
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── index.css       # Global styles and design tokens
│   └── main.tsx        # App entry point
├── package.json        # Dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## Available Scripts

### Development
```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build locally
```

### Code Quality
```bash
npm run lint         # Run ESLint to check code quality
npm run type-check   # Check TypeScript types
```

## Customization Guide

### 1. Personal Information
Update your details in:
- `src/components/Hero.tsx` - Name, title, bio
- `src/components/About.tsx` - Education, certifications
- `src/components/Contact.tsx` - Contact information
- `src/components/ExperienceFlip.tsx` - Work experience
- `src/components/ProjectsFlip.tsx` - Your projects

### 2. Styling and Colors
Modify the design system in:
- `src/index.css` - Color tokens and global styles
- `tailwind.config.ts` - Tailwind configuration
- Use semantic color tokens like `--primary`, `--secondary` etc.

### 3. Adding New Components
```tsx
// Create new component in src/components/
import React from 'react';

const NewComponent = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Your content */}
      </div>
    </section>
  );
};

export default NewComponent;
```

### 4. Adding Images
1. Place images in `src/assets/` folder
2. Import them in your component:
```tsx
import myImage from "@/assets/my-image.jpg";

// Use in JSX
<img src={myImage} alt="Description" />
```

## Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized files ready for deployment.

### Deploy to Hosting Platforms
- **Netlify**: Drag and drop the `dist` folder
- **Vercel**: Connect your GitHub repository
- **GitHub Pages**: Use GitHub Actions
- **Firebase Hosting**: Use Firebase CLI

## Troubleshooting

### Common Issues

1. **Port Already in Use**
   ```bash
   # Kill process on port 5173
   lsof -ti:5173 | xargs kill -9
   # Or use a different port
   npm run dev -- --port 3000
   ```

2. **Module Not Found**
   ```bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **TypeScript Errors**
   ```bash
   # Check for type errors
   npm run type-check
   ```

4. **Build Fails**
   ```bash
   # Clear Vite cache
   rm -rf node_modules/.vite
   npm run build
   ```

## Development Workflow

1. **Start Development Server**: `npm run dev`
2. **Make Changes**: Edit files in `src/`
3. **View Changes**: Check localhost:5173 (auto-refreshes)
4. **Test Build**: `npm run build && npm run preview`
5. **Deploy**: Upload `dist` folder to hosting platform

## Support

If you encounter issues:
1. Check the terminal for error messages
2. Verify all dependencies are installed
3. Ensure Node.js version compatibility
4. Clear cache and reinstall dependencies if needed

Happy coding! 🚀