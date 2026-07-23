// 🔊 GLOBAL CLICK SOUND (NEW — ONLY ADDITION)
const clickSound = new Audio("assets/sounds/click.mp3");
clickSound.preload = "auto";

document.addEventListener("click", (e) => {
  if (e.target.closest("button")) {
    clickSound.currentTime = 0;
    clickSound.play();
  }
});

// --------------------------------------------------

function nextPage(num) {
  document
    .querySelectorAll(".page")
    .forEach((p) => p.classList.remove("active"));
  document.getElementById("page" + num).classList.add("active");
}

function addPin(num) {
  document.getElementById("pin").value += num;
}

function checkPin() {
  const pin = document.getElementById("pin").value;
  const msg = document.getElementById("pinMsg");
  if (pin === "24072006") {
    msg.innerText = "Alright then… let’s go ahead, sunshine💗";
    setTimeout(() => nextPage(2), 800);
  } else {
    msg.innerText = "ummmm want another hint msg me ! 🥺";
  }
}

// --------------------------------------------------

let noCount = 0;

const messages = [
  "Are you absolutely sure? 😳",
  "Think again 🥺",
  "Don’t break my heart 💔",
  "I’ll be very sad 😭",
  "Okay… last chance 😢",
  "One more last chance plz mann jao ",
];

function noClicked() {
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const text = document.getElementById("convinceText");

  if (noCount < messages.length) {
    text.innerText = messages[noCount];
  }

  let yesSize = 24 + noCount * 10;
  yesBtn.style.fontSize = yesSize + "px";
  yesBtn.style.padding = `${20 + noCount * 5}px ${40 + noCount * 10}px`;

  let noSize = Math.max(10, 14 - noCount * 2);
  noBtn.style.fontSize = noSize + "px";

  noCount++;
}

// --------------------------------------------------
// 📩 LETTERS + PAPER SOUND

const paperSound = new Audio("assets/media/paper.mp3");

const letters = [
  {
    title: "When you miss me 💗",
    text: "imagine my arms around you, holding you a little tighter than usual. And if that isn’t enough, I won’t go anywhere—I’ll stay on the call with you, talk to you, listen to you, jab tak aapko sukoon na mil jaye. That’s how much you mean to me.",
    img: "assets/media/123.jpeg",
  },
  {
    title: "When you are sad 😢",
    text: "You don’t have to hide it from me. I’ll listen—even if you don’t say a word. I’ll hear you through your silence. And I’ll try to distract you with my bina-sir-pao-wale jokes… but in the end, I promise, I’ll make you smile",
    img: "assets/media/sad.jpg",
  },
  {
    title: "When you want my attention ",
    text: "Don’t overthink it—just call me, text me, annoy me. Steal me away from everything else, because bina kuch soche, I’ll always choose you over anything in the world. I already love it when it’s you.  .",
    img: "assets/media/attention.jpg",
  },
  {
    title: "When you need a smile 😊",
    text: "bas mujhe bula lena. Thoda sa flirt karunga, thoda sa tease—haan, I know you’re way better than me, but kabhi-kabhi main bhi shock kar deta hoon. Aur I promise, tumhe hasa kar hi rahunga… no matter how silly I have to make myself look",
    img: "assets/media/smile.png",
  },
];

let openedLetters = [false, false, false, false];

function openLetter(index) {
  const env = document.querySelectorAll(".envelope")[index];

  env.classList.add("burn");

  paperSound.currentTime = 0;
  paperSound.play();

  setTimeout(() => {
    env.classList.add("open");
  }, 600);

  setTimeout(() => {
    document.getElementById("lettersGrid").style.display = "none";
    document.getElementById("letterContent").style.display = "block";

    document.getElementById("letterTitle").innerText = letters[index].title;
    document.getElementById("letterText").innerText = letters[index].text;
    document.getElementById("letterImg").src = letters[index].img;

    openedLetters[index] = true;

    if (openedLetters.every((v) => v === true)) {
      document.getElementById("nextFromLetters").style.display = "inline-block";
    }
  }, 1200);
}

function closeLetter() {
  document.getElementById("letterContent").style.display = "none";
  document.getElementById("lettersGrid").style.display = "grid";

  document
    .querySelectorAll(".envelope")
    .forEach((e) => e.classList.remove("open"));
}

// --------------------------------------------------

function openGift() {
  const gift = document.getElementById("giftBox");
  const letter = document.getElementById("finalLetter");

  gift.style.opacity = "0";
  gift.style.transform = "scale(0.8)";

  setTimeout(() => {
    gift.style.display = "none";
    letter.style.display = "block";
  }, 600);
}

function finalYes() {
  document.getElementById("finalQuestion").style.display = "none";
  document.querySelector(".choice-box").style.display = "none";
  document.getElementById("finalImg").style.display = "none";

  document.getElementById("finalLetter").style.display = "block";
}

function finalNo() {
  const question = document.getElementById("finalQuestion");
  const noBtn = document.getElementById("finalNoBtn");
  const yesBtn = document.getElementById("finalYesBtn");
  const img = document.getElementById("finalImg");

  question.innerHTML = "Hey… why nope? 🥺<br>At least hear me once…";
  img.src = "assets/media/img.png";
  noBtn.style.display = "none";
  yesBtn.innerText = "Okay okay… tell me 💗";
}

// --------------------------------------------------
// ✍️ TYPEWRITER (PAGE 3)

const poem = `
In ways that feel safe and real 🤍.
I'll choose you even from the darkest moments, because
your presence is the brightest light I have ever known.
Watching these days, hours, and minutes tick by makes me
realize how incredibly lucky I am to share this timeline with you.
You aren't just a part of my life; you are the peace my heart always needed.
I promise to cherish every upcoming second with you, 
standing by you exactly like the stars and moon. ♾️💗
`;

let index = 0;
const speed = 40;

function startTyping() {
  const el = document.getElementById("typeText");
  if (!el) return;

  el.innerHTML = "";
  index = 0;

  const interval = setInterval(() => {
    el.innerHTML += poem.charAt(index);
    index++;
    if (index >= poem.length) clearInterval(interval);
  }, speed);
}

// --------------------------------------------------
// ⏱ LOVE TIMER

// const targetDate = new Date("2026-07-24T00:00:00"); // Countdown to 24 July 2026

// function updateTimer() {
//   const now = new Date();
//   let diff = Math.floor((targetDate - now) / 1000);

//   if (diff <= 0) {
//     document.getElementById("timer").innerHTML =
//       "0 Days 0 Hours 0 Minutes 0 Seconds";
//     return;
//   }

//   const days = Math.floor(diff / (3600 * 24));
//   diff %= 3600 * 24;

//   const hours = Math.floor(diff / 3600);
//   diff %= 3600;

//   const minutes = Math.floor(diff / 60);
//   const seconds = diff % 60;

//   const timer = document.getElementById("timer");
//   if (timer) {
//     timer.innerHTML = `${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
//   }
// }

// // Update every second
// updateTimer();
// setInterval(updateTimer, 1000);

// --------------------------------------------------
// ▶️ PAGE 3 AUTO START

const originalNextPage = nextPage;
nextPage = function (num) {
  originalNextPage(num);
  if (num === 3) {
    startTyping();
    setInterval(updateTimer, 1000);
  }
};
