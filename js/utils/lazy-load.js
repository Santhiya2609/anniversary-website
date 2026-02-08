/**
 * Lazy Load Module
 * Handles lazy loading of images and videos for performance
 */

const LazyLoad = {
    /**
     * Initialize intersection observer for lazy loading
     */
    init() {
        // Only use Intersection Observer if available
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        if (img.dataset.src) {
                            img.src = img.dataset.src;
                            img.removeAttribute('data-src');
                            img.classList.add('lazy-loaded');
                        }
                        observer.unobserve(img);
                    }
                });
            }, {
                rootMargin: '50px'
            });

            // Observe all lazy images
            document.querySelectorAll('img[data-src]').forEach(img => {
                imageObserver.observe(img);
            });

            // Video lazy loading
            const videoObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const video = entry.target;
                        if (video.dataset.src) {
                            video.src = video.dataset.src;
                            video.removeAttribute('data-src');
                            video.load();
                        }
                        observer.unobserve(video);
                    }
                });
            }, {
                rootMargin: '100px'
            });

            document.querySelectorAll('video[data-src]').forEach(video => {
                videoObserver.observe(video);
            });
        } else {
            // Fallback for older browsers
            this.loadAllMedia();
        }
    },

    /**
     * Fallback: load all media immediately
     */
    loadAllMedia() {
        document.querySelectorAll('img[data-src]').forEach(img => {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
        });

        document.querySelectorAll('video[data-src]').forEach(video => {
            video.src = video.dataset.src;
            video.removeAttribute('data-src');
        });
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    LazyLoad.init();
});

// Export for use
window.LazyLoad = LazyLoad;
