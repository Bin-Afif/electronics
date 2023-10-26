// ========= to home

let tohome = document.getElementById("tohome");

tohome.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};

// ======nav bar
let nav = document.querySelector(".navbar");
let open = document.querySelector(".open-list");
let close = document.querySelector(".close-list");

open.onclick = function() {
  nav.classList.add("open-nav");
  open.style.display = "none";
  close.style.color = "white";
};
close.onclick = function() {
  nav.classList.remove("open-nav");
  open.style.display = "block";
};
// ==============   swiper

// ========= scroll Y header
let header = document.getElementById("header");
let scrollX = (window.onscroll = function() {
  if (this.scrollY >= 813) {
    header.style.background = "var(--body-color)";
    console.log(this.scrollY);
  } else {
    header.style.background = "transparent";
  }
});

// ======== footer
let toTop = document.getElementById("top");

toTop.onclick = function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
};
/*================ scroall reveaol =========================== */

ScrollReveal({
  reset: true,
  distance: `90px`,
  duration: 2000,
  delay: 200
});
ScrollReveal().reveal(".conent-text-home h1", {
  origin: `right`
});
ScrollReveal().reveal(".conent-text-home h3", {
  origin: `left`
});
/*================ typed js =========================== */

const typed = new Typed(`.multiple-text`, {
  strings: [
    `صيانة شاشات`,
    `صيانة اجهزة شحن بجميع انواعها`,
    `صيانة مراوح سقف اقتصادية`,
    `تركيب مشارع اردوينو`,
    `تركيب منظومات شمسية`
  ],
  typeSpeed: 120,
  backSpeed: 100,
  backDelay: 1200,
  loop: true
});
