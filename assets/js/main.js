//toggling menu on smaller screens
const menuToggle = document.querySelector(".menu-toggle");
const navbarLinks = document.querySelector(".navbar-links");

if (menuToggle && navbarLinks) {
  menuToggle.addEventListener("click", () => {
    navbarLinks.classList.toggle("active");
    menuToggle.querySelector("i").classList.toggle("fa-bars");
    menuToggle.querySelector("i").classList.toggle("fa-times");
  });
}

//Brand SideBar
const track = document.getElementById("brandTrack");
const prevBtn = document.querySelector(".brand-slider__btn--prev");
const nextBtn = document.querySelector(".brand-slider__btn--next");

nextBtn.addEventListener("click", () => {
  track.scrollBy({ left: 200, behavior: "smooth" });
});

prevBtn.addEventListener("click", () => {
  track.scrollBy({ left: -200, behavior: "smooth" });
});

function updateButtonVisibility() {
  const scrollLeft = track.scrollLeft;
  const scrollWidth = track.scrollWidth - track.clientWidth;

  prevBtn.style.display = scrollLeft > 10 ? "block" : "none";
  nextBtn.style.display = scrollLeft >= scrollWidth - 10 ? "none" : "block";
}

track.addEventListener("scroll", updateButtonVisibility);
window.addEventListener("resize", updateButtonVisibility);
document.addEventListener("DOMContentLoaded", updateButtonVisibility);

let isDown = false;
let startX;
let scrollLeft;

track.addEventListener("mousedown", (e) => {
  isDown = true;
  track.classList.add("dragging");
  startX = e.pageX - track.offsetLeft;
  scrollLeft = track.scrollLeft;
});

track.addEventListener("mouseleave", () => {
  isDown = false;
  track.classList.remove("dragging");
});

track.addEventListener("mouseup", () => {
  isDown = false;
  track.classList.remove("dragging");
});

track.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - track.offsetLeft;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;
});

track.addEventListener("touchstart", (e) => {
  isDown = true;
  startX = e.touches[0].pageX;
  scrollLeft = track.scrollLeft;
});

track.addEventListener("touchmove", (e) => {
  if (!isDown) return;
  const x = e.touches[0].pageX;
  const walk = (x - startX) * 1.5;
  track.scrollLeft = scrollLeft - walk;
});

track.addEventListener("touchend", () => {
  isDown = false;
});

// category
const categoryTrack = document.getElementById("CategoryTrack");
const categoryPrevBtn = document.querySelector(".category-slider__btn--prev");
const categoryNextBtn = document.querySelector(".category-slider__btn--next");

// Scroll via arrow buttons
categoryNextBtn.addEventListener("click", () => {
  categoryTrack.scrollBy({ left: 200, behavior: "smooth" });
});

categoryPrevBtn.addEventListener("click", () => {
  categoryTrack.scrollBy({ left: -200, behavior: "smooth" });
});

// Toggle visibility of buttons
function updateCategoryButtonVisibility() {
  const scrollLeft = categoryTrack.scrollLeft;
  const scrollWidth = categoryTrack.scrollWidth - categoryTrack.clientWidth;

  categoryPrevBtn.style.display = scrollLeft > 10 ? "block" : "none";
  categoryNextBtn.style.display =
    scrollLeft >= scrollWidth - 10 ? "none" : "block";
}

categoryTrack.addEventListener("scroll", updateCategoryButtonVisibility);
window.addEventListener("resize", updateCategoryButtonVisibility);
document.addEventListener("DOMContentLoaded", updateCategoryButtonVisibility);

// Drag/Swipe Scroll
let isCategoryDragging = false;
let categoryStartX;
let categoryScrollStart;

categoryTrack.addEventListener("mousedown", (e) => {
  isCategoryDragging = true;
  categoryTrack.classList.add("dragging");
  categoryStartX = e.pageX - categoryTrack.offsetLeft;
  categoryScrollStart = categoryTrack.scrollLeft;
});

categoryTrack.addEventListener("mouseleave", () => {
  isCategoryDragging = false;
  categoryTrack.classList.remove("dragging");
});

categoryTrack.addEventListener("mouseup", () => {
  isCategoryDragging = false;
  categoryTrack.classList.remove("dragging");
});

categoryTrack.addEventListener("mousemove", (e) => {
  if (!isCategoryDragging) return;
  e.preventDefault();
  const x = e.pageX - categoryTrack.offsetLeft;
  const walk = (x - categoryStartX) * 1.5;
  categoryTrack.scrollLeft = categoryScrollStart - walk;
});

// Touch support
categoryTrack.addEventListener("touchstart", (e) => {
  isCategoryDragging = true;
  categoryStartX = e.touches[0].pageX;
  categoryScrollStart = categoryTrack.scrollLeft;
});

categoryTrack.addEventListener("touchmove", (e) => {
  if (!isCategoryDragging) return;
  const x = e.touches[0].pageX;
  const walk = (x - categoryStartX) * 1.5;
  categoryTrack.scrollLeft = categoryScrollStart - walk;
});

categoryTrack.addEventListener("touchend", () => {
  isCategoryDragging = false;
});
