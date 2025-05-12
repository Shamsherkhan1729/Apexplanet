const quizData = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Madrid"],
    answer: "Paris"
  },
  {
    question: "Which language runs in a web browser?",
    options: ["Java", "C", "Python", "JavaScript"],
    answer: "JavaScript"
  },
  {
    question: "who is father of c?",
    options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
    answer: "Dennis Ritchie"
  },
  {
    question:"Who invented the World Wide Web?",
    options: [" Bill Gates","Steve Jobs","Tim Berners-Lee","Mark Zuckerberg"],
    answer: "Tim Berners-Lee"
  },
  {
    question:"Which planet is known as the 'Blue Planet'?",
    options: ["Mars","Earth ","Jupiter","Venus"],
    answer: "Earth "
  },
  {
    question: "What does HTML stand for?",
    options: ["Hyper Transfer Markup Language", " HighText Machine Language", "HyperText Markup Language ", "Hyper Terminal Making Language"],
    answer: "HyperText Markup Language "
  }
];

let currentQuestion = 0;

function loadQuestion() {
  const question = quizData[currentQuestion];
  document.getElementById("question").textContent = question.question;

  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = "";

  question.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => {
      if (option === question.answer) {
        alert("Correct!");
      } else {
        alert("Wrong!");
      }
    };
    answersContainer.appendChild(btn);
  });
}

document.getElementById("nextBtn").onclick = () => {
  currentQuestion = (currentQuestion + 1) % quizData.length;
  loadQuestion();
};

loadQuestion();


const images = [
  "C:/Users/shamsher khan/Downloads/horse1.png",
  "C:/Users/shamsher khan/Downloads/horse2.png",
  "C:/Users/shamsher khan/Downloads/horse3.png",
  "C:/Users/shamsher khan/Downloads/horse4.png",
  "C:/Users/shamsher khan/Downloads/horse5.png",
  "./sampl3.png"
];
let currentImageIndex = 0;

function updateCarousel() {
  document.getElementById("carouselImage").src = images[currentImageIndex];
}

function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  updateCarousel();
}

function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  updateCarousel();
}

function fetchJoke() {
  fetch("https://official-joke-api.appspot.com/random_joke")
    .then(response => response.json())
    .then(data => {
      document.getElementById("jokeText").textContent = `${data.setup} - ${data.punchline}`;
    })
    .catch(err => {
      document.getElementById("jokeText").textContent = "Failed to fetch joke.";
      console.error(err);
    });
}
