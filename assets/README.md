# Assets Directory Structure

This directory contains all static assets for Centeno's HVAC Services website, including images, videos, logos, and icons.

## Directory Structure

### `/images/`
Contains all image assets organized by purpose:
- **`hero/`** - Hero section background images and featured images
- **`services/`** - Service-related images (HVAC equipment, installations, etc.)
- **`about/`** - About section images (team photos, facility images, etc.)
- **`gallery/`** - Project gallery and portfolio images
- **`backgrounds/`** - Background images for various sections

### `/videos/`
Contains video assets:
- Promotional videos
- Service demonstration videos
- Facility tour videos
- Project showcase videos

### `/logos/`
Contains company logos and branding assets:
- **`main/`** - Primary company logos in various formats (PNG, SVG, etc.)
- **`variations/`** - Logo variations (light/dark versions, different sizes, etc.)

### `/icons/`
Contains custom icons and icon sets:
- **`nav/`** - Navigation-specific icons
- **`services/`** - Service-related custom icons
- **`social/`** - Social media icons (if not using Font Awesome)

## File Naming Conventions

### Images
- Use descriptive, lowercase names with hyphens
- Include size indicators when applicable
- Examples: `hero-hvac-installation.jpg`, `service-heating-system-lg.png`

### Logos
- Include format and usage context
- Examples: `centenos-logo-main.svg`, `centenos-logo-white.png`

### Icons
- Use descriptive names matching their purpose
- Examples: `hvac-icon.svg`, `emergency-service-icon.png`

## Supported Formats

### Images
- **JPEG** (.jpg, .jpeg) - For photographs and complex images
- **PNG** (.png) - For images with transparency or simple graphics
- **WebP** (.webp) - For optimized web delivery (recommended)
- **SVG** (.svg) - For scalable graphics and simple illustrations

### Videos
- **MP4** (.mp4) - Primary video format
- **WebM** (.webm) - Alternative format for better compression

### Icons/Logos
- **SVG** (.svg) - Preferred for scalability
- **PNG** (.png) - For raster versions

## Usage Guidelines

1. **Optimization**: All images should be optimized for web use
2. **Responsive**: Provide multiple sizes for responsive design when needed
3. **Alt Text**: Ensure all images have appropriate alt text in HTML
4. **Loading**: Consider lazy loading for images below the fold
5. **Compression**: Use appropriate compression levels to balance quality and file size

## Current Status

The website currently uses Font Awesome icons for all visual elements. As the site grows, custom assets should be added to these directories and referenced in the HTML/CSS files.
