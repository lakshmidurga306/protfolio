const progressBars = document.querySelectorAll(".progress");

const animateProgress = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const progress = entry.target;
      const targetWidth = progress.getAttribute("data-progress");
      progress.style.width = targetWidth + "%";
    } else {
      const progress = entry.target;
      progress.style.width = "0%";
    }
  });
};

const observer = new IntersectionObserver(animateProgress, {
  threshold: 0.5,
});

progressBars.forEach((progressBar) => {
  observer.observe(progressBar);
});
var typed = new Typed("#element", {
  strings: [
    "Java Full Stack Fresher |",
    "Completed Java Full Stack Training |",
    "Passionate Frontend Learner |",
    "Ready to Start My Developer Journey |",
    "Eager to Learn & Grow |",
    "Aspiring Web Developer |"
  ],
  typeSpeed: 50,
  backSpeed: 50,
  loop: true,
  showCursor: false, // Don't show the blinking cursor
});





