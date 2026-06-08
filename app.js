// Quiz Data
const QUIZ_DATA = {
  fitness: [
    {
      question: "Which of these is the ultimate 'optimal' gym split for the aesthetics grind?",
      options: ["Push/Pull/Legs (PPL)", "Bro Split", "Full Body every day 💀", "Resting in bed (recovery mode)"],
      correct: 0,
      funFact: "Push/Pull/Legs is widely loved because it optimizes recovery and muscle protein synthesis, but honestly, consistency is the real MVP."
    },
    {
      question: "If someone tells you they are 'bulking', what are they actually doing?",
      options: ["Eating in a caloric deficit", "Eating in a caloric surplus", "Only eating raw liver", "Drinking 10 gallons of water a day"],
      correct: 1,
      funFact: "Bulking means eating more calories than you burn to build muscle. But dirty bulking (eating junk) just leads to high cholesterol, bestie."
    },
    {
      question: "What does it mean to hit 'failure' in a workout set?",
      options: ["Dropping the weights because you got bored", "Not being able to do another clean rep", "Crying in the locker room", "Skipping leg day"],
      correct: 1,
      funFact: "Training to failure maximizes mechanical tension and muscle growth, but doing it every set can fry your central nervous system!"
    },
    {
      question: "Why is sleep considered the ultimate anabolic hack?",
      options: ["It burns 5000 calories", "It releases growth hormone and repairs muscle", "It lets you dream about lifting weights", "It stops you from snacking at night"],
      correct: 1,
      funFact: "Deep sleep is when your body releases the most human growth hormone (HGH). Without it, your gains are basically on pause."
    },
    {
      question: "What's the tea on spot reduction (burning fat in just one specific body part)?",
      options: ["It's 100% possible with targeted crunches", "It's a myth, fat loss is systemic", "You just need to wrap it in plastic wrap", "It only works if you do it at 3 AM"],
      correct: 1,
      funFact: "You can't choose where you lose fat. Your genetics dictate the order in which fat deposits shrink. Keep grinding!"
    },
    {
      question: "How much protein do you actually need daily to build muscle?",
      options: ["10 grams is plenty", "Around 1.6 to 2.2 grams per kg of bodyweight", "Exactly 5 lbs of chicken breast", "Only protein shakes, no solid food"],
      correct: 1,
      funFact: "Eating around 0.8g to 1.0g of protein per pound (1.6-2.2g per kg) of bodyweight is the sweet spot supported by science."
    },
    {
      question: "What is active recovery?",
      options: ["Sleeping actively (running in dreams)", "Low-intensity movement like walking or light yoga", "Lifting heavy weights on rest days", "Scrolling TikTok at the gym"],
      correct: 1,
      funFact: "Light movement increases blood flow to muscles, delivering nutrients and clearing metabolic waste without causing more micro-tears."
    },
    {
      question: "What does 'progressive overload' mean?",
      options: ["Gradually increasing the weight, reps, or intensity over time", "Eating progressively larger meals", "Working out until you faint", "Buying more gym outfits"],
      correct: 0,
      funFact: "To grow, muscles must be forced to adapt to a tension they haven't experienced before. No overload, no extra gains!"
    },
    {
      question: "Why is hydration crucial for physical performance?",
      options: ["It makes you weigh less", "Even 2% dehydration can tank your strength and endurance", "It prevents you from sweating", "It turns fat into water"],
      correct: 1,
      funFact: "Water regulates temperature, lubricates joints, and transports nutrients. Dehydrated muscles lose power and cramp up faster."
    },
    {
      question: "What is 'mind-muscle connection'?",
      options: ["Thinking about lifting while sleeping", "Actively focusing on the target muscle during a movement", "Telepathically moving the weights", "Listening to podcasts while working out"],
      correct: 1,
      funFact: "Biofeedback studies show that mentally focusing on the target muscle actually increases its activation (EMG activity) during light/moderate lifts!"
    }
  ],
  culture: [
    {
      question: "Who did Taylor Swift name as 'Person of the Year' by Time Magazine in 2023?",
      options: ["Her cat Olivia Benson", "Herself (and her fans)", "Travis Kelce", "Joe Alwyn"],
      correct: 1,
      funFact: "Taylor Swift became the first person from the arts to be named Person of the Year for her cultural dominance and economic impact."
    },
    {
      question: "Which K-pop group made history by headlining Coachella in 2023?",
      options: ["BTS", "BLACKPINK", "NewJeans", "TWICE"],
      correct: 1,
      funFact: "BLACKPINK became the first Korean group to headline Coachella, performing to a crowd of over 125,000 people and millions online."
    },
    {
      question: "What does it mean when someone says a song is a 'certified bop'?",
      options: ["It is extremely bad", "It has a really catchy beat and is great to dance to", "It is a classical piano piece", "It is 10 hours long"],
      correct: 1,
      funFact: "The slang 'bop' has been used for decades to describe great music, but Gen Z revitalized it to contrast with 'flops'."
    },
    {
      question: "Which movie famously spawned the 'Barbenheimer' double-feature meme trend?",
      options: ["Barbie and Oppenheimer", "The Batman and Spider-Man", "Dune and Wonka", "Avatar and Titanic"],
      correct: 0,
      funFact: "Released on July 21, 2023, Barbenheimer became a global cultural event, boosting both films to massive box office heights."
    },
    {
      question: "What is the name of the viral dance style popularized by Wednesday Addams?",
      options: ["The Renegade", "The Wednesday Dance (Goo Goo Muck)", "The Floss", "The Griddy"],
      correct: 1,
      funFact: "Jenna Ortega choreographed the iconic dance herself, drawing inspiration from Siouxsie Sioux, archival goth club footage, and Bob Fosse."
    },
    {
      question: "Which creator holds the title for the most subscribers on YouTube as of 2024?",
      options: ["PewDiePie", "MrBeast", "T-Series", "Cocomelon"],
      correct: 1,
      funFact: "MrBeast (Jimmy Donaldson) overtook T-Series in mid-2024 to become the most-subscribed channel on YouTube."
    },
    {
      question: "What slang term is used to describe someone who acts with excessive subservience to get attention?",
      options: ["Rizzler", "Simp", "Gatekeeper", "NPC"],
      correct: 1,
      funFact: "While 'simp' was popularized on TikTok in 2020, its origins date back to 1980s rap slang, shortening 'simpleton'."
    },
    {
      question: "What does 'rizz' stand for?",
      options: ["Charisma", "Risky behavior", "Riddle master", "Resilience"],
      correct: 0,
      funFact: "Short for 'charisma', 'rizz' was named Oxford University Press's Word of the Year in 2023 after going mega-viral on Twitch and TikTok."
    },
    {
      question: "Which singer went viral for her 'Espresso' hit single in 2024?",
      options: ["Olivia Rodrigo", "Sabrina Carpenter", "Billie Eilish", "Dua Lipa"],
      correct: 1,
      funFact: "Sabrina Carpenter's 'Espresso' dominated charts in summer 2024, cement-mixing caffeine metaphors with infectious synth-pop."
    },
    {
      question: "What does the phrase 'no cap' mean?",
      options: ["I lost my hat", "No limit on score", "No lie / seriously", "No capital letters"],
      correct: 2,
      funFact: "Originating in Atlanta hip-hop culture in the 2010s, 'cap' refers to bragging or lying, so 'no cap' means telling the absolute truth."
    }
  ],
  knowledge: [
    {
      question: "Which planet in our solar system rotates sideways on its axis?",
      options: ["Saturn", "Uranus", "Neptune", "Jupiter"],
      correct: 1,
      funFact: "Uranus is tilted by 98 degrees! Scientists think a massive collision with an Earth-sized body knocked it on its side long ago."
    },
    {
      question: "What is the only mammal capable of true, sustained flight?",
      options: ["Flying squirrel", "Bat", "Sugar glider", "Flying lemur"],
      correct: 1,
      funFact: "While flying squirrels and sugar gliders can only glide, bats have adapted hand bones and skin membranes for true flapping flight."
    },
    {
      question: "What color is a polar bear's skin under all that white fur?",
      options: ["White", "Black", "Pink", "Blue"],
      correct: 1,
      funFact: "A polar bear's skin is pitch black to absorb heat from the sun. Their fur is actually translucent and hollow, reflecting light to look white!"
    },
    {
      question: "Which crop is the primary ingredient in real chocolate?",
      options: ["Coffee beans", "Cacao beans", "Vanilla pods", "Nutmeg seeds"],
      correct: 1,
      funFact: "Cacao trees produce pods containing seeds that must be fermented, dried, roasted, and ground to make chocolate."
    },
    {
      question: "What is the rarest naturally occurring blood type in humans?",
      options: ["O Negative", "AB Negative", "Rh-null ('Golden Blood')", "A Positive"],
      correct: 2,
      funFact: "Rh-null blood lacks all Rh antigens. Fewer than 50 people in the world have ever been identified with it, making it extremely precious."
    },
    {
      question: "Which country is home to the active volcano Mount Vesuvius?",
      options: ["Greece", "Italy", "Iceland", "Japan"],
      correct: 1,
      funFact: "Mount Vesuvius is best known for destroying the Roman city of Pompeii in 79 AD. It remains one of the world's most dangerous volcanoes."
    },
    {
      question: "How many hearts does an octopus have?",
      options: ["One", "Two", "Three", "Four"],
      correct: 2,
      funFact: "Octopuses have 3 hearts! Two pump blood to the gills, while the third circulates it to the rest of the body. The main heart stops beating when they swim!"
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: ["Approx. 3,000 km/s", "Approx. 300,000 km/s", "Approx. 3,000,000 km/s", "Infinite"],
      correct: 1,
      funFact: "Light travels at 299,792 kilometers per second. It takes light about 8 minutes and 20 seconds to travel from the Sun to Earth!"
    },
    {
      question: "What is the chemical symbol for gold?",
      options: ["Go", "Gd", "Au", "Ag"],
      correct: 2,
      funFact: "The symbol 'Au' comes from the Latin word 'aurum', which translates to 'shining dawn'. Ancient civilizations loved gold for its lustrous glow."
    },
    {
      question: "Which ocean is the largest on Earth?",
      options: ["Atlantic Ocean", "Indian Ocean", "Southern Ocean", "Pacific Ocean"],
      correct: 3,
      funFact: "The Pacific Ocean covers more than 30% of the Earth's surface—more than all the Earth's land area combined!"
    }
  ]
};

