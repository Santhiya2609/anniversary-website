/**
 * Memories (Photos) Component
 * Displays photo gallery with lightbox functionality   
 */

const MemoriesComponent = {
    memories: [
        { src: 'images/AnimatedPic.png', date: 'Jan 1, 2021', caption: 'The beginning of our story' },
        { src: 'images/AnimatedPic1.png', date: 'Feb 14, 2021', caption: 'Our first Valentine together' },
        { src: 'images/AnimatedPic3.png', date: 'Mar 15, 2021', caption: 'Spring adventure' },
        { src: 'images/AnimatedPic4.png', date: 'May 20, 2021', caption: 'Summer getaway' },
        { src: 'images/AnimatedPic5.png', date: 'Jul 4, 2021', caption: 'Celebration of love' },
        { src: 'images/AnimatedPic6.png', date: 'Aug 10, 2021', caption: 'Beach day' },
        { src: 'https://via.placeholder.com/400x300?text=Memory+7', date: 'Sep 18, 2021', caption: 'Autumn romance' },
        { src: 'https://via.placeholder.com/400x300?text=Memory+8', date: 'Dec 25, 2021', caption: 'First Christmas together' },
        { src: 'https://via.placeholder.com/400x300?text=Memory+9', date: 'Jan 20, 2022', caption: 'One year of joy' },
        { src: 'https://via.placeholder.com/400x300?text=Memory+10', date: 'Mar 8, 2022', caption: 'Spring renewal' },
        { src: 'https://via.placeholder.com/400x300?text=Memory+11', date: 'Jun 15, 2022', caption: 'Summer love' },
        { src: 'https://via.placeholder.com/400x300?text=Memory+12', date: 'Dec 31, 2022', caption: 'Year in review' }
    ],

    /**
     * Initialize memories component
     */
    init() {
        this.renderMemories();
        Lightbox.init(this.memories);
    },

    /**
     * Render memories grid
     */
    renderMemories() {
        const grid = document.getElementById('memoriesGrid');
        if (!grid) return;

        grid.innerHTML = '';

        this.memories.forEach((memory, index) => {
            const card = document.createElement('div');
            card.className = 'memory-card';
            card.onclick = () => Lightbox.open(index);
            
            card.innerHTML = `
                <img src="${memory.src}" alt="${memory.caption}" class="memory-card__image" loading="lazy">
                <div class="memory-card__overlay">
                    <div class="memory-card__date">${memory.date}</div>
                    <div class="memory-card__caption">${memory.caption}</div>
                </div>
            `;

            grid.appendChild(card);
        });
    },

    /**
     * Add memory to collection
     * @param {Object} memory - Memory object with src, date, caption
     */
    addMemory(memory) {
        this.memories.unshift(memory);
        this.init();
    },

    /**
     * Get all memories
     * @returns {Array}
     */
    getAllMemories() {
        return this.memories;
    }
};

// Export for use
window.MemoriesComponent = MemoriesComponent;
