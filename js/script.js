/**
 * ============================================================================
 * Online Quiz Application - Main Script
 * Auspify Technologies Internship - Task 4 (Medium) - Enhanced
 * ============================================================================
 */

// Application State
const state = {
  currentQuestionIndex: 0,
  selectedAnswers: {}, // key: question index (0..n), value: selected option index (0..3)
  quizCompleted: false,
  finalScore: null,
  activeQuestions: [],
  selectedCategory: "all",
  reviewFilter: "all"
};

// Storage Keys
const STORAGE_KEY_BEST_SCORE = "devquiz_best_score";
const STORAGE_KEY_BEST_PCT = "devquiz_best_pct";

// DOM Elements Cache
const DOM = {
  // Views
  homeView: document.getElementById("home-view"),
  instructionsView: document.getElementById("instructions-view"),
  quizView: document.getElementById("quiz-view"),
  resultsView: document.getElementById("results-view"),

  // Navigation & Brand
  navBrandBtn: document.getElementById("nav-brand-btn"),
  navHomeLink: document.getElementById("nav-home-link"),
  navCategoriesLink: document.getElementById("nav-categories-link"),
  navHowItWorksLink: document.getElementById("nav-how-it-works-link"),
  navBestScoreText: document.getElementById("nav-best-score-text"),

  // Home Page
  homeStartQuizBtn: document.getElementById("home-start-quiz-btn"),
  homeViewInstructionsBtn: document.getElementById("home-view-instructions-btn"),
  categoryCardsGrid: document.getElementById("category-cards-grid"),
  statsTotalQuestions: document.getElementById("stats-total-questions"),
  statsTotalCategories: document.getElementById("stats-total-categories"),

  // Instructions View
  instSummaryCount: document.getElementById("inst-summary-count"),
  instSummaryCategory: document.getElementById("inst-summary-category"),
  instStartBtn: document.getElementById("inst-start-btn"),
  instBackBtn: document.getElementById("inst-back-btn"),

  // Quiz View
  quizQuestionCurrentNum: document.getElementById("quiz-question-current-num"),
  quizQuestionTotalNum: document.getElementById("quiz-question-total-num"),
  quizCategoryBadge: document.getElementById("quiz-category-badge"),
  quizProgressBar: document.getElementById("quiz-progress-bar"),
  quizProgressAnsweredLabel: document.getElementById("quiz-progress-answered-label"),
  quizProgressPctLabel: document.getElementById("quiz-progress-pct-label"),
  quizQuestionTitle: document.getElementById("quiz-question-title"),
  quizOptionsContainer: document.getElementById("quiz-options-container"),
  quizPrevBtn: document.getElementById("quiz-prev-btn"),
  quizNextBtn: document.getElementById("quiz-next-btn"),
  quizClearAnswerBtn: document.getElementById("quiz-clear-answer-btn"),
  quizSubmitBtn: document.getElementById("quiz-submit-btn"),
  quizPaletteGrid: document.getElementById("quiz-palette-grid"),
  quizQuitBtn: document.getElementById("quiz-quit-btn"),

  // Submit Modal
  submitConfirmModal: document.getElementById("submit-confirm-modal"),
  modalAnsweredCount: document.getElementById("modal-answered-count"),
  modalUnansweredCount: document.getElementById("modal-unanswered-count"),
  modalConfirmDesc: document.getElementById("modal-confirm-desc"),
  modalCancelBtn: document.getElementById("modal-cancel-btn"),
  modalConfirmBtn: document.getElementById("modal-confirm-btn"),

  // Results View
  resultsHighScoreBanner: document.getElementById("results-high-score-banner"),
  resultsPerformancePill: document.getElementById("results-performance-pill"),
  resultsGreetingTitle: document.getElementById("results-greeting-title"),
  resultsGreetingDesc: document.getElementById("results-greeting-desc"),
  gaugeMeterCircle: document.getElementById("gauge-meter-circle"),
  resultsPercentageVal: document.getElementById("results-percentage-val"),
  resultsRawScoreVal: document.getElementById("results-raw-score-val"),
  statTotalVal: document.getElementById("stat-total-val"),
  statCorrectVal: document.getElementById("stat-correct-val"),
  statIncorrectVal: document.getElementById("stat-incorrect-val"),
  statUnansweredVal: document.getElementById("stat-unanswered-val"),
  resultsRetakeBtn: document.getElementById("results-retake-btn"),
  resultsChooseCategoryBtn: document.getElementById("results-choose-category-btn"),
  resultsHomeBtn: document.getElementById("results-home-btn"),
  resultsPrintBtn: document.getElementById("results-print-btn"),

  // Results Appreciation & Motivation Card
  resultsMotivationCard: document.getElementById("results-motivation-card"),
  motivationIconWrap: document.getElementById("motivation-icon-wrap"),
  motivationBadge: document.getElementById("motivation-badge"),
  motivationTitle: document.getElementById("motivation-title"),
  motivationFeedback: document.getElementById("motivation-feedback"),
  motivationQuoteText: document.getElementById("motivation-quote-text"),

  // Review Elements
  reviewCardsContainer: document.getElementById("review-cards-container"),
  filterAllCount: document.getElementById("filter-all-count"),
  filterCorrectCount: document.getElementById("filter-correct-count"),
  filterIncorrectCount: document.getElementById("filter-incorrect-count"),
  filterUnansweredCount: document.getElementById("filter-unanswered-count")
};