// Web Audio API Sound System
class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = localStorage.getItem('quiz_muted') === 'true';
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  toggleMute() {
    this.muted = !this.muted;
    localStorage.setItem('quiz_muted', this.muted);
    return this.muted;
  }

  playCorrect() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;

    // Play an upbeat retro chime
    this.playTone(523.25, 'triangle', now, 0.08); // C5
    this.playTone(659.25, 'triangle', now + 0.08, 0.08); // E5
    this.playTone(783.99, 'triangle', now + 0.16, 0.08); // G5
    this.playTone(1046.50, 'triangle', now + 0.24, 0.2); // C6
  }

  playWrong() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;

    // Slide down frequency
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, now); // A3
    osc.frequency.exponentialRampToValueAtTime(80, now + 0.4); // E2

    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.4);
  }

  playShuffle() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;

    // Quick synthesizer synth rise
    this.playTone(330, 'sine', now, 0.04);
    this.playTone(440, 'sine', now + 0.04, 0.04);
    this.playTone(550, 'sine', now + 0.08, 0.04);
  }

  playTick() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;
    // Tiny high click
    this.playTone(1200, 'sine', now, 0.01);
  }

  playComplete() {
    if (this.muted) return;
    this.init();
    const now = this.ctx.currentTime;

    // Fanfare
    this.playTone(523.25, 'triangle', now, 0.1); // C5
    this.playTone(523.25, 'triangle', now + 0.12, 0.1); // C5
    this.playTone(523.25, 'triangle', now + 0.24, 0.1); // C5
    this.playTone(659.25, 'triangle', now + 0.36, 0.15); // E5
    this.playTone(587.33, 'triangle', now + 0.51, 0.15); // D5
    this.playTone(783.99, 'triangle', now + 0.66, 0.3); // G5
  }

  playTone(freq, type, start, duration) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = type;
    osc.frequency.value = freq;

    gain.gain.setValueAtTime(0.08, start);
    gain.gain.exponentialRampToValueAtTime(0.001, start + duration);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(start);
    osc.stop(start + duration);
  }
}

