/**
 * Videos (Special Moments) Component
 * Displays video gallery with custom video player
 */

const VideosComponent = {
    videos: [
        {
            title: 'First Date Highlights',
            description: 'Memorable moments from our Night out date',
            thumbnail: 'images/AnimatedPic.jpg',
            src: 'videos/FirstNi8Out.mp4'
        },
        {
            title: 'Anniversary Celebration',
            description: 'Celebrating our special day with morning sun raise for the 1st time',
            thumbnail: 'images/AnimatedPic.jpg',
            src: 'videos/FirstSunRaise.mp4'
        },
        {
            title: 'Travel Adventure',
            description: 'Exploring new places together and vibe together',
            thumbnail: 'https://via.placeholder.com/400x225?text=Video+3',
            src: 'videos/FunTime.mp4'
        },
        {
            title: 'Surprise Moment',
            description: 'A special surprise I made for you this day everything happen as per our long time dream',
            thumbnail: 'https://via.placeholder.com/400x225?text=Video+4',
            src: 'videos/2ndSun.mp4'
        }
    ],

    /**
     * Initialize videos component
     */
    init() {
        this.renderVideos();
    },

    /**
     * Render videos grid
     */
    renderVideos() {
        const grid = document.getElementById('videosGrid');
        if (!grid) return;

        grid.innerHTML = '';

        this.videos.forEach((video, index) => {
            const card = document.createElement('div');
            card.className = 'video-card';
            
            card.innerHTML = `
                <img src="${video.thumbnail}" alt="${video.title}" class="video-card__thumbnail" loading="lazy">
                <div class="video-card__overlay">
                    <button class="video-card__play-btn" onclick="app.videoPlayer.open('${video.src}', '${video.title}')">
                        ▶
                    </button>
                </div>
                <div class="video-card__info">
                    <div class="video-card__title">${video.title}</div>
                    <div class="video-card__description">${video.description}</div>
                </div>
            `;

            grid.appendChild(card);
        });
    },

    /**
     * Add video to collection
     * @param {Object} video - Video object with title, description, thumbnail, src
     */
    addVideo(video) {
        this.videos.push(video);
        this.init();
    },

    /**
     * Get all videos
     * @returns {Array}
     */
    getAllVideos() {
        return this.videos;
    },

    /**
     * Get video by title
     * @param {string} title - Video title
     * @returns {Object|null}
     */
    getVideoByTitle(title) {
        return this.videos.find(v => v.title === title) || null;
    }
};

// Export for use
window.VideosComponent = VideosComponent;
