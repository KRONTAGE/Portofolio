// animasi load header
window.addEventListener("load", () => {
  document.querySelector(".header").classList.add("show");
});

// animasi load home
window.addEventListener("load", () => {
  document.querySelector(".containerHome").classList.add("show");
});

// animasi scroll to load
const about = document.querySelector(".containerAbout");

const animAbout = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

animAbout.observe(about);

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
