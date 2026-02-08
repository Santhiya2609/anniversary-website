/**
 * Lightbox Module
 * Handles image gallery lightbox functionality
 */

const Lightbox = {
    currentIndex: 0,
    images: [],

    /**
     * Initialize lightbox with images
     * @param {Array} imageArray - Array of image objects or URLs
     */
    init(imageArray = []) {
        this.images = imageArray.map(img => ({
            src: typeof img === 'string' ? img : img.src,
            caption: typeof img === 'string' ? '' : (img.caption || '')
        }));
    },

    /**
     * Open lightbox at specific image index
     * @param {number} index - Index of image to display
     */
    open(index = 0) {
        if (this.images.length === 0) return;
        
        this.currentIndex = Math.max(0, Math.min(index, this.images.length - 1));
        this.updateLightbox();
        
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        // Add keyboard navigation
        this.addKeyboardListeners();
    },

    /**
     * Close lightbox
     */
    close() {
        const lightbox = document.getElementById('lightbox');
        if (lightbox) {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        }

        this.removeKeyboardListeners();
    },

    /**
     * Navigate to next image
     */
    next() {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.updateLightbox();
    },

    /**
     * Navigate to previous image
     */
    prev() {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.updateLightbox();
    },

    /**
     * Update lightbox display with current image
     */
    updateLightbox() {
        const lightboxImage = document.getElementById('lightboxImage');
        if (!lightboxImage) return;

        const currentImage = this.images[this.currentIndex];
        lightboxImage.src = currentImage.src;
        lightboxImage.alt = currentImage.caption || 'Memory';

        // Update caption if exists
        let caption = document.querySelector('.lightbox__caption');
        if (currentImage.caption) {
            if (!caption) {
                caption = document.createElement('div');
                caption.className = 'lightbox__caption';
                document.querySelector('.lightbox__content').appendChild(caption);
            }
            caption.textContent = currentImage.caption;
        }
    },

    /**
     * Add keyboard navigation listeners
     */
    addKeyboardListeners() {
        this.keyboardHandler = (e) => {
            if (e.key === 'ArrowRight') this.next();
            if (e.key === 'ArrowLeft') this.prev();
            if (e.key === 'Escape') this.close();
        };

        document.addEventListener('keydown', this.keyboardHandler);
    },

    /**
     * Remove keyboard navigation listeners
     */
    removeKeyboardListeners() {
        if (this.keyboardHandler) {
            document.removeEventListener('keydown', this.keyboardHandler);
        }
    }
};

// Export for use
window.Lightbox = Lightbox;
