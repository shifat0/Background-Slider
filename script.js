const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.querySelector(".left");
const rightBtn = document.querySelector(".right");

let activeSlide = 0; // Default active first slide

// Setting BgImg
const setBackgroundImg = () => {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
};

setBackgroundImg();

// Setting active class to the div
const setActiveSlide = () => {
  // Removing active class otherwise slider is going to stop at 4th position
  slides.forEach((slide) => slide.classList.remove("active"));

  slides[activeSlide].classList.add("active");
};

setActiveSlide();

rightBtn.addEventListener("click", () => {
  // Recursive
  activeSlide++;

  if (activeSlide > slides.length - 1) {
    activeSlide = 0;
  }

  // Passing activeSlilder value to this two fun
  setBackgroundImg();
  setActiveSlide();
});

leftBtn.addEventListener("click", () => {
  // Reucursive
  activeSlide--;

  if (activeSlide < 0) {
    activeSlide = slides.length - 1;
  }

  setBackgroundImg();
  setActiveSlide();
});
