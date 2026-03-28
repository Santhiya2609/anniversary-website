/**
 * Memories (Photos) Component
 * Displays photo gallery with lightbox functionality   
 */

const MemoriesComponent = {
    memories: [
        { src: 'images/FisrtPic.jpg', date: 'Aug 27, 2022', caption: 'The beginning of our story' },
        { src: 'images/FamatcheFeb14.jpg', date: 'Feb 14, 2024', caption: 'Our first Valentine together' },
        { src: 'images/Feb14Gift.jpg', date: 'Feb 14, 2024', caption: 'Our first Valentine together' },
        { src: 'images/TwoGiftDress.jpg', date: 'Feb 19, 2023', caption: 'Wear both with a gifted dress' },
        { src: 'images/FirstBdaywithYou.jpg', date: 'Jun 10, 2023', caption: 'My first birthday with you' },
        { src: 'images/1stBdaywithMe.jpg', date: 'Sep 26, 2023', caption: 'Your first birthday with me' },
        { src: 'images/NewRing.jpg', date: 'Jul 13, 2023', caption: 'You gift me with new ring' },
        { src: 'images/WearthatDrz.jpg', date: 'Oct 02, 2023', caption: 'You wear that dress for me'},
        { src: 'images/LastHostelOut.jpg', date: 'Apr 07, 2024', caption: 'Last day at your hostel life and went for temple' },
        { src: 'images/CheFam1Out.jpg', date: 'Apr 11, 2024', caption: 'After Family come to chennai we went for outing'},
        { src: 'images/MysoreMem.jpg', date: 'Jul 04, 2025', caption: 'Go for trip to Mysore'},
        { src: 'images/MysoreMem1.jpg', date: 'Jul 04, 2025', caption: 'After Family come to chennai we went for outing'},
        { src: 'images/MysoreMem2.jpg', date: 'Jul 04, 2025', caption: 'After Family come to chennai we went for outing'},
        { src: 'images/Engagement.jpg', date: 'Mar 15, 2026', caption: 'We got engaged. Finally we won our life'}
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
