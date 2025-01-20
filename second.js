// Typed.js for Dynamic Text
new Typed("#dynamic-text", {
    strings: ["A Web Developer.", "A Python Enthusiast.", "A Problem Solver."],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });
  
  // Persistent Dark Mode
  const darkModeToggle = document.getElementById("dark-mode-checkbox");
  darkModeToggle.addEventListener("change", () => {
    document.body.classList.toggle("dark-mode", darkModeToggle.checked);
    localStorage.setItem("darkMode", darkModeToggle.checked);
  });
  if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
    darkModeToggle.checked = true;
  }
  
  // Animate Skill Bars
  const skillBars = document.querySelectorAll(".progress");
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.width = entry.target.dataset.width;
      }
    });
  });
  skillBars.forEach((bar) => observer.observe(bar));
  
  // Contact Form Submission with EmailJS
  const form = document.getElementById("contact-form");
  const responseMsg = document.getElementById("form-response");
  
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your EmailJS public key
    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form)
      .then(() => {
        responseMsg.textContent = "Message sent successfully!";
        responseMsg.style.color = "green";
        form.reset();
      })
      .catch(() => {
        responseMsg.textContent = "Failed to send the message. Try again!";
        responseMsg.style.color = "red";
      });
  });
//   <div id="lightbox" class="lightbox">
//   <span class="close">&times;</span>
//   <img class="lightbox-img" src="" alt="">
//   <p class="lightbox-caption"></p>
// </div>
// Lightbox functionality
const galleryItems = document.querySelectorAll(".gallery-item img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.querySelector(".lightbox-img");
const lightboxCaption = document.querySelector(".lightbox-caption");
const closeLightbox = document.querySelector(".lightbox .close");

galleryItems.forEach((item) => {
  item.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = item.src;
    lightboxCaption.textContent = item.alt;
  });
});

closeLightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
