// animasi load header
window.addEventListener("load", () => {
  document.querySelector(".header").classList.add("show");
});

// animasi load home
window.addEventListener("load", () => {
  document.querySelector(".containerHome").classList.add("show");
});

// toogle dark&light
const circle = document.getElementById("circle");
const sound = document.getElementById("sound")

const body = document.body;
const header = document.querySelector("header");
const texts = document.querySelectorAll("a");
const ps = document.querySelectorAll("p");
const h1s = document.querySelectorAll("h1");
const h2s = document.querySelectorAll("h2");
const h4s = document.querySelectorAll("h4");
const toogle = document.getElementById("toogle");
const btn1 = document.getElementById("btn");
const boxSosmed = document.querySelectorAll(".boxSosmed");

circle.addEventListener("click", () => {
  circle.classList.toggle("switch");
  body.classList.toggle("switch");
  header.classList.toggle("switch");
  toogle.classList.toggle("switch");
  texts.forEach((text) => {
    text.classList.toggle("switch");
  });
  ps.forEach((p) => {
    p.classList.toggle("switch");
  });
  h1s.forEach((h1) => {
    h1.classList.toggle("switch");
  });
  h2s.forEach((h2) => {
    h2.classList.toggle("switch");
  });
  h4s.forEach((h4) => {
    h4.classList.toggle("switch");
  });
  boxSosmed.forEach((box) => {
    box.classList.toggle("switch");
  });
  sound.currentTime = 0;
  sound.play();
});

// animasi scroll to load
const home = document.querySelector(".containerHome");
const about = document.querySelector(".containerAbout");
const contact = document.querySelector(".containerContact");

const animHome = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const animAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

const animContact = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

animHome.observe(home);
animAbout.observe(about);
animContact.observe(contact);

// klik to link
const items = document.querySelectorAll(".boxSosmed");
const links = document.querySelectorAll(".link");

items.forEach((item) => {
  item.addEventListener("click", () => {
    links.forEach((link) => link.classList.remove("show"));

    const thisLink = item.querySelector(".link");
    if (thisLink) {
      thisLink.classList.add("show");
    }
  });
});