// State variables
let currentCategory = null;
let currentQuestions = [];
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 15;
let timerInterval = null;
let soundManager = new SoundManager();
let keyboardFocusIndex = -1;
let canAnswer = true;
let activeTheme = localStorage.getItem('quiz_theme') || 'dark';

// DOM Selections
const soundToggle = document.getElementById('sound-toggle');
const themeToggle = document.getElementById('theme-toggle');
const scoreBadge = document.getElementById('score-badge');

const landingScreen = document.getElementById('landing-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');

const shuffleBtn = document.getElementById('shuffle-btn');
const categoryCards = document.querySelectorAll('.card-category');

const qCategoryTag = document.getElementById('q-category-tag');
const qProgressPill = document.getElementById('q-progress-pill');
const progressBarFill = document.getElementById('progress-bar-fill');
const cardQuestion = document.getElementById('card-question');
const qText = document.getElementById('q-text');
const answersGrid = document.getElementById('answers-grid');
const timerText = document.getElementById('timer-text');
const timerCircleProgress = document.getElementById('timer-circle-progress');

const toastContainer = document.getElementById('toast-container');
const toastText = document.getElementById('toast-text');

const verdictTag = document.getElementById('verdict-tag');
const scoreBig = document.getElementById('score-big');
const personalityVerdict = document.getElementById('personality-verdict');
const shareBtn = document.getElementById('share-btn');
const playAgainBtn = document.getElementById('play-again-btn');
const switchCategoryBtn = document.getElementById('switch-category-btn');
const alertPopup = document.getElementById('alert-popup');