// ============================================================================
// Core Required Function: initializeQuiz()
// ============================================================================
function initializeQuiz() {
  loadLocalStorageBestScore();
  renderCategories();
  attachEventListeners();
  updateGlobalStats();
  switchView("home-view");
}

// ============================================================================
// Core Required Function: startQuiz()
// ============================================================================
function startQuiz(category = null) {
  if (category) {
    state.selectedCategory = category;
  }

  // Filter questions based on selected category
  if (!state.selectedCategory || state.selectedCategory === "all") {
    state.activeQuestions = [...quizQuestions];
  } else {
    state.activeQuestions = quizQuestions.filter(q => q.category === state.selectedCategory);
  }

  // Safety fallback if empty
  if (state.activeQuestions.length === 0) {
    state.activeQuestions = [...quizQuestions];
    state.selectedCategory = "all";
  }

  // Reset quiz state
  state.currentQuestionIndex = 0;
  state.selectedAnswers = {};
  state.quizCompleted = false;
  state.finalScore = null;

  // Re-enable submit button
  if (DOM.quizSubmitBtn) {
    DOM.quizSubmitBtn.disabled = false;
  }

  // Render initial question and setup palette
  renderQuestion(0);
  renderQuestionPalette();
  updateProgress();
  switchView("quiz-view");
}

// ============================================================================
// Core Required Function: renderQuestion()
// ============================================================================
function renderQuestion(index) {
  if (index < 0 || index >= state.activeQuestions.length) return;

  state.currentQuestionIndex = index;
  const currentQ = state.activeQuestions[index];

  // Update indicators
  DOM.quizQuestionCurrentNum.textContent = (index + 1).toString();
  DOM.quizQuestionTotalNum.textContent = state.activeQuestions.length.toString();
  DOM.quizCategoryBadge.textContent = currentQ.category;

  // Update question title
  DOM.quizQuestionTitle.textContent = currentQ.question;

  // Render 4 answer options
  const optionLetters = ["A", "B", "C", "D"];
  DOM.quizOptionsContainer.innerHTML = "";

  currentQ.options.forEach((optText, optIdx) => {
    const isSelected = state.selectedAnswers[index] === optIdx;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = `option-btn ${isSelected ? "selected" : ""}`;
    btn.setAttribute("role", "radio");
    btn.setAttribute("aria-checked", isSelected ? "true" : "false");
    btn.setAttribute("data-option-index", optIdx);

    btn.innerHTML = `
      <div class="option-letter">${optionLetters[optIdx]}</div>
      <div class="option-text">${escapeHtml(optText)}</div>
      <div class="option-check-circle">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      </div>
    `;

    btn.addEventListener("click", () => {
      selectAnswer(optIdx);
    });

    DOM.quizOptionsContainer.appendChild(btn);
  });

  // Update Previous / Next button states
  DOM.quizPrevBtn.disabled = (index === 0);
  if (index === state.activeQuestions.length - 1) {
    DOM.quizNextBtn.disabled = true;
    DOM.quizNextBtn.classList.add("btn-secondary");
    DOM.quizNextBtn.classList.remove("btn-primary");
  } else {
    DOM.quizNextBtn.disabled = false;
    DOM.quizNextBtn.classList.add("btn-primary");
    DOM.quizNextBtn.classList.remove("btn-secondary");
  }

  // Update Palette active state
  highlightPaletteCurrent();
}

