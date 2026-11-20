# 🧠 DevQuiz – Online Quiz Application

### Interactive Technical Knowledge Assessment Platform

**Test your knowledge. Challenge yourself. Improve your skills.**

A modern, responsive online quiz application designed to help users assess and improve their technical knowledge through interactive multiple-choice questions across eight learning domains.

Built using HTML5, CSS3, and Vanilla JavaScript, DevQuiz provides an engaging quiz experience with dynamic question selection, instant score calculation, answer review, and personalized motivational feedback.

---

## 🏷️ Project Overview

| Detail | Information |
|---|---|
| Project Name | DevQuiz – Online Quiz Application |
| Organization | Auspify Technologies |
| Internship | Web Development Internship |
| Assigned Task | Task 4 – Medium |
| Developer | Abi S. |
| Development Type | Frontend Web Development |
| Status | Completed |
| Version | 1.0.0 |

---

## 📑 Table of Contents

- About the Project
- Project Objectives
- Core Features
- Learning Categories
- Application Workflow
- Technology Stack
- Project Structure
- Screenshots
- Installation
- Application Testing
- Deployment
- Future Enhancements
- Learning Outcomes
- Internship Details
- Project Status
- Author

---

## 📖 About the Project

DevQuiz is an interactive web-based quiz application developed to evaluate users' technical knowledge through multiple-choice questions.

The application includes 36 curated questions across eight learning domains, covering frontend development, programming languages, computer fundamentals, and logical problem-solving.

Users can select individual categories or attempt the complete question collection through All Categories mode.

The platform provides instant score calculation, answer explanations, progress tracking, performance analysis, and motivational feedback based on quiz results.

The project focuses on JavaScript programming, dynamic DOM manipulation, event handling, application logic, responsive web design, and browser-based data storage.

## 🎯 Project Objectives

- Develop an interactive online quiz application using HTML, CSS, and JavaScript.
- Create a structured question database across multiple technical domains.
- Implement category-based question selection.
- Provide dynamic question navigation and progress tracking.
- Calculate quiz scores automatically.
- Display correct, incorrect, and unanswered question statistics.
- Provide answer review and explanations.
- Implement personalized performance-based motivational feedback.
- Create a responsive interface for desktop and mobile devices.

## ✨ Core Features

### 📚 Category-Based Quiz Selection

- Eight individual learning categories.
- All Categories mode covering all 36 questions.
- Dynamic category question counts.
- Easy navigation between available categories.

### ❓ Interactive Quiz Interface

- Multiple-choice questions with four answer options.
- Next and Previous question navigation.
- Question palette for direct navigation.
- Answer selection and clear-answer functionality.
- Progress indicator during quiz completion.
- Keyboard shortcuts for convenient navigation.

### 📊 Automatic Score Calculation

- Instant result generation after submission.
- Automatic score percentage calculation.
- Correct answer count.
- Incorrect answer count.
- Unanswered question count.

### 📝 Answer Review

- Review submitted answers.
- Identify correct and incorrect responses.
- Display explanations for questions.
- Understand mistakes and improve technical knowledge.

### 🏆 Personalized Results & Motivation

- Performance-based result classification.
- Excellent, Good, Average, and Needs Improvement levels.
- Encouraging feedback based on quiz performance.
- Motivational acknowledgement after quiz completion.
- Option to retake the quiz.

### 💾 Best Score Tracking

- Uses browser LocalStorage.
- Saves the user's best score locally.
- Maintains best-score information across browser sessions on the same browser.
- No account registration required.

### 📱 Responsive User Interface

- Desktop-friendly layout.
- Tablet-compatible design.
- Mobile-responsive components.
- Consistent styling and intuitive navigation.

### ⚡ Additional Functionality

- Submission confirmation.
- Duplicate submission prevention.
- Loading-free client-side quiz execution.
- Result printing support.
- Dynamic statistics and category rendering.

## 🧩 Learning Categories

DevQuiz contains 36 curated questions distributed across eight technical domains.

| Category | Questions |
|---|---:|
| HTML5 | 5 |
| CSS3 | 5 |
| JavaScript | 5 |
| General Knowledge | 5 |
| Python Programming | 4 |
| Java Programming | 4 |
| Technical Fundamentals | 4 |
| Logical Thinking & Problem Solving | 4 |
| **Total** | **36** |

**All Categories:** Allows users to attempt all 36 questions in a single quiz session.

## 🔄 Application Workflow

The application follows a simple interactive quiz workflow.

```text
          ┌──────────────────────┐
          │    User Opens        │
          │     DevQuiz          │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │  Select Quiz         │
          │  Category            │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │  Load Questions      │
          │  Dynamically         │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │  Answer MCQs         │
          │  Navigate Questions  │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │  Submit Quiz         │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │  Calculate Score     │
          │  & Performance       │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │  Display Results     │
          │  & Answer Review     │
          └──────────┬───────────┘
                     │
                     ▼
          ┌──────────────────────┐
          │  Motivation &        │
          │  Retake Quiz         │
          └──────────────────────┘
```