// Init application
function initApp() {
  // Sound Muted state loading
  if (soundManager.muted) {
    soundToggle.innerText = '🔇';
  } else {
    soundToggle.innerText = '🔊';
  }

  // Theme loading
  document.documentElement.setAttribute('data-theme', activeTheme);
  themeToggle.innerText = activeTheme === 'dark' ? '🌙' : '☀️';

  // Event Listeners
  soundToggle.addEventListener('click', () => {
    const isMuted = soundManager.toggleMute();
    soundToggle.innerText = isMuted ? '🔇' : '🔊';
    // Init Audio Context if first interaction
    soundManager.init();
  });

  themeToggle.addEventListener('click', () => {
    activeTheme = activeTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', activeTheme);
    themeToggle.innerText = activeTheme === 'dark' ? '🌙' : '☀️';
    localStorage.setItem('quiz_theme', activeTheme);
  });

  // Category cards selector
  categoryCards.forEach(card => {
    card.addEventListener('click', () => {
      const cat = card.getAttribute('data-category');
      startQuiz(cat);
    });
  });

  // Shuffle button click
  shuffleBtn.addEventListener('click', () => {
    shuffleBtn.classList.add('spinning');
    soundManager.playShuffle();

    // Add visual feedback to categories while spinning
    const categories = ['fitness', 'culture', 'knowledge'];
    let index = 0;
    const interval = setInterval(() => {
      categoryCards.forEach(c => c.style.transform = 'scale(0.98)');
      const activeCard = document.querySelector(`.card-category.cat-${categories[index]}`);
      if (activeCard) {
        activeCard.style.transform = 'scale(1.04)';
      }
      index = (index + 1) % categories.length;
    }, 120);

    setTimeout(() => {
      clearInterval(interval);
      shuffleBtn.classList.remove('spinning');
      categoryCards.forEach(c => c.style.transform = '');

      const randomCat = categories[Math.floor(Math.random() * categories.length)];
      startQuiz(randomCat);
    }, 1200);
  });

  // Results Buttons
  playAgainBtn.addEventListener('click', () => {
    startQuiz(currentCategory);
  });

  switchCategoryBtn.addEventListener('click', () => {
    showScreen(landingScreen);
  });

  shareBtn.addEventListener('click', () => {
    shareScore();
  });

  // Global Keyboard Listener
  document.addEventListener('keydown', handleKeyboardInput);
}

