particlesJS("particles-js", {
  "particles": {
    "number": { "value": 30, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#C084FC" },
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true,
      "anim": { "enable": true, "speed": 1, "opacity_min": 0.1 }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": { "enable": true, "speed": 3, "size_min": 2 }
    },
    "line_linked": { "enable": false },
    "move": {
      "enable": true,
      "speed": 1.5,
      "direction": "none",
      "random": true,
      "out_mode": "bounce",
      "bounce": true
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "bubble" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "bubble": { "distance": 100, "size": 12, "duration": 2, "color": "#C084FC" },
      "push": { "particles_nb": 4 }
    }
  }
});