// ============================================================================
// Core Required Function: selectAnswer()
// ============================================================================
function selectAnswer(optionIndex) {
  if (state.quizCompleted) return;

  const qIndex = state.currentQuestionIndex;
  state.selectedAnswers[qIndex] = optionIndex;

  // Re-render current question's option styles
  const optionButtons = DOM.quizOptionsContainer.querySelectorAll(".option-btn");
  optionButtons.forEach((btn, idx) => {
    if (idx === optionIndex) {
      btn.classList.add("selected");
      btn.setAttribute("aria-checked", "true");
    } else {
      btn.classList.remove("selected");
      btn.setAttribute("aria-checked", "false");
    }
  });

  // Update Palette and progress bar immediately
  renderQuestionPalette();
  updateProgress();
}

// ============================================================================
// Clear Answer (helper functionality)
// ============================================================================
function clearCurrentAnswer() {
  if (state.quizCompleted) return;

  const qIndex = state.currentQuestionIndex;
  if (state.selectedAnswers[qIndex] !== undefined) {
    delete state.selectedAnswers[qIndex];

    const optionButtons = DOM.quizOptionsContainer.querySelectorAll(".option-btn");
    optionButtons.forEach(btn => {
      btn.classList.remove("selected");
      btn.setAttribute("aria-checked", "false");
    });

    renderQuestionPalette();
    updateProgress();
  }
}

// ============================================================================
// Core Required Function: nextQuestion()
// ============================================================================
function nextQuestion() {
  if (state.currentQuestionIndex < state.activeQuestions.length - 1) {
    renderQuestion(state.currentQuestionIndex + 1);
  }
}

// ============================================================================
// Core Required Function: previousQuestion()
// ============================================================================
function previousQuestion() {
  if (state.currentQuestionIndex > 0) {
    renderQuestion(state.currentQuestionIndex - 1);
  }
}

// ============================================================================
// Core Required Function: updateProgress()
// ============================================================================
function updateProgress() {
  const total = state.activeQuestions.length;
  if (total === 0) return;

  const answeredCount = Object.keys(state.selectedAnswers).length;
  const pct = Math.round(((state.currentQuestionIndex + 1) / total) * 100);

  DOM.quizProgressBar.style.width = `${pct}%`;
  DOM.quizProgressAnsweredLabel.textContent = `${answeredCount} of ${total} answered`;
  DOM.quizProgressPctLabel.textContent = `${pct}% Viewed`;
}

