/**
 * Assets Manager for Centeno's HVAC Services Website
 * Handles asset loading, lazy loading, and fallbacks
 */

class AssetsManager {
    constructor() {
        this.assetPaths = {
            images: {
                hero: 'assets/images/hero/',
                services: 'assets/images/services/',
                about: 'assets/images/about/',
                gallery: 'assets/images/gallery/',
                backgrounds: 'assets/images/backgrounds/'
            },
            logos: {
                main: 'assets/logos/main/',
                variations: 'assets/logos/variations/'
            },
            icons: {
                nav: 'assets/icons/nav/',
                services: 'assets/icons/services/',
                social: 'assets/icons/social/'
            },
            videos: 'assets/videos/'
        };
        
        this.fallbackIcons = {
            'heating': 'fas fa-thermometer-half',
            'ventilation': 'fas fa-wind',
            'air-conditioning': 'fas fa-snowflake',
            'emergency': 'fas fa-tools',
            'maintenance': 'fas fa-calendar-check',
            'energy': 'fas fa-leaf',
            'fabrication': 'fas fa-industry'
        };
        
        this.init();
    }
    
    init() {
        this.setupLazyLoading();
        this.checkForCustomAssets();
    }
    
    /**
     * Setup lazy loading for images
     */
    setupLazyLoading() {
        const lazyImages = document.querySelectorAll('.lazy-load');
        
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        img.classList.remove('lazy-load');
                        img.classList.add('loaded');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            lazyImages.forEach(img => imageObserver.observe(img));
        } else {
            // Fallback for browsers without IntersectionObserver
            lazyImages.forEach(img => {
                img.src = img.dataset.src;
                img.classList.remove('lazy-load');
                img.classList.add('loaded');
            });
        }
    }
    
    /**
     * Check if custom assets exist and replace Font Awesome icons
     */
    async checkForCustomAssets() {
        // Check for custom logo
        const logoElements = document.querySelectorAll('.logo');
        const logoPath = this.assetPaths.logos.main + 'centenos-logo-main.svg';
        
        if (await this.assetExists(logoPath)) {
            logoElements.forEach(logo => {
                const icon = logo.querySelector('i');
                if (icon) {
                    const img = document.createElement('img');
                    img.src = logoPath;
                    img.alt = 'Centeno\'s HVAC Services Logo';
                    img.className = 'logo-img';
                    logo.replaceChild(img, icon);
                }
            });
        }
        
        // Check for service icons
        await this.replaceServiceIcons();
    }
    
    /**
     * Replace service icons with custom images if available
     */
    async replaceServiceIcons() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        for (const card of serviceCards) {
            const icon = card.querySelector('i');
            const title = card.querySelector('h3').textContent.toLowerCase();
            
            let iconName = '';
            if (title.includes('heating')) iconName = 'heating';
            else if (title.includes('ventilation')) iconName = 'ventilation';
            else if (title.includes('air conditioning')) iconName = 'air-conditioning';
            else if (title.includes('emergency')) iconName = 'emergency';
            else if (title.includes('maintenance')) iconName = 'maintenance';
            else if (title.includes('energy')) iconName = 'energy';
            
            if (iconName) {
                const iconPath = this.assetPaths.icons.services + iconName + '-icon.svg';
                
                if (await this.assetExists(iconPath)) {
                    const img = document.createElement('img');
                    img.src = iconPath;
                    img.alt = title + ' Icon';
                    img.className = 'custom-icon';
                    card.replaceChild(img, icon);
                    card.classList.add('with-custom-icon');
                }
            }
        }
    }
    
    /**
     * Check if an asset exists
     */
    async assetExists(url) {
        try {
            const response = await fetch(url, { method: 'HEAD' });
            return response.ok;
        } catch (error) {
            return false;
        }
    }
    
    /**
     * Load hero background image
     */
    async loadHeroBackground(imageName) {
        const heroSection = document.querySelector('.hero');
        const imagePath = this.assetPaths.images.hero + imageName;
        
        if (await this.assetExists(imagePath)) {
            heroSection.style.backgroundImage = `url(${imagePath})`;
            heroSection.classList.add('with-background');
        }
    }
    
    /**
     * Load service images
     */
    async loadServiceImages() {
        const serviceCards = document.querySelectorAll('.service-card');
        
        for (const card of serviceCards) {
            const title = card.querySelector('h3').textContent.toLowerCase();
            let imageName = '';
            
            if (title.includes('heating')) imageName = 'heating-system.jpg';
            else if (title.includes('ventilation')) imageName = 'ventilation-system.jpg';
            else if (title.includes('air conditioning')) imageName = 'air-conditioning.jpg';
            else if (title.includes('emergency')) imageName = 'emergency-service.jpg';
            else if (title.includes('maintenance')) imageName = 'maintenance-service.jpg';
            else if (title.includes('energy')) imageName = 'energy-efficient.jpg';
            
            if (imageName) {
                const imagePath = this.assetPaths.images.services + imageName;
                
                if (await this.assetExists(imagePath)) {
                    const img = document.createElement('img');
                    img.src = imagePath;
                    img.alt = title;
                    img.className = 'service-image';
                    
                    const icon = card.querySelector('i');
                    card.insertBefore(img, icon);
                    card.classList.add('with-image');
                }
            }
        }
    }
    
    /**
     * Create image placeholder
     */
    createPlaceholder(text = 'Image Coming Soon') {
        const placeholder = document.createElement('div');
        placeholder.className = 'image-placeholder';
        placeholder.innerHTML = `<i class="fas fa-image"></i>${text}`;
        return placeholder;
    }
    
    /**
     * Get asset path
     */
    getAssetPath(category, subcategory = null) {
        if (subcategory) {
            return this.assetPaths[category][subcategory];
        }
        return this.assetPaths[category];
    }
}

// Initialize Assets Manager when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.assetsManager = new AssetsManager();
    
    // Example usage - uncomment when assets are available
    // assetsManager.loadHeroBackground('hero-hvac-installation.jpg');
    // assetsManager.loadServiceImages();
});

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AssetsManager;
}
