/**
 * Videos (Special Moments) Component
 * Displays video gallery with custom video player
 */

const VideosComponent = {
    videos: [
        {
            title: 'First Date Highlights',
            description: 'Memorable moments from our first date',
            thumbnail: 'images/AnimatedPic.jpg',
            src: 'videos/Funny_tamil_engagement_invite.mp4'
        },
        {
            title: 'Anniversary Celebration',
            description: 'Celebrating our special day',
            thumbnail: 'images/AnimatedPic2.jpg',
            src: 'videos/sample-2.mp4'
        },
        {
            title: 'Travel Adventure',
            description: 'Exploring new places together',
            thumbnail: 'https://via.placeholder.com/400x225?text=Video+3',
            src: 'videos/sample-3.mp4'
        },
        {
            title: 'Surprise Moment',
            description: 'A special surprise I made for you',
            thumbnail: 'https://via.placeholder.com/400x225?text=Video+4',
            src: 'videos/sample-4.mp4'
        },
        {
            title: 'Love Montage',
            description: 'Our best moments compiled',
            thumbnail: 'https://via.placeholder.com/400x225?text=Video+5',
            src: 'videos/sample-5.mp4'
        },
        {
            title: 'Future Dreams',
            description: 'A glimpse into our future together',
            thumbnail: 'https://via.placeholder.com/400x225?text=Video+6',
            src: 'videos/sample-6.mp4'
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