// ============================================================================
// Core Required Function: calculateScore()
// ============================================================================
function calculateScore() {
  const total = state.activeQuestions.length;
  let correct = 0;
  let incorrect = 0;
  let unanswered = 0;

  state.activeQuestions.forEach((q, idx) => {
    const selected = state.selectedAnswers[idx];
    if (selected === undefined || selected === null) {
      unanswered++;
    } else if (selected === q.correctAnswer) {
      correct++;
    } else {
      incorrect++;
    }
  });

  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  // Determine Performance Status & Motivational Appreciation Message
  let statusText = "";
  let statusClass = "";
  let greetingTitle = "";
  let greetingDesc = "";

  let motivationalBadge = "";
  let motivationalBadgeClass = "";
  let motivationalTitle = "Congratulations on completing the DevQuiz Challenge!";
  let motivationalFeedback = "";
  let motivationalIconSvg = "";

  if (percentage >= 80) {
    statusText = "Excellent Performance";
    statusClass = "badge-success";
    greetingTitle = "Outstanding Achievement! 🎉";
    greetingDesc = "You demonstrated mastery over the subject material. Keep up the high standard!";

    motivationalBadge = "Outstanding Mastery";
    motivationalBadgeClass = "badge-success";
    motivationalFeedback = "Superb technical proficiency! Your grasp of programming concepts, architecture, and analytical reasoning is exceptional. We appreciate your dedication—keep exploring advanced algorithms, system designs, and cutting-edge technologies!";
    motivationalIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>`;
  } else if (percentage >= 60) {
    statusText = "Good Performance";
    statusClass = "badge-primary";
    greetingTitle = "Great Job! Well Done! 👏";
    greetingDesc = "You have a solid foundation with minor areas for polish. Review your mistakes below.";

    motivationalBadge = "Strong Competency";
    motivationalBadgeClass = "badge-primary";
    motivationalFeedback = "Impressive effort and solid technical results! You've built a dependable grasp of core fundamentals. Review the question explanations below, practice slightly more challenging problems, and you will easily attain the top tier!";
    motivationalIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
  } else if (percentage >= 40) {
    statusText = "Average Performance";
    statusClass = "badge-warning";
    greetingTitle = "Good Effort! Keep Practicing! 💡";
    greetingDesc = "You're making steady progress. Review the detailed explanations below to reinforce your knowledge.";

    motivationalBadge = "Solid Progress";
    motivationalBadgeClass = "badge-warning";
    motivationalFeedback = "Thank you for your active participation and determination! Developing deep programming fluency is a journey of continuous practice. Review the step-by-step solutions below, revisit the fundamentals, and give it another try!";
    motivationalIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 14 14"></polyline></svg>`;
  } else {
    statusText = "Needs Improvement";
    statusClass = "badge-danger";
    greetingTitle = "Keep Learning & Try Again! 📚";
    greetingDesc = "Every expert programmer began right where you are today. Keep learning step by step!";

    motivationalBadge = "Learning Milestone";
    motivationalBadgeClass = "badge-neutral";
    motivationalFeedback = "We sincerely appreciate your willingness to challenge yourself and learn! Never feel discouraged—every mistake is an invaluable stepping stone toward greater understanding. Study the comprehensive explanations below, learn step-by-step, and retake the quiz!";
    motivationalIconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>`;
  }

  return {
    total,
    correct,
    incorrect,
    unanswered,
    percentage,
    statusText,
    statusClass,
    greetingTitle,
    greetingDesc,
    motivationalBadge,
    motivationalBadgeClass,
    motivationalTitle,
    motivationalFeedback,
    motivationalIconSvg
  };
}

// ============================================================================
// Core Required Function: submitQuiz()
// ============================================================================
function submitQuiz() {
  // Prevent duplicate submissions
  if (state.quizCompleted) return;

  state.quizCompleted = true;
  if (DOM.quizSubmitBtn) {
    DOM.quizSubmitBtn.disabled = true;
  }

  closeSubmitModal();

  // Calculate score once
  state.finalScore = calculateScore();

  // Display results view
  displayResults();
}

// ============================================================================
// Core Required Function: displayResults()
// ============================================================================
function displayResults() {
  if (!state.finalScore) return;

  const score = state.finalScore;

  // Update Header & Greeting
  DOM.resultsPerformancePill.textContent = score.statusText;
  DOM.resultsPerformancePill.className = `performance-status-pill ${score.statusClass}`;
  DOM.resultsGreetingTitle.textContent = score.greetingTitle;
  DOM.resultsGreetingDesc.textContent = score.greetingDesc;

  // Raw score text
  DOM.resultsRawScoreVal.textContent = `${score.correct} / ${score.total} Correct`;

  // Summary Grid Numbers
  DOM.statTotalVal.textContent = score.total.toString();
  DOM.statCorrectVal.textContent = score.correct.toString();
  DOM.statIncorrectVal.textContent = score.incorrect.toString();
  DOM.statUnansweredVal.textContent = score.unanswered.toString();

  // Populate Post-Quiz Appreciation & Motivational Card
  if (DOM.resultsMotivationCard) {
    if (DOM.motivationBadge) {
      DOM.motivationBadge.textContent = score.motivationalBadge;
      DOM.motivationBadge.className = `motivation-badge ${score.motivationalBadgeClass}`;
    }
    if (DOM.motivationTitle) {
      DOM.motivationTitle.textContent = score.motivationalTitle;
    }
    if (DOM.motivationFeedback) {
      DOM.motivationFeedback.textContent = score.motivationalFeedback;
    }
    if (DOM.motivationIconWrap) {
      DOM.motivationIconWrap.innerHTML = score.motivationalIconSvg;
    }
  }

  // LocalStorage Best Score Check
  const isNewBest = updateLocalStorageBestScore(score.percentage);
  if (isNewBest) {
    DOM.resultsHighScoreBanner.classList.add("show");
  } else {
    DOM.resultsHighScoreBanner.classList.remove("show");
  }

  // Switch to Results view
  switchView("results-view");

  // Animate Gauge & Percentage Counter
  animateScoreGauge(score.percentage);

  // Render Review Section
  state.reviewFilter = "all";
  renderReviewCards("all");
}

// ============================================================================
// Core Required Function: restartQuiz()
// ============================================================================
function restartQuiz() {
  startQuiz(state.selectedCategory);
}

// ============================================================================
// Question Palette Rendering & Navigation
// ============================================================================
function renderQuestionPalette() {
  DOM.quizPaletteGrid.innerHTML = "";

  state.activeQuestions.forEach((_, idx) => {
    const isAnswered = state.selectedAnswers[idx] !== undefined;
    const isCurrent = idx === state.currentQuestionIndex;

    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "palette-btn";
    if (isAnswered) btn.classList.add("answered");
    if (isCurrent) btn.classList.add("current");
    btn.textContent = (idx + 1).toString();
    btn.title = `Question ${idx + 1} (${isAnswered ? "Answered" : "Unanswered"})`;

    btn.addEventListener("click", () => {
      renderQuestion(idx);
    });

    DOM.quizPaletteGrid.appendChild(btn);
  });
}

function highlightPaletteCurrent() {
  const buttons = DOM.quizPaletteGrid.querySelectorAll(".palette-btn");
  buttons.forEach((btn, idx) => {
    if (idx === state.currentQuestionIndex) {
      btn.classList.add("current");
    } else {
      btn.classList.remove("current");
    }
  });
}

// ============================================================================
// Submit Modal Functions
// ============================================================================
function openSubmitModal() {
  if (state.quizCompleted) return;

  const total = state.activeQuestions.length;
  const answered = Object.keys(state.selectedAnswers).length;
  const unanswered = total - answered;

  DOM.modalAnsweredCount.textContent = answered.toString();
  DOM.modalUnansweredCount.textContent = unanswered.toString();

  if (unanswered > 0) {
    DOM.modalConfirmDesc.textContent = `You still have ${unanswered} unanswered question${unanswered > 1 ? "s" : ""}. Any unanswered questions will be marked incorrect. Are you ready to submit?`;
  } else {
    DOM.modalConfirmDesc.textContent = "All questions have been answered! Are you ready to submit your quiz and view your score summary?";
  }

  DOM.submitConfirmModal.classList.add("active-modal");
}

function closeSubmitModal() {
  DOM.submitConfirmModal.classList.remove("active-modal");
}

// ============================================================================
// Animated Score Gauge & Counter
// ============================================================================
function animateScoreGauge(targetPct) {
  const circle = DOM.gaugeMeterCircle;
  const pctEl = DOM.resultsPercentageVal;

  // Max stroke-dasharray is 440 (2 * pi * 70 approx 439.82)
  const maxOffset = 440;
  const targetOffset = maxOffset - (maxOffset * (targetPct / 100));

  // Reset circle first
  circle.style.strokeDashoffset = maxOffset;

  // Gauge color based on percentage
  if (targetPct >= 80) {
    circle.style.stroke = "var(--success)";
  } else if (targetPct >= 60) {
    circle.style.stroke = "var(--primary)";
  } else if (targetPct >= 40) {
    circle.style.stroke = "var(--warning)";
  } else {
    circle.style.stroke = "var(--danger)";
  }

  // Trigger animation after DOM render tick
  setTimeout(() => {
    circle.style.strokeDashoffset = targetOffset;
  }, 50);

  // Animate percentage count-up
  let currentVal = 0;
  const duration = 1200; // ms
  const stepTime = Math.max(Math.floor(duration / (targetPct || 1)), 15);

  pctEl.textContent = "0%";
  if (targetPct === 0) return;

  const timer = setInterval(() => {
    currentVal += 1;
    if (currentVal >= targetPct) {
      currentVal = targetPct;
      clearInterval(timer);
    }
    pctEl.textContent = `${currentVal}%`;
  }, stepTime);
}

// ============================================================================
// Review Section Rendering & Filtering
// ============================================================================
function renderReviewCards(filter = "all") {
  state.reviewFilter = filter;
  DOM.reviewCardsContainer.innerHTML = "";

  const optionLetters = ["A", "B", "C", "D"];
  let correctCount = 0;
  let incorrectCount = 0;
  let unansweredCount = 0;

  state.activeQuestions.forEach((q, idx) => {
    const userSelected = state.selectedAnswers[idx];
    const isUnanswered = (userSelected === undefined || userSelected === null);
    const isCorrect = !isUnanswered && (userSelected === q.correctAnswer);
    const isIncorrect = !isUnanswered && !isCorrect;

    if (isCorrect) correctCount++;
    if (isIncorrect) incorrectCount++;
    if (isUnanswered) unansweredCount++;

    // Apply filter
    if (filter === "correct" && !isCorrect) return;
    if (filter === "incorrect" && !isIncorrect) return;
    if (filter === "unanswered" && !isUnanswered) return;

    // Card construction
    const card = document.createElement("div");
    card.className = "review-card";

    let statusBadgeHtml = "";
    if (isCorrect) {
      statusBadgeHtml = '<span class="badge badge-success">Correct ✓</span>';
    } else if (isIncorrect) {
      statusBadgeHtml = '<span class="badge badge-danger">Incorrect ✗</span>';
    } else {
      statusBadgeHtml = '<span class="badge badge-warning">Unanswered —</span>';
    }

    let optionsHtml = "";
    q.options.forEach((optText, optIdx) => {
      const isActualCorrect = (optIdx === q.correctAnswer);
      const isUserChoice = (optIdx === userSelected);

      let pillClass = "review-option-pill";
      let tagHtml = "";

      if (isUserChoice && isActualCorrect) {
        pillClass += " is-user-correct";
        tagHtml = '<span class="review-pill-tag badge-success">Your Answer (Correct)</span>';
      } else if (isUserChoice && !isActualCorrect) {
        pillClass += " is-user-wrong";
        tagHtml = '<span class="review-pill-tag badge-danger">Your Answer</span>';
      } else if (isActualCorrect) {
        pillClass += " is-actual-correct";
        tagHtml = '<span class="review-pill-tag badge-success">Correct Solution</span>';
      }

      optionsHtml += `
        <div class="${pillClass}">
          <div class="review-pill-letter">${optionLetters[optIdx]}</div>
          <div>${escapeHtml(optText)}</div>
          ${tagHtml}
        </div>
      `;
    });

    card.innerHTML = `
      <div class="review-card-top">
        <span class="review-q-num">Question ${idx + 1} of ${state.activeQuestions.length} &bull; ${escapeHtml(q.category)}</span>
        ${statusBadgeHtml}
      </div>
      <h4 class="review-question-text">${escapeHtml(q.question)}</h4>
      <div class="review-options-grid">
        ${optionsHtml}
      </div>
      <div class="review-explanation-box">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="9" y1="18" x2="15" y2="18"></line>
          <line x1="10" y1="22" x2="14" y2="22"></line>
          <path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path>
        </svg>
        <div>
          <strong>Explanation:</strong> ${escapeHtml(q.explanation)}
        </div>
      </div>
    `;

    DOM.reviewCardsContainer.appendChild(card);
  });

  // Update filter tab counts
  DOM.filterAllCount.textContent = state.activeQuestions.length.toString();
  DOM.filterCorrectCount.textContent = correctCount.toString();
  DOM.filterIncorrectCount.textContent = incorrectCount.toString();
  DOM.filterUnansweredCount.textContent = unansweredCount.toString();

  // If no items match filter
  if (DOM.reviewCardsContainer.children.length === 0) {
    const emptyNotice = document.createElement("div");
    emptyNotice.style.textAlign = "center";
    emptyNotice.style.padding = "2rem";
    emptyNotice.style.color = "var(--text-light)";
    emptyNotice.textContent = `No questions found under the "${filter}" filter.`;
    DOM.reviewCardsContainer.appendChild(emptyNotice);
  }
}

// ============================================================================
// Categories Grid Rendering & Selection
// ============================================================================
function renderCategories() {
  if (!DOM.categoryCardsGrid) return;

  DOM.categoryCardsGrid.innerHTML = "";

  quizCategories.forEach(cat => {
    const card = document.createElement("div");
    card.className = `category-card ${state.selectedCategory === cat.id ? "selected" : ""}`;
    card.setAttribute("role", "button");
    card.setAttribute("tabindex", "0");
    card.setAttribute("data-cat-id", cat.id);

    // Calculate actual questions count dynamically
    const actualCount = cat.id === "all"
      ? quizQuestions.length
      : quizQuestions.filter(q => q.category === cat.id).length;

    // Pick icon SVG according to category domain
    let iconSvg = "";
    if (cat.id === "all") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>`;
    } else if (cat.id === "HTML") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`;
    } else if (cat.id === "CSS") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path></svg>`;
    } else if (cat.id === "JavaScript") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`;
    } else if (cat.id === "Python Programming") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`;
    } else if (cat.id === "Java Programming") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 8h1a4 4 0 0 1 0 8h-1"></path><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"></path><line x1="6" y1="1" x2="6" y2="4"></line><line x1="10" y1="1" x2="10" y2="4"></line><line x1="14" y1="1" x2="14" y2="4"></line></svg>`;
    } else if (cat.id === "Technical Fundamentals") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>`;
    } else if (cat.id === "Logical Thinking & Problem Solving") {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18h6"></path><path d="M10 22h4"></path><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0 0 18 8 6 6 0 0 0 6 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 0 1 8.91 14"></path></svg>`;
    } else {
      iconSvg = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="14" x2="23" y2="14"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="14" x2="4" y2="14"></line></svg>`;
    }

    card.innerHTML = `
      <div>
        <div class="category-card-top">
          <div class="category-icon-box">${iconSvg}</div>
          <div class="category-check-indicator">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
              <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
          </div>
        </div>
        <h3 class="category-title">${escapeHtml(cat.name)}</h3>
        <p class="category-desc">${escapeHtml(cat.description)}</p>
      </div>
      <div class="category-count">${actualCount} Questions</div>
    `;

    card.addEventListener("click", () => {
      selectCategory(cat.id);
    });

    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        selectCategory(cat.id);
      }
    });

    DOM.categoryCardsGrid.appendChild(card);
  });
}

