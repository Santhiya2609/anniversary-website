/**
 * Video Player Module
 * Handles custom video player functionality
 */

const VideoPlayer = {
    currentVideo: null,
    videoElement: null,
    isPlaying: false,
    isFullscreen: false,

    /**
     * Initialize video player
     */
    init() {
        this.videoElement = document.getElementById('videoPlayerElement');
        if (!this.videoElement) return;

        this.videoElement.addEventListener('timeupdate', () => this.updateProgress());
        this.videoElement.addEventListener('play', () => {
            this.isPlaying = true;
            this.updatePlayButton();
        });
        this.videoElement.addEventListener('pause', () => {
            this.isPlaying = false;
            this.updatePlayButton();
        });
        this.videoElement.addEventListener('loadedmetadata', () => this.updateTimeDisplay());
        this.videoElement.addEventListener('timeupdate', () => this.updateTimeDisplay());
    },

    /**
     * Open video player with specific video
     * @param {string} videoPath - Path to video file
     * @param {string} videoTitle - Title of video
     */
    open(videoPath, videoTitle = '') {
        if (!this.videoElement) return;

        const player = document.getElementById('videoPlayer');
        if (player) {
            player.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        this.videoElement.src = videoPath;
        this.videoElement.load();
        this.play();

        // Add keyboard shortcuts
        this.addKeyboardListeners();
    },

    /**
     * Close video player
     */
    close() {
        const player = document.getElementById('videoPlayer');
        if (player) {
            player.classList.remove('active');
            document.body.style.overflow = '';
        }

        this.pause();
        this.videoElement.src = '';
        this.removeKeyboardListeners();
    },

    /**
     * Play video
     */
    play() {
        if (this.videoElement) {
            this.videoElement.play().catch(err => {
                console.log('Video play error:', err);
            });
        }
    },

    /**
     * Pause video
     */
    pause() {
        if (this.videoElement) {
            this.videoElement.pause();
        }
    },

    /**
     * Toggle play/pause
     */
    togglePlay() {
        if (this.isPlaying) {
            this.pause();
        } else {
            this.play();
        }
    },

    /**
     * Set volume (0-100)
     * @param {number} volume - Volume level
     */
    setVolume(volume) {
        if (!this.videoElement) return;

        const volumePercent = Math.max(0, Math.min(100, volume)) / 100;
        this.videoElement.volume = volumePercent;
    },

    /**
     * Seek to specific time
     * @param {Event} event - Click event on progress bar
     */
    seek(event) {
        if (!this.videoElement || this.videoElement.duration === 0) return;

        const progressBar = document.getElementById('videoProgress');
        const rect = progressBar.getBoundingClientRect();
        const percentage = (event.clientX - rect.left) / rect.width;
        
        this.videoElement.currentTime = percentage * this.videoElement.duration;
    },

    /**
     * Update progress bar
     */
    updateProgress() {
        if (!this.videoElement) return;

        const progressBar = document.getElementById('videoProgressBar');
        if (progressBar && this.videoElement.duration) {
            const percentage = (this.videoElement.currentTime / this.videoElement.duration) * 100;
            progressBar.style.width = percentage + '%';
        }
    },

    /**
     * Update time display
     */
    updateTimeDisplay() {
        if (!this.videoElement) return;

        const timeDisplay = document.getElementById('videoTime');
        if (timeDisplay) {
            const current = this.formatTime(this.videoElement.currentTime);
            const duration = this.formatTime(this.videoElement.duration);
            timeDisplay.textContent = `${current} / ${duration}`;
        }
    },

    /**
     * Format time in seconds to MM:SS format
     * @param {number} seconds - Time in seconds
     * @returns {string} Formatted time string
     */
    formatTime(seconds) {
        if (isNaN(seconds)) return '0:00';
        
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    },

    /**
     * Toggle fullscreen mode
     */
    toggleFullscreen() {
        const container = document.querySelector('.video-player__container');
        if (!container) return;

        try {
            if (!this.isFullscreen) {
                if (container.requestFullscreen) {
                    container.requestFullscreen();
                } else if (container.webkitRequestFullscreen) {
                    container.webkitRequestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    document.webkitExitFullscreen();
                }
            }
            this.isFullscreen = !this.isFullscreen;
        } catch (err) {
            console.log('Fullscreen error:', err);
        }
    },

    /**
     * Update play button appearance
     */
    updatePlayButton() {
        const playBtn = document.getElementById('videPlayBtn');
        if (playBtn) {
            playBtn.textContent = this.isPlaying ? '⏸' : '▶';
        }
    },

    /**
     * Add keyboard navigation listeners
     */
    addKeyboardListeners() {
        this.keyboardHandler = (e) => {
            if (e.key === ' ') {
                e.preventDefault();
                this.togglePlay();
            }
            if (e.key === 'ArrowRight') {
                this.videoElement.currentTime += 5;
            }
            if (e.key === 'ArrowLeft') {
                this.videoElement.currentTime -= 5;
            }
            if (e.key === 'Escape') {
                this.close();
            }
            if (e.key === 'f' || e.key === 'F') {
                this.toggleFullscreen();
            }
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

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    VideoPlayer.init();
});

// Export for use
window.VideoPlayer = VideoPlayer;