// Navigation Helper
function showScreen(screen) {
  // Hide active screen
  const active = document.querySelector('.screen.active');
  if (active) {
    active.classList.remove('active');
    setTimeout(() => {
      active.classList.add('d-none');

      // Show new screen
      screen.classList.remove('d-none');
      // Force reflow
      screen.offsetHeight;
      screen.classList.add('active');
    }, 300);
  } else {
    screen.classList.remove('d-none');
    screen.classList.add('active');
  }

  // Header badges control
  if (screen === landingScreen) {
    scoreBadge.parentElement.classList.add('d-none');
  } else {
    scoreBadge.parentElement.classList.remove('d-none');
    scoreBadge.innerText = `${score} pts`;
  }
}

// Fisher-Yates shuffle algorithm
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Start Quiz logic
function startQuiz(category) {
  soundManager.init();
  currentCategory = category;
  score = 0;
  currentQuestionIndex = 0;

  // Clone and Shuffle the category questions
  const source = QUIZ_DATA[category] || [];
  currentQuestions = shuffleArray(JSON.parse(JSON.stringify(source)));

  showScreen(quizScreen);
  loadQuestion();
}

// Timer Controller
function startTimer() {
  timeLeft = 15;
  updateTimerUI();
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    timeLeft--;
    if (timeLeft <= 0) {
      timeLeft = 0;
      updateTimerUI();
      clearInterval(timerInterval);
      handleTimeout();
    } else {
      updateTimerUI();
      if (timeLeft <= 5) {
        soundManager.playTick();
      }
    }
  }, 1000);
}

function updateTimerUI() {
  timerText.innerText = timeLeft;

  // Circle circumference is 2 * PI * r (r=30) = 188.4
  const circumference = 188.4;
  const offset = circumference - (timeLeft / 15) * circumference;
  timerCircleProgress.style.strokeDashoffset = offset;

  // Color shifting (green -> yellow -> pink)
  if (timeLeft > 10) {
    timerCircleProgress.style.stroke = "var(--neon-green)";
  } else if (timeLeft > 5) {
    timerCircleProgress.style.stroke = "var(--neon-yellow)";
  } else {
    timerCircleProgress.style.stroke = "var(--neon-pink)";
  }
}

// Load Question
function loadQuestion() {
  canAnswer = true;
  keyboardFocusIndex = -1;
  hideToast();

  const q = currentQuestions[currentQuestionIndex];

  // Update header badges
  scoreBadge.innerText = `${score} pts`;
  qProgressPill.innerText = `${String(currentQuestionIndex + 1).padStart(2, '0')} / ${String(currentQuestions.length).padStart(2, '0')}`;

  // Update Progress Bar
  const pct = ((currentQuestionIndex) / currentQuestions.length) * 100;
  progressBarFill.style.width = `${pct}%`;

  // Update Category Tag
  const categoryNames = {
    fitness: "🏋️ Wellness",
    culture: "🎬 Pop Culture",
    knowledge: "🧠 Twisty Facts"
  };
  qCategoryTag.innerText = categoryNames[currentCategory] || "Quiz";

  // Set Question Text
  qText.innerText = q.question;

  // Clear and Build Option Buttons
  answersGrid.innerHTML = '';

  // Custom option badges (A, B, C, D)
  const letters = ['A', 'B', 'C', 'D'];

  q.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'btn-option';
    btn.setAttribute('role', 'option');
    btn.setAttribute('aria-selected', 'false');
    btn.setAttribute('tabindex', '0');
    btn.innerHTML = `
      <span class="btn-option-letter">${letters[idx]}</span>
      <span class="btn-option-text">${opt}</span>
    `;

    btn.addEventListener('click', () => {
      if (canAnswer) selectOption(idx);
    });

    answersGrid.appendChild(btn);
  });

  // Add slide-in animation to card
  cardQuestion.classList.remove('slide-in', 'shake-wrong');
  void cardQuestion.offsetWidth; // Trigger reflow
  cardQuestion.classList.add('slide-in');

  startTimer();
}

