# Assets Setup Guide for Centeno's HVAC Services Website

## Overview

This guide explains the complete assets directory structure that has been created for Centeno's HVAC Services website. The assets system is designed to be scalable, organized, and easy to maintain.

## Directory Structure Created

```
assets/
├── README.md                    # Detailed documentation
├── assets-manager.js           # JavaScript utility for asset management
├── images/
│   ├── hero/                   # Hero section images
│   ├── services/               # Service-related images
│   ├── about/                  # About section images
│   ├── gallery/                # Project gallery images
│   └── backgrounds/            # Background images
├── videos/                     # Video assets
├── logos/
│   ├── main/                   # Primary company logos
│   └── variations/             # Logo variations
└── icons/
    ├── nav/                    # Navigation icons
    ├── services/               # Service-specific icons
    └── social/                 # Social media icons
```

## Files Modified

### HTML Files Updated
- `index.html` - Added assets.css and assets-manager.js
- `metal-fabrication.html` - Added assets.css and assets-manager.js

### CSS Files Created/Updated
- `css/assets.css` - New stylesheet for asset-related styles
- Includes styles for logos, images, videos, galleries, and placeholders

### JavaScript Files Created
- `assets/assets-manager.js` - Intelligent asset management system

## How the Assets System Works

### 1. Automatic Asset Detection
The assets manager automatically checks for custom assets and replaces Font Awesome icons when available:

```javascript
// Example: If you add 'centenos-logo-main.svg' to assets/logos/main/
// The system will automatically replace the Font Awesome fan icon with your logo
```

### 2. Service Icon Replacement
When you add service-specific icons to `assets/icons/services/`, they will automatically replace Font Awesome icons:

- `heating-icon.svg` → Replaces heating system icon
- `ventilation-icon.svg` → Replaces ventilation icon
- `air-conditioning-icon.svg` → Replaces AC icon
- `emergency-icon.svg` → Replaces emergency repair icon
- `maintenance-icon.svg` → Replaces maintenance icon
- `energy-icon.svg` → Replaces energy efficiency icon

### 3. Image Loading
The system can load hero backgrounds and service images:

```javascript
// Uncomment these lines in assets-manager.js when you have images:
// assetsManager.loadHeroBackground('hero-hvac-installation.jpg');
// assetsManager.loadServiceImages();
```

### 4. Lazy Loading
Images with the `lazy-load` class will be loaded only when they come into view, improving page performance.

## Adding Assets

### Step 1: Add Your Files
Place your assets in the appropriate directories:

```bash
# Example file structure when populated:
assets/
├── images/
│   ├── hero/
│   │   ├── hero-hvac-installation.jpg
│   │   └── hero-commercial-building.jpg
│   └── services/
│       ├── heating-system.jpg
│       ├── ventilation-system.jpg
│       └── air-conditioning.jpg
├── logos/
│   └── main/
│       ├── centenos-logo-main.svg
│       └── centenos-logo-white.svg
└── icons/
    └── services/
        ├── heating-icon.svg
        ├── ventilation-icon.svg
        └── air-conditioning-icon.svg
```

### Step 2: Enable Asset Loading
Uncomment the relevant lines in `assets/assets-manager.js`:

```javascript
// In the DOMContentLoaded event listener:
assetsManager.loadHeroBackground('hero-hvac-installation.jpg');
assetsManager.loadServiceImages();
```

### Step 3: Test Your Assets
1. Open the website in a browser
2. Check the browser's developer console for any loading errors
3. Verify that custom assets are displaying correctly

## CSS Classes Available

### Image Classes
- `.img-responsive` - Makes images responsive
- `.img-rounded` - Adds rounded corners
- `.img-circle` - Makes images circular
- `.img-shadow` - Adds drop shadow
- `.lazy-load` - Enables lazy loading

### Layout Classes
- `.bg-image` - For background images
- `.bg-overlay` - Adds overlay to background images
- `.video-container` - Responsive video container
- `.gallery-grid` - Grid layout for galleries

### Asset-Specific Classes
- `.logo img` - Styles for logo images
- `.custom-icon` - Styles for custom icons
- `.service-image` - Styles for service images
- `.image-placeholder` - Placeholder for missing images

## Best Practices

### File Naming
- Use lowercase with hyphens: `hero-hvac-installation.jpg`
- Include size indicators: `logo-main-lg.png`
- Be descriptive: `emergency-repair-service.jpg`

### File Formats
- **Logos**: SVG preferred, PNG as fallback
- **Photos**: JPEG for photographs, PNG for graphics with transparency
- **Icons**: SVG preferred for scalability
- **Videos**: MP4 primary, WebM as alternative

### Optimization
- Compress images before uploading
- Use appropriate dimensions (don't upload 4K images for thumbnails)
- Consider WebP format for better compression
- Provide multiple sizes for responsive design

## Current Status

The website currently uses Font Awesome icons throughout. The assets system is ready to accept custom assets and will automatically integrate them when available. The system gracefully falls back to Font Awesome icons when custom assets are not present.

## Future Enhancements

When you're ready to add more functionality:

1. **Gallery System**: Add project photos to `assets/images/gallery/`
2. **Video Integration**: Add promotional videos to `assets/videos/`
3. **Custom Backgrounds**: Add section backgrounds to `assets/images/backgrounds/`
4. **Social Media Icons**: Add custom social icons to `assets/icons/social/`

## Support

The assets system is designed to be self-managing. Simply add your files to the appropriate directories, and the system will handle the rest. Check the browser console for any loading issues or errors.
