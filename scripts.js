// scripts.js

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Theme switcher
const themeSwitcher = document.createElement("button");
themeSwitcher.textContent = "Switch Theme";
document.body.appendChild(themeSwitcher);

themeSwitcher.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Dark theme styles
const darkThemeStyles = `
  body.dark-theme {
      background-color: #333;
      color: #f6f6f6;

  
  }
  body.dark-theme header {
      background-color: #005f8a;
  }
  body.dark-theme .project {
      background-color: #0077b6;
  }
  body.dark-theme form button {
      background-color: #005f8a;
  }
  body.dark-theme form button:hover {
      background-color: #004466;
  }
`;

// Append dark theme styles to the document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = darkThemeStyles;
document.head.appendChild(styleSheet);