// Handle timeouts
function handleTimeout() {
  if (!canAnswer) return;
  canAnswer = false;

  // Mark all wrong, show correct one
  const q = currentQuestions[currentQuestionIndex];
  const options = answersGrid.querySelectorAll('.btn-option');

  soundManager.playWrong();
  cardQuestion.classList.add('shake-wrong');

  options.forEach((btn, idx) => {
    if (idx === q.correct) {
      btn.classList.add('correct');
      // Add a visual 'TIME OUT' badge
      const sticker = document.createElement('span');
      sticker.className = 'sticker-badge';
      sticker.style.background = 'var(--neon-pink)';
      sticker.innerText = '⏳ RIP time!';
      btn.appendChild(sticker);
    } else {
      btn.classList.add('dimmed');
    }
  });

  showToast("Time's up, bestie! 💀 Here is the tea: " + q.funFact, "💡");

  setTimeout(advanceQuestion, 4000);
}

// Option Selected
function selectOption(selectedIdx) {
  if (!canAnswer) return;
  canAnswer = false;
  clearInterval(timerInterval);

  const q = currentQuestions[currentQuestionIndex];
  const options = answersGrid.querySelectorAll('.btn-option');
  const isCorrect = selectedIdx === q.correct;

  if (isCorrect) {
    score++;
    scoreBadge.innerText = `${score} pts`;
    soundManager.playCorrect();
    options[selectedIdx].classList.add('correct');

    // Add sticker emoji
    const sticker = document.createElement('span');
    sticker.className = 'sticker-badge';
    sticker.innerText = '🔥 SHEESH!';
    options[selectedIdx].appendChild(sticker);

    // Micro confetti burst on the correct answer element!
    const rect = options[selectedIdx].getBoundingClientRect();
    triggerMiniConfetti(rect.left + rect.width / 2, rect.top + rect.height / 2);

    showToast("Correct! " + q.funFact, "✅");
  } else {
    soundManager.playWrong();
    cardQuestion.classList.add('shake-wrong');
    options[selectedIdx].classList.add('wrong');
    options[q.correct].classList.add('correct');

    const sticker = document.createElement('span');
    sticker.className = 'sticker-badge';
    sticker.style.background = 'var(--neon-pink)';
    sticker.innerText = '💀 BRUH';
    options[selectedIdx].appendChild(sticker);

    showToast("Incorrect! " + q.funFact, "❌");
  }

  // Dim the rest
  options.forEach((btn, idx) => {
    if (idx !== selectedIdx && idx !== q.correct) {
      btn.classList.add('dimmed');
    }
  });

  setTimeout(advanceQuestion, 4200);
}

// Next Question or End Screen
function advanceQuestion() {
  currentQuestionIndex++;

  if (currentQuestionIndex < currentQuestions.length) {
    loadQuestion();
  } else {
    // Fill the progress bar completely
    progressBarFill.style.width = '100%';
    endQuiz();
  }
}

// End Screen Setup
function endQuiz() {
  soundManager.playComplete();
  showScreen(resultsScreen);

  // Animate score counter ticking up
  let currentTickScore = 0;
  scoreBig.innerText = "0";

  const tickInterval = setInterval(() => {
    if (currentTickScore < score) {
      currentTickScore++;
      scoreBig.innerText = currentTickScore;
    } else {
      clearInterval(tickInterval);
      scoreBig.innerText = score;

      // If perfect score, explode canvas-confetti!
      if (score === 10) {
        triggerPerfectConfetti();
      }
    }
  }, 100);

  // Verdict evaluation
  let verdictText = "";
  let emojiBadge = "";

  if (score <= 3) {
    verdictText = "bestie you were NOT ready 💀";
    emojiBadge = "L + Ratio 😭";
    verdictTag.style.background = "var(--neon-pink)";
  } else if (score <= 6) {
    verdictText = "mid but make it fashion 😭";
    emojiBadge = "Getting there...";
    verdictTag.style.background = "var(--neon-yellow)";
  } else if (score <= 9) {
    verdictText = "lowkey a genius, no cap 🔥";
    emojiBadge = "W rizzler 💯";
    verdictTag.style.background = "var(--neon-cyan)";
  } else {
    verdictText = "you just ate and left no crumbs 🐐";
    emojiBadge = "Absolute Legend 👑";
    verdictTag.style.background = "var(--neon-green)";
  }

  verdictTag.innerText = emojiBadge;
  personalityVerdict.innerText = verdictText;
}