## 🧰 Technology Stack

| Layer | Technology | Purpose |
|---|---|---|
| Markup | HTML5 | Application structure |
| Styling | CSS3 | Responsive design and visual styling |
| Programming | Vanilla JavaScript | Quiz logic and dynamic interactions |
| Data Storage | JavaScript Question Database | Stores quiz questions and categories |
| Browser Storage | LocalStorage | Best score persistence |
| Development | Visual Studio Code | Code development and debugging |
| Version Control | Git & GitHub | Source code management |
| Deployment | Netlify | Public website hosting |

## 📁 Project Structure

```text
online-quiz-application/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   ├── questions.js
│   └── script.js
│
└── README.md
```

## 📸 Screenshots

### 🏠 Home Page

Displays the application introduction, platform statistics, and available learning categories.

### 📝 Quiz Interface

Displays interactive multiple-choice questions, answer options, question navigation, and progress tracking.

### 🏆 Results Page

Displays the final score, performance statistics, answer review, and personalized motivational feedback.

### 📱 Responsive Interface

Provides an optimized experience across desktop, tablet, and mobile devices.

*Add your actual project screenshots to the repository and update the image paths in this section.*

## ⚙️ Installation

### Prerequisites

- Modern web browser.
- Visual Studio Code or any preferred code editor.
- Git installed on your system.
- Python installed for the optional local development server.

### Setup Instructions

**1. Clone the repository**

```bash
git clone https://github.com/AbiS-datatech/online-quiz-application.git
```

**2. Navigate to the project directory**

```bash
cd online-quiz-application
```

**3. Open the project**

```bash
code .
```

**4. Start the local development server**

```bash
python -m http.server 8080
```

**5. Open in your browser**


The application will run locally in your browser.

## 🧪 Application Testing

The application is tested through automated checks and manual functional verification.

### Automated Testing

- Question database validation.
- Unique question ID verification.
- Category count validation.
- DOM element availability checks.
- Score calculation verification.
- Performance feedback validation.
- Complete quiz flow testing.

### Manual Testing

- Category selection and switching.
- Individual category quiz execution.
- All Categories quiz execution.
- Next and Previous navigation.
- Answer selection and clearing.
- Quiz submission.
- Result calculation and answer review.
- Motivational feedback display.
- Retake functionality.
- Responsive layout verification.


## 🌐 Live Deployment

**Hosting Platform:** Vercel

**Live Website:** https://online-quiz-application-eight.vercel.app/

DevQuiz is deployed on Vercel and publicly accessible through the live website.

Users can explore the available quiz categories, attempt technical questions, evaluate their performance, and review their results directly through the browser without installing additional software.


## 🚀 Future Enhancements

Potential improvements for future versions:

- Randomized question selection.
- Quiz timer and countdown functionality.
- Difficulty-based question filtering.
- Additional technical learning categories.
- More advanced performance analytics.
- Optional user authentication and leaderboard.
- Backend-based score storage.
- Admin interface for question management.

## 🎓 Learning Outcomes

This project provided practical experience in:

- Frontend web development.
- HTML5 semantic structure.
- CSS styling and responsive layouts.
- JavaScript programming.
- DOM manipulation.
- Event handling.
- Array methods and data filtering.
- Dynamic content rendering.
- Conditional logic and score calculation.
- LocalStorage implementation.
- Application testing and debugging.
- Git and GitHub version control.
- Website deployment.

## 💼 Internship Details

| Category | Details |
|---|---|
| Organization | Auspify Technologies |
| Internship Program | Web Development Internship |
| Project Title | DevQuiz – Online Quiz Application |
| Assigned Task | Task 4 – Medium |
| Development Type | Frontend Web Development |
| Technology | HTML5, CSS3, JavaScript |
| Status | Completed |

## 🏗️ Project Status

| Module | Status |
|---|---|
| Home Page | Completed |
| Question Database | Completed |
| Eight Learning Categories | Completed |
| Category Filtering | Completed |
| Interactive Quiz Interface | Completed |
| Question Navigation | Completed |
| Automatic Score Calculation | Completed |
| Answer Review | Completed |
| Best Score Tracking | Completed |
| Motivational Results Section | Completed |
| Responsive Design | Completed |
| Deployment | Completed |

## 👩‍💻 Author

**Abi S.**

Web Development | Cloud Computing | DevOps Enthusiast

- GitHub: [@AbiS-datatech](https://github.com/AbiS-datatech)
- LinkedIn: [LinkedIn Profile](https://www.linkedin.com/in/abis/)

---

<p align="center">
  <b>Developed with ❤️ in India</b>
  <br>
  Built using HTML5, CSS3 & Vanilla JavaScript.
  <br><br>
  ⭐ If you find this project useful, consider giving it a star!
</p>
#   o n l i n e - q u i z - a p p l i c a t i o n  
 