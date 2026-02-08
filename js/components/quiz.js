/**
 * Memory Quiz Component
 * Interactive quiz about the relationship with branching to memories/videos
 */

const QuizComponent = {
    questions: [
        {
            question: "Where did we first meet?",
            options: ["Infosys Campus", "Google Meet", "Traning Class", "Railway Station"],
            correctAnswer: 1,
            linkedMemory: 0,
            linkedType: 'memory'
        },
        {
            question: "What was our first date?",
            options: ["Dinner", "Movie", "Temple", "Beach"],
            correctAnswer: 2,
            linkedMemory: 1,
            linkedType: 'memory'
        },
        {
            question: "What is our song?",
            options: ["Kannana Kannea", "Una veda", "Yeya en Kottikara", "Yarum ila pon nearam"],
            correctAnswer: 0,
            linkedMemory: 1,
            linkedType: 'video'
        },
        {
            question: "What's your favorite thing about me?",
            options: ["Your smile", "Your laugh", "Your kindness", "All of the above"],
            correctAnswer: 3,
            linkedMemory: 2,
            linkedType: 'memory'
        },
        {
            question: "Where would you like to travel with me?",
            options: ["Paris", "London", "Bali", "New York"],
            correctAnswer: 0,
            linkedMemory: 2,
            linkedType: 'video'
        },
        {
            question: "What makes you smile the most?",
            options: ["My cooking", "My jokes", "My love for you", "All of the above"],
            correctAnswer: 2,
            linkedMemory: 3,
            linkedType: 'memory'
        },
        {
            question: "What's our favorite activity together?",
            options: ["Cooking", "Watching movies", "Walking", "Everything"],
            correctAnswer: 3,
            linkedMemory: 0,
            linkedType: 'video'
        },
         {
            question: "Are you happy with Me?",
            options: ["Yes", "No", "Sometimes", "I don't know"],
            correctAnswer: 0,
            linkedMemory: 1,
            linkedType: 'memory'
        }
    ],

    currentQuestionIndex: 0,
    score: 0,
    answers: [],
    linkedMemories: [],

    /**
     * Initialize quiz component
     */
    init() {
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.linkedMemories = [];
        this.renderQuestion();
    },

    /**
     * Render current question
     */
    renderQuestion() {
        const container = document.getElementById('quizContainer');
        if (!container) return;

        if (this.currentQuestionIndex >= this.questions.length) {
            this.showResults();
            return;
        }

        const question = this.questions[this.currentQuestionIndex];

        let html = `
            <div class="quiz__question">
                <div class="quiz__question-number">
                    Question ${this.currentQuestionIndex + 1} of ${this.questions.length}
                </div>
                <h3 class="quiz__question-text">${question.question}</h3>
                <div class="quiz__options">
        `;

        question.options.forEach((option, index) => {
            html += `
                <label class="quiz__option">
                    <input type="radio" name="answer" value="${index}" class="quiz__option-input" onchange="app.quiz.selectAnswer(${index})">
                    ${option}
                </label>
            `;
        });

        html += `
                </div>
                <button class="btn btn--primary quiz__next-btn" onclick="app.quiz.nextQuestion()" style="margin-top: 20px;">
                    ${this.currentQuestionIndex === this.questions.length - 1 ? 'See Results' : 'Next Question'}
                </button>
            </div>
        `;

        container.innerHTML = html;
    },

    /**
     * Select answer
     * @param {number} answerIndex - Index of selected answer
     */
    selectAnswer(answerIndex) {
        const question = this.questions[this.currentQuestionIndex];
        this.answers[this.currentQuestionIndex] = answerIndex;

        // Check if correct
        if (answerIndex === question.correctAnswer) {
            this.score++;
            this.linkedMemories.push(question);

            // Show celebration
            AnimationEffects.createConfetti(1500);
            AnimationEffects.createFloatingRose(event.clientX, event.clientY);
        }

        // Disable further selection
        document.querySelectorAll('input[name="answer"]').forEach(input => {
            input.disabled = true;
        });
    },

    /**
     * Go to next question
     */
    nextQuestion() {
        this.currentQuestionIndex++;
        this.renderQuestion();
    },

    /**
     * Show quiz results
     */
    showResults() {
        const container = document.getElementById('quizContainer');
        if (!container) return;

        const percentage = Math.round((this.score / this.questions.length) * 100);
        let message = '';
        let emoji = '';

        if (percentage === 100) {
            message = "Perfect! You know me so well! 💯";
            emoji = "🏆";
        } else if (percentage >= 75) {
            message = "Amazing! You know me very well! 😍";
            emoji = "👑";
        } else if (percentage >= 50) {
            message = "Great job! You know quite a lot about me! 💕";
            emoji = "⭐";
        } else {
            message = "Not bad! Let's create more memories together! 💑";
            emoji = "🌹";
        }

        let html = `
            <div class="quiz__results">
                <div style="font-size: 60px; margin-bottom: 20px;">${emoji}</div>
                <div class="quiz__score">${this.score}/${this.questions.length}</div>
                <div class="quiz__message">${message}</div>
                <div class="quiz__feedback">
                    You got ${this.score} out of ${this.questions.length} questions correct (${percentage}%)
                </div>
        `;

        if (this.linkedMemories.length > 0) {
            html += `
                <p style="margin: 20px 0; color: #666;">
                    You unlocked ${this.linkedMemories.length} special memory/memories! 🔓
                </p>
            `;
        }

        html += `
                <button class="btn btn--primary" style="margin-top: 20px;" onclick="app.navigateTo('memories')">
                    📸 View Our Memories
                </button>
                <button class="btn btn--secondary" style="margin-top: 10px;" onclick="app.quiz.init()">
                    🔄 Retake Quiz
                </button>
            </div>
        `;

        container.innerHTML = html;
        AnimationEffects.createConfetti(3000);
    },

    /**
     * Get linked memories/videos
     * @returns {Array}
     */
    getLinkedContent() {
        return this.linkedMemories;
    }
};

// Export for use
window.QuizComponent = QuizComponent;