// Toast Notification Controller
function showToast(message, icon = "💡") {
  toastText.innerText = message;
  document.getElementById('toast-icon-slot').innerText = icon;

  toastContainer.classList.remove('active');
  void toastContainer.offsetHeight; // Reflow
  toastContainer.classList.add('active');
}

function hideToast() {
  toastContainer.classList.remove('active');
}

// Micro Confetti Burst
function triggerMiniConfetti(x, y) {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 20,
      spread: 40,
      origin: {
        x: x / window.innerWidth,
        y: y / window.innerHeight
      },
      colors: ['#FF2D78', '#BFFF00', '#FFE500', '#00F0FF']
    });
  }
}

// Perfect Score Confetti burst
function triggerPerfectConfetti() {
  if (typeof confetti === 'function') {
    const end = Date.now() + (3 * 1000);

    const interval = setInterval(() => {
      if (Date.now() > end) {
        return clearInterval(interval);
      }

      confetti({
        startVelocity: 30,
        spread: 360,
        ticks: 60,
        origin: { x: Math.random(), y: Math.random() - 0.2 },
        colors: ['#FF2D78', '#BFFF00', '#FFE500', '#00F0FF']
      });
    }, 200);
  }
}

// Clipboard copying
function shareScore() {
  const categories = {
    fitness: "🏋️ Wellness Split",
    culture: "🎬 Pop Culture & Memes",
    knowledge: "🧠 Twisty Facts"
  };
  const categoryName = categories[currentCategory] || "Gen Z Quiz";
  const shareText = `cooked score check! 💀\n\nI scored ${score}/10 on the ${categoryName} category!\nVerdict: "${personalityVerdict.innerText}"\n\nHow cooked are you? Try the quiz! 🔥`;

  navigator.clipboard.writeText(shareText).then(() => {
    alertPopup.innerText = "Copied to clipboard, bestie! 📋";
    alertPopup.classList.add('active');
    setTimeout(() => {
      alertPopup.classList.remove('active');
    }, 2500);
  }).catch(err => {
    console.error("Failed to copy text: ", err);
    alertPopup.innerText = "Failed to copy score! 😭";
    alertPopup.classList.add('active');
    setTimeout(() => {
      alertPopup.classList.remove('active');
    }, 2500);
  });
}

// Keyboard Accessibility Controller
function handleKeyboardInput(e) {
  // Sound Mute toggle using Escape
  if (e.key === 'Escape') {
    const isMuted = soundManager.toggleMute();
    soundToggle.innerText = isMuted ? '🔇' : '🔊';
    return;
  }

  // Active quiz screen keyboard selection
  if (quizScreen.classList.contains('active') && canAnswer) {
    const options = answersGrid.querySelectorAll('.btn-option');
    if (!options.length) return;

    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      e.preventDefault();
      keyboardFocusIndex = (keyboardFocusIndex + 1) % options.length;
      options[keyboardFocusIndex].focus();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      e.preventDefault();
      keyboardFocusIndex = (keyboardFocusIndex - 1 + options.length) % options.length;
      options[keyboardFocusIndex].focus();
    } else if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (keyboardFocusIndex >= 0 && keyboardFocusIndex < options.length) {
        selectOption(keyboardFocusIndex);
      }
    } else {
      // Hotkeys A, B, C, D (keys 1, 2, 3, 4)
      const num = parseInt(e.key);
      if (num >= 1 && num <= 4) {
        selectOption(num - 1);
      }
      const char = e.key.toUpperCase();
      const keys = ['A', 'B', 'C', 'D'];
      const charIdx = keys.indexOf(char);
      if (charIdx !== -1) {
        selectOption(charIdx);
      }
    }
  }
}

// Window load init
window.addEventListener('DOMContentLoaded', () => {
  initApp();
  // Initially show landing
  showScreen(landingScreen);
});