function selectCategory(catId) {
  state.selectedCategory = catId;

  // Update card selection state
  const cards = DOM.categoryCardsGrid.querySelectorAll(".category-card");
  cards.forEach(card => {
    if (card.getAttribute("data-cat-id") === catId) {
      card.classList.add("selected");
    } else {
      card.classList.remove("selected");
    }
  });

  // Update instructions overview numbers
  updateInstructionsOverview();
}

function updateInstructionsOverview() {
  const cat = quizCategories.find(c => c.id === state.selectedCategory) || quizCategories[0];
  const count = cat.id === "all"
    ? quizQuestions.length
    : quizQuestions.filter(q => q.category === cat.id).length;

  DOM.instSummaryCount.textContent = count.toString();
  DOM.instSummaryCategory.textContent = cat.name;
}

// ============================================================================
// View Management
// ============================================================================
function switchView(viewId) {
  const views = [DOM.homeView, DOM.instructionsView, DOM.quizView, DOM.resultsView];

  views.forEach(v => {
    if (v.id === viewId) {
      v.classList.add("active-view");
    } else {
      v.classList.remove("active-view");
    }
  });

  // Scroll to top cleanly
  window.scrollTo({ top: 0, behavior: "smooth" });
}

// ============================================================================
// LocalStorage Best Score Handling
// ============================================================================
function loadLocalStorageBestScore() {
  try {
    const savedPct = localStorage.getItem(STORAGE_KEY_BEST_PCT);
    if (savedPct !== null) {
      DOM.navBestScoreText.textContent = `Best: ${savedPct}%`;
    } else {
      DOM.navBestScoreText.textContent = "Best: None";
    }
  } catch (err) {
    console.warn("LocalStorage access issue:", err);
    DOM.navBestScoreText.textContent = "Best: --%";
  }
}

