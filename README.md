# DevQuiz – Online Quiz Application (Task 4 - Medium)

A complete, modern, professional, and fully interactive **Online Quiz Application** built using pure HTML5, CSS3, and Vanilla JavaScript.

Developed as part of the **Auspify Technologies Internship – Task 4 (Medium)**.

---

## 🌟 Live Features & Capabilities

### 1. Home Page & Platform Overview
- **Header & Navigation**: Sticky navbar with brand identity (`DevQuiz`), smooth navigation links, and a persistent **Personal Best Score badge** loaded from `LocalStorage`.
- **Hero Showcase**: Compelling headline, platform description, immediate call-to-action buttons (*"Start Quiz Now"*, *"Review Instructions"*).
- **Interactive Category Selector**: Select from 8 specialized learning domains or choose **All Categories** (36 questions):
  1. **HTML5**: Semantics, document structure, forms, accessibility (5 questions)
  2. **CSS3**: Flexbox, CSS Grid, Box Model, responsive layout (5 questions)
  3. **JavaScript**: Core syntax, ES6+, closures, array methods, scoping (5 questions)
  4. **General Knowledge**: Protocols, networks, RAM, computer architecture (5 questions)
  5. **Python Programming**: Variables, data types, lists, tuples, dicts, slicing, functions (4 questions)
  6. **Java Programming**: OOP concepts, classes, inheritance, polymorphism, encapsulation, memory (4 questions)
  7. **Technical Fundamentals**: Operating systems, context switching, IPv4/IPv6, SQL, cloud computing (4 questions)
  8. **Logical Thinking & Problem Solving**: Number patterns, algorithmic loops, binary search deduction, logic puzzles (4 questions)
- **Dynamic Platform Stats**: Displays **36 Curated Questions**, **8 Core Learning Domains**, **100% Instant Scoring**, and **Self-Paced Learning**.
- **Workflow Steps**: 3-step feature cards explaining the quiz workflow (*Pick Subject*, *Answer & Navigate*, *Review & Learn*).

### 2. Quiz Instructions Modal / Section
- Explicit rules before starting:
  - 4 options per question with 1 single correct answer.
  - Zero negative marking.
  - Full freedom to revisit and update answers anytime.
  - Visual status indicators via the Question Palette.
  - Confirmation prompt before final submission.
- Real-time question count and category reflection based on the chosen category.
- Clean *"Start Now"* and *"Back to Home"* navigation controls.

### 3. Interactive Quiz Assessment Engine
- **Dynamically Rendered MCQs**: Questions loaded on demand from a local structured JavaScript database (`questions.js`).
- **One Question at a Time**: Focused, distraction-free assessment card.
- **Answer Selection & Editing**:
  - Four distinct option buttons (A, B, C, D) with hover animations and active radio states.
  - Immediate state reflection when switching answers.
  - Dedicated **"Clear Answer"** button to deselect an answer if desired.
- **Question Number & Domain Badge**: Displays current question position and category badge.
- **Progress Tracking**: Real-time progress bar reflecting total question progress and answered ratio (`X of Y answered`).
- **Interactive Question Palette**:
  - Grid of question numbers allowing instant jumping to any question.
  - Live status indicators: **Current Question** (purple outline), **Answered** (solid primary color), and **Unanswered** (subtle neutral).
- **Navigation Controls**:
  - `Previous` (safely disabled on first question).
  - `Next` (safely disabled on last question).
  - Keyboard shortcuts (`←` / `→` arrows, `1-4` or `A-D` keys to select options).
  - `Quit to Home` button with confirmation.
- **Safe Submission Flow**:
  - Modal confirmation dialog displaying answered vs unanswered counts.
  - Prevents accidental early submissions.
  - **Duplicate Submission Guard**: Disables the submit button and locks the assessment state once submitted to guarantee score calculation occurs exactly once.

### 4. Comprehensive Results & Performance Review
- **Animated Circular Score Gauge**: Smooth SVG stroke-dashoffset animation rendering the final percentage.
- **Percentage Count-Up**: Live number animation counting from 0% up to the final score.
- **Performance Classification**:
  - `≥ 80%`: **Outstanding Achievement! 🎉** (Excellent Performance - Emerald)
  - `60% - 79%`: **Great Job! Well Done! 👏** (Good Performance - Indigo)
  - `40% - 59%`: **Good Effort! Keep Practicing! 💡** (Average Performance - Amber)
  - `< 40%`: **Keep Learning & Try Again! 📚** (Needs Improvement - Rose)
- **4 Metric Summary Cards**: Total Questions, Correct Answers, Incorrect Answers, and Unanswered Questions.
- **Post-Quiz Appreciation & Motivational Feedback**:
  - Personalized acknowledgement headline: *"Congratulations on completing the DevQuiz Challenge!"*
  - Performance-tailored encouragement that builds confidence and motivates continued learning regardless of score bracket.
  - Inspiring learning quote: *"Every question you attempt is another step towards improving your technical knowledge. Keep learning, keep practicing, and never stop growing!"*
