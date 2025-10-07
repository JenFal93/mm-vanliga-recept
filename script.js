// ---- MENYKNAPP ----
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("hidden"); 
});


// ---- BILDSPEL (med fade) ----
let slideIndex = 0;
const slides = document.querySelectorAll(".slideshow-container img");

function showSlides() {
  slides.forEach(slide => {
    slide.style.display = "none";
    slide.classList.remove("active");
  });

  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }

  slides[slideIndex - 1].style.display = "block";
  slides[slideIndex - 1].classList.add("active");

  setTimeout(showSlides, 4000); // byter bild var 4:e sekund
}

if (slides.length > 0) showSlides();

// --- Popup-hantering för Om mig och Kontakt ---
const aboutLink = document.getElementById("about-link");
const contactLink = document.getElementById("contact-link");
const aboutPopup = document.getElementById("about-popup");
const contactPopup = document.getElementById("contact-popup");
const closeButtons = document.querySelectorAll(".close");

// Öppna popup när man klickar på länkarna (utan att sidan hoppar)
aboutLink.addEventListener("click", (e) => {
  e.preventDefault(); // förhindrar att sidan hoppar upp till toppen
  aboutPopup.classList.add("show");
});

contactLink.addEventListener("click", (e) => {
  e.preventDefault(); // samma här
  contactPopup.classList.add("show");
});


// Stäng popup när man klickar på krysset
closeButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    aboutPopup.classList.remove("show");
    contactPopup.classList.remove("show");
  });
});

// Stäng popup om man klickar utanför rutan
window.addEventListener("click", (e) => {
  if (e.target === aboutPopup) aboutPopup.classList.remove("show");
  if (e.target === contactPopup) contactPopup.classList.remove("show");
});


