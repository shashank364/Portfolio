// loading screen
function stars() {
  let count = 21;
  let scene = document.querySelector(".scene");
  let i = 0;
  while (i < count) {
    let star = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);

    let duration = Math.random() * 1;
    let h = Math.random() * 100;

    star.style.left = x + "px";
    star.style.width = 1 + "px";
    star.style.height = 50 + h + "px";
    star.style.animationDuration = duration + "s";

    scene.appendChild(star);
    i++;
  }
}
stars();
function counter() {
  var count = setInterval(function () {
    var c = parseInt($(".counter").text());
    $(".counter").text((++c).toString());
    if (c == 100) {
      clearInterval(count);
      $(".counter").addClass("hide");
      $(".preloader").addClass("active");
      document.body.classList.remove("noscroll");
      document.documentElement.classList.remove("noscroll");
    }
  }, 30);
}
counter();
// !loading screen

//  for typing effect
const TypeWriter = function (txtElement, words, wait = 2500) {
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  this.type();
  this.isDeleting = false;
};

TypeWriter.prototype.type = function () {
  const current = this.wordIndex % this.words.length;

  const fullTxt = this.words[current];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  let typeSpeed = 300;

  if (this.isDeleting) {
    typeSpeed /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    typeSpeed = this.wait;

    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;

    this.wordIndex++;

    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};

document.addEventListener("DOMContentLoaded", inti);

function inti() {
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  new TypeWriter(txtElement, words, wait);
}
// ! for typing effect

// nav bar sliding
const burger = document.querySelector(".burger");
const navSlide = () => {
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  function animationNav() {
    navLinks.forEach((link, index) => {
      if (burger.classList.contains("open")) {
        link.style.animation = `navLinkFade 0.5s ease forwards ${
          index / 6 + 0.1
        }s`;
      } else {
        link.style.animation = "";
      }
    });
  }
  burger.addEventListener("click", function () {
    // Toggle nav
    nav.classList.toggle("nav-active");
    // burger animation
    burger.classList.toggle("open");
    // Animate Links
    animationNav();
    // document.body.classList.toggle("noscroll");
    // document.documentElement.classList.toggle("noscroll");
  });
  nav.addEventListener("click", function () {
    nav.classList.remove("nav-active");
    burger.classList.remove("open");
    animationNav();
    // document.body.classList.remove("noscroll");
    // document.documentElement.classList.remove("noscroll");
  });
  // for closing nav on clicking on body
  document.body.addEventListener("click", function (e) {
    if (e.target != burger && e.target != burger.children[0]) {
      nav.classList.remove("nav-active");
      burger.classList.remove("open");
      animationNav();
    }
  });
};
navSlide();
// ! nav bar sliding

// button move to top
const btnTop = document.querySelector("#movetop");

const navLinksAll = document.querySelectorAll(".nav-links li a");
const homeNav = document.getElementById("HOME-NAV");
const aboutNav = document.getElementById("ABOUT-NAV");
const factNav = document.getElementById("FACT-NAV");
const repoNav = document.getElementById("REPO-NAV");
const workNav = document.getElementById("WORK-NAV");
const contactNav = document.getElementById("CONTACT-NAV");
btnTop.addEventListener("click", function () {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});
window.onscroll = function () {
  burger.classList.toggle(
    "stickyToggel",
    window.scrollY < 450 && window.scrollY > 40
  );

  var positionTop = document.documentElement.scrollTop;
  // console.log(positionTop);
  if (positionTop > 4144 - 236) {
    //4144
    navLinksAll.forEach((all) => all.classList.remove("active"));
    contactNav.classList.add("active");
  } else if (positionTop > 3439 - 236) {
    //3439
    navLinksAll.forEach((all) => all.classList.remove("active"));
    workNav.classList.add("active");
  } else if (positionTop > 3039 - 236) {
    //3039
    navLinksAll.forEach((all) => all.classList.remove("active"));
    repoNav.classList.add("active");
  } else if (positionTop > 1950 - 236) {
    //1950
    navLinksAll.forEach((all) => all.classList.remove("active"));
    factNav.classList.add("active");
  } else if (positionTop > 477 - 236) {
    //477
    navLinksAll.forEach((all) => all.classList.remove("active"));
    aboutNav.classList.add("active");
  } else if (positionTop > 0) {
    navLinksAll.forEach((all) => all.classList.remove("active"));
    homeNav.classList.add("active");
  }

  if (
    document.body.scrollTop > 100 ||
    document.documentElement.scrollTop > 100
  ) {
    btnTop.style.display = "block";
  } else {
    btnTop.style.display = "none";
  }
};
// ! button move to top

// WhatsApp toggle
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(
  navigator.userAgent
);
var whatsapp = document.getElementById("wp");

if (isMobile) {
  whatsapp.innerHTML = '<i id="g" class="fab fa-whatsapp"></i><p>WhatsApp</p>';
  whatsapp.href =
    "https://wa.me/+919900998257/?text=Hi, just saw your webpage!";
} else {
  whatsapp.innerHTML =
    '<i id="g" class="fab fa-whatsapp"></i><p>WhatsApp Web</p>';
  whatsapp.href =
    "https://api.whatsapp.com/send?phone=+919900998257&text=Hi, Just saw your Webpage!";
}
// !WhatsApp toggle

// My Skill
function skill() {
  const skillData = [
    { name: "Web Design", percentage: 70 },
    { name: "HTML", percentage: 80 },
    { name: "CSS", percentage: 80 },
    { name: "JavaScript", percentage: 50 },
    { name: "PHP", percentage: 60 },
    { name: "Python", percentage: 80 },
    { name: "Java", percentage: 47 },
    { name: "SQL", percentage: 90 },
    { name: "C | C++", percentage: 60},
  ];
  const skills = document.querySelector(".MySkill");
  // for (let i = 0; i < skillData.length; i++) {
  for (const item of skillData) {
    skills.innerHTML +=
      "<h6>" +
      item.name +
      "<span>" +
      item.percentage +
      "%</span></h6>" +
      '<div class="progress">' +
      '<div class="bar" style="width: ' +
      item.percentage +
      '%;"></div></div>';
  }
}
skill();
// !My Skill

// My Hobbies
function hobbies() {
  const hobbyData = [
    { name: "Coding", icon: "code" },
    { name: "Music", icon: "music" },
    { name: "Traveling", icon: "plane" },
    { name: "Swimming", icon: "swimming-pool" },
    { name: "learning", icon: "graduation-cap" },
    { name: "Photography", icon: "camera" },
    { name: "Driving", icon: "motorcycle" },
    { name: "Web Seeries", icon: "television" },
  ];

  const hobby = document.querySelector(".box");
  // for (let i = 0; i < hobbyData.length; i++) {
  for (const item of hobbyData) {
    hobby.innerHTML +=
      '<div class="hobbies-box"><span class="fa fa-' +
      item.icon +
      ' bg-secondary"></span><h5 class="flex">' +
      item.name +
      "</h5></div>";
  }
}
hobbies();
// !My Hobbies

// My Work

