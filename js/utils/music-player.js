/**
 * Music Player Module
 * Handles background music playlist functionality
 */

const MusicPlayer = {
    playlist: [
        { name: 'Kannana Kannea', artist: 'Aniruth', file: 'audio/Kannana-Kanne.mp3', duration: 4.27 },
        { name: 'Vizhigalil oru', artist: 'GVP', file: 'audio/Vizhigalil-Oru-Vaanavil.mp3', duration: 6.00 },
        { name: 'Our Song', artist: 'Dhanush', file: 'audio/Yaarum-Illa-MassTamilan.dev.mp3', duration: 3.25 },
        { name: 'Forever with You', artist: 'Composer Unknown', file: 'audio/romantic-4.mp3', duration: 0 }
    ],
    
    currentTrackIndex: 0,
    isPlaying: false,
    audioElement: null,
    isMinimized: false,

    /**
     * Initialize music player
     */
    init() {
        this.audioElement = document.getElementById('audioPlayer');
        if (!this.audioElement) return;

        // Event listeners
        this.audioElement.addEventListener('timeupdate', () => this.updateProgress());
        this.audioElement.addEventListener('ended', () => this.nextTrack());
        this.audioElement.addEventListener('loadedmetadata', () => {
            this.playlist[this.currentTrackIndex].duration = this.audioElement.duration;
        });

        this.updateTrackInfo();
        this.setVolume(30); // Default volume 30%
    },

    /**
     * Play current track
     */
    play() {
        if (!this.audioElement) return;

        const track = this.playlist[this.currentTrackIndex];
        this.audioElement.src = track.file;
        this.audioElement.play().catch(err => {
            console.log('Audio play error:', err);
        });

        this.isPlaying = true;
        this.updatePlayButton();
    },

    /**
     * Pause current track
     */
    pause() {
        if (!this.audioElement) return;

        this.audioElement.pause();
        this.isPlaying = false;
        this.updatePlayButton();
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
     * Play next track
     */
    nextTrack() {
        this.currentTrackIndex = (this.currentTrackIndex + 1) % this.playlist.length;
        this.updateTrackInfo();
        this.play();
    },

    /**
     * Play previous track
     */
    previousTrack() {
        this.currentTrackIndex = (this.currentTrackIndex - 1 + this.playlist.length) % this.playlist.length;
        this.updateTrackInfo();
        this.play();
    },

    /**
     * Set volume (0-100)
     * @param {number} volume - Volume level
     */
    setVolume(volume) {
        if (!this.audioElement) return;

        const volumePercent = Math.max(0, Math.min(100, volume)) / 100;
        this.audioElement.volume = volumePercent;

        // Update volume slider
        const volumeSlider = document.getElementById('musicVolumeSlider');
        if (volumeSlider) {
            volumeSlider.value = volume;
        }
    },

    /**
     * Seek to specific time
     * @param {Event} event - Click event on progress bar
     */
    seek(event) {
        if (!this.audioElement || this.audioElement.duration === 0) return;

        const progressBar = document.getElementById('musicProgress');
        const rect = progressBar.getBoundingClientRect();
        const percentage = (event.clientX - rect.left) / rect.width;
        
        this.audioElement.currentTime = percentage * this.audioElement.duration;
    },

    /**
     * Update progress bar
     */
    updateProgress() {
        if (!this.audioElement) return;

        const progressBar = document.getElementById('musicProgressBar');
        if (progressBar && this.audioElement.duration) {
            const percentage = (this.audioElement.currentTime / this.audioElement.duration) * 100;
            progressBar.style.width = percentage + '%';
        }
    },

    /**
     * Update track information display
     */
    updateTrackInfo() {
        const trackName = document.getElementById('musicTrackName');
        if (trackName) {
            trackName.textContent = this.playlist[this.currentTrackIndex].name;
        }
    },

    /**
     * Update play button appearance
     */
    updatePlayButton() {
        const playBtn = document.getElementById('musicPlayBtn');
        if (playBtn) {
            playBtn.textContent = this.isPlaying ? '⏸' : '▶';
        }
    },

    /**
     * Toggle minimize/expand player
     */
    toggleMinimize() {
        const content = document.getElementById('musicPlayerContent');
        if (!content) return;

        this.isMinimized = !this.isMinimized;
        content.style.display = this.isMinimized ? 'none' : 'block';
    },

    /**
     * Add custom track to playlist
     * @param {Object} track - Track object with name, artist, file
     */
    addTrack(track) {
        this.playlist.push(track);
    }
};

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    MusicPlayer.init();
});

// Export for use
window.MusicPlayer = MusicPlayer;