function updateLocalStorageBestScore(currentPct) {
  try {
    const existing = localStorage.getItem(STORAGE_KEY_BEST_PCT);
    const prevBest = existing !== null ? parseInt(existing, 10) : -1;

    if (currentPct > prevBest) {
      localStorage.setItem(STORAGE_KEY_BEST_PCT, currentPct.toString());
      localStorage.setItem(STORAGE_KEY_BEST_SCORE, JSON.stringify({
        percentage: currentPct,
        timestamp: new Date().toISOString(),
        category: state.selectedCategory
      }));
      DOM.navBestScoreText.textContent = `Best: ${currentPct}%`;
      return true; // achieved new best
    }
    return false;
  } catch (err) {
    console.warn("LocalStorage write error:", err);
    return false;
  }
}

// ============================================================================
// Global Stats & Utilities
// ============================================================================
function updateGlobalStats() {
  if (DOM.statsTotalQuestions) {
    DOM.statsTotalQuestions.textContent = quizQuestions.length.toString();
  }
  if (DOM.statsTotalCategories) {
    DOM.statsTotalCategories.textContent = (quizCategories.length - 1).toString();
  }
}

function escapeHtml(str) {
  if (!str) return "";
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// ============================================================================
// Event Listeners Binding
// ============================================================================
function attachEventListeners() {
  // Brand & Nav links
  DOM.navBrandBtn.addEventListener("click", () => {
    switchView("home-view");
  });
  DOM.navHomeLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home-view");
  });
  DOM.navCategoriesLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home-view");
    setTimeout(() => {
      document.getElementById("category-selection-section").scrollIntoView({ behavior: "smooth" });
    }, 100);
  });
  DOM.navHowItWorksLink.addEventListener("click", (e) => {
    e.preventDefault();
    switchView("home-view");
    setTimeout(() => {
      document.getElementById("features-section").scrollIntoView({ behavior: "smooth" });
    }, 100);
  });

  // Home CTA Buttons
  DOM.homeStartQuizBtn.addEventListener("click", () => {
    updateInstructionsOverview();
    switchView("instructions-view");
  });
  DOM.homeViewInstructionsBtn.addEventListener("click", () => {
    updateInstructionsOverview();
    switchView("instructions-view");
  });

  // Instructions Buttons
  DOM.instStartBtn.addEventListener("click", () => {
    startQuiz();
  });
  DOM.instBackBtn.addEventListener("click", () => {
    switchView("home-view");
  });

  // Quiz Controls
  DOM.quizNextBtn.addEventListener("click", nextQuestion);
  DOM.quizPrevBtn.addEventListener("click", previousQuestion);
  DOM.quizClearAnswerBtn.addEventListener("click", clearCurrentAnswer);
  DOM.quizSubmitBtn.addEventListener("click", openSubmitModal);

  // Quit to Home from active quiz
  DOM.quizQuitBtn.addEventListener("click", () => {
    if (confirm("Are you sure you want to exit the quiz? Your current progress will not be submitted.")) {
      switchView("home-view");
    }
  });

  // Modal Actions
  DOM.modalCancelBtn.addEventListener("click", closeSubmitModal);
  DOM.modalConfirmBtn.addEventListener("click", submitQuiz);
  DOM.submitConfirmModal.addEventListener("click", (e) => {
    if (e.target === DOM.submitConfirmModal) {
      closeSubmitModal();
    }
  });

  // Results Actions
  DOM.resultsRetakeBtn.addEventListener("click", restartQuiz);
  DOM.resultsChooseCategoryBtn.addEventListener("click", () => {
    switchView("home-view");
    setTimeout(() => {
      document.getElementById("category-selection-section").scrollIntoView({ behavior: "smooth" });
    }, 100);
  });
  DOM.resultsHomeBtn.addEventListener("click", () => {
    switchView("home-view");
  });
  DOM.resultsPrintBtn.addEventListener("click", () => {
    window.print();
  });

  // Review Filter Tabs
  const filterTabs = document.querySelectorAll(".filter-tab");
  filterTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      filterTabs.forEach(t => {
        t.classList.remove("active");
        t.setAttribute("aria-selected", "false");
      });
      tab.classList.add("active");
      tab.setAttribute("aria-selected", "true");
      const filterType = tab.getAttribute("data-filter");
      renderReviewCards(filterType);
    });
  });

  // Keyboard navigation support in quiz
  window.addEventListener("keydown", (e) => {
    // Only handle keyboard shortcut if active in quiz view and modal is closed
    if (!DOM.quizView.classList.contains("active-view")) return;
    if (DOM.submitConfirmModal.classList.contains("active-modal")) return;

    if (e.key === "ArrowRight") {
      nextQuestion();
    } else if (e.key === "ArrowLeft") {
      previousQuestion();
    } else if (["1", "2", "3", "4"].includes(e.key)) {
      const optIdx = parseInt(e.key, 10) - 1;
      selectAnswer(optIdx);
    } else if (["a", "b", "c", "d", "A", "B", "C", "D"].includes(e.key)) {
      const map = { a: 0, b: 1, c: 2, d: 3, A: 0, B: 1, C: 2, D: 3 };
      selectAnswer(map[e.key]);
    }
  });
}

// Start application once DOM is fully parsed
document.addEventListener("DOMContentLoaded", initializeQuiz);