- **LocalStorage High Score Persistence**:
  - Automatically compares against the existing record.
  - Triggers an animated celebration banner (*"🎉 New Personal Best Score Saved!"*) upon setting a new high score.
  - Updates the navbar score pill across sessions.
- **Interactive Question Review**:
  - Filter tabs: **All**, **Correct**, **Incorrect**, **Unanswered** with real-time count tags.
  - Color-coded badges indicating user selection (Green if correct, Red if wrong) and the verified correct answer.
  - In-depth **Technical Explanation** for every question to foster genuine learning.
- **Post-Quiz Actions**:
  - **Retake Quiz**: Resets answers and restarts the current category with a fresh question state.
  - **Choose Another Category**: Returns to the category grid to practice other domains.
  - **Back to Home**: Navigates back to the landing view.
  - **Print / Save Summary**: Print-friendly stylesheet for saving reports as PDF or hard copies.

---

## 📁 Project Structure

```
online-quiz-application/
│
├── index.html          # Main semantic HTML5 document
├── css/
│   └── style.css       # Responsive styling, design system, animations, print media
├── js/
│   ├── questions.js    # Structured question database (36 MCQs across 8 categories)
│   └── script.js       # Core application logic, state manager, DOM handlers, LocalStorage
└── README.md           # Documentation, run instructions, and feature guide
```

---

## 🛠️ Technology Stack
- **Markup**: HTML5 (Semantic elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<aside>`, `<footer>`, `<dialog>`)
- **Styling**: CSS3 (Custom properties, Flexbox, CSS Grid, Transitions, Keyframe Animations, `@media print`)
- **Scripting**: Pure Vanilla JavaScript (ES6+, Event Listeners, State Management, DOM APIs, LocalStorage)
- **External Dependencies**: **None** (100% self-contained with embedded SVG icons, zero CDNs, works completely offline)

---

## 🚀 How to Run the Application Locally

### Method 1: Direct Browser Launch (Simplest)
1. Navigate to the project directory:
   ```bash
   cd online-quiz-application
   ```
2. Double-click `index.html` to open it in your default web browser (Chrome, Firefox, Edge, Safari).

### Method 2: Local HTTP Server (Recommended)
You can serve the project using Python or Node.js:

**Using Python 3:**
```bash
# In the online-quiz-application directory
python -m http.server 8080
```
Open [http://localhost:8080](http://localhost:8080) in your browser.

**Using Node.js (`npx serve` or `http-server`):**
```bash
npx serve .
```

---

## 🧪 Functional Verification & Quality Checklist

| Requirement / Test Case | Status | Behavior Verified |
|:---|:---:|:---|
| 36 total questions loaded | ✅ PASS | Preserved 20 existing questions + added 16 new MCQs |
| 8 Learning Categories | ✅ PASS | HTML, CSS, JS, General, Python, Java, Tech, Logic |
| All Categories option | ✅ PASS | Loads all 36 questions seamlessly |
| Independent category filters | ✅ PASS | Each domain runs isolated quiz with accurate count |
| Dynamic statistics display | ✅ PASS | Shows 36 Curated Questions & 8 Core Domains |
| Post-Quiz Appreciation Card | ✅ PASS | Performance-specific encouragement & inspirational quote |
| Answer selection & changing | ✅ PASS | Allows selecting, changing, and clearing answers |
| Question Palette navigation | ✅ PASS | Allows jumping to any question with live state tags |
| Progress bar tracking | ✅ PASS | Calculates percentage & answered ratio dynamically |
| Submit confirmation modal | ✅ PASS | Details answered vs unanswered counts |
| Duplicate submission guard | ✅ PASS | Locks state and disables submit button |
| Accurate score calculation | ✅ PASS | Computes correct, incorrect, unanswered, % accurately |
| LocalStorage best score | ✅ PASS | High score saved and displayed in header/results |
| Detailed answer review | ✅ PASS | Highlights chosen vs correct option + explanations |
| Review filter tabs | ✅ PASS | Filters by All / Correct / Incorrect / Unanswered |
| Retake quiz functionality | ✅ PASS | Clears answers, resets state, launches fresh quiz |
| Fully responsive layout | ✅ PASS | Tested on mobile, tablet, and desktop viewports |

---

## 👨‍💻 Developer Notes
- Follows clean modular JavaScript architecture (`initializeQuiz`, `startQuiz`, `renderQuestion`, `selectAnswer`, `nextQuestion`, `previousQuestion`, `updateProgress`, `calculateScore`, `submitQuiz`, `displayResults`, `restartQuiz`).
- Pure Vanilla JavaScript without any frameworks or external library dependencies.
- Meets all requirements for **Auspify Technologies Internship – Task 4 (Medium)**.
#   o n l i n e - q u i z - a p p l i c a t i o n  
 