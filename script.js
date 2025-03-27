function openTab(event, tabName) {
  var i, tabContent, tabLinks;

  // Hide all content
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  // Remove active class from all tabs
  tabLinks = document.getElementsByClassName("tab-link");
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].classList.remove("active");
  }

  // Show the clicked tab
  document.getElementById(tabName).style.display = "block";
  event.currentTarget.classList.add("active");
}

// Show default tab
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("skills").style.display = "block";
});

// Get modal elements
const modal = document.getElementById("skills-modal");
const closeBtn = document.querySelector(".close");
const tabButtons = document.querySelectorAll(".tab-button");
const tabContents = document.querySelectorAll(".tab-content");

// Open modal
document
  .getElementById("view-skills-btn")
  .addEventListener("click", function () {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
    }, 10); // Small delay for smooth transition
  });

// Close modal when clicking the close button
closeBtn.addEventListener("click", function () {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
  }, 300); // Matches CSS transition duration
});

// Close modal when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.classList.remove("show");
    setTimeout(() => {
      modal.style.display = "none";
    }, 300);
  }
});

// Tab switching logic
tabButtons.forEach((button) => {
  button.addEventListener("click", function () {
    // Remove active class from all buttons and contents
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to the clicked button and corresponding tab content
    this.classList.add("active");
    document
      .getElementById(this.getAttribute("data-tab"))
      .classList.add("active");
  });
});

// Ensure the first tab is active on load
tabButtons[0].classList.add("active");
tabContents[0].classList.add("active");

const words = ["Developer", "Problem Solver", "Software Engineer", "Student"];
const typingText = document.getElementById("typing-text");
const cursor = document.querySelector(".cursor");

let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
  const currentWord = words[wordIndex];
  const typingSpeed = isDeleting ? 50 : 100;

  if (isDeleting) {
    typingText.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingText.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentWord.length) {
    setTimeout(() => (isDeleting = true), 1000); // Wait before deleting
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length; // Move to next word
  }

  setTimeout(typeEffect, typingSpeed);
}

// Start the typing effect
document.addEventListener("DOMContentLoaded", () =>
  setTimeout(typeEffect, 500)
);
