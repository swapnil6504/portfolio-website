function scrollToSection(sectionId) {
  var section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function toggleTheme() {
  const body = document.body;
  body.classList.toggle("dark-mode");
  const themeStyle = document.getElementById("theme-style");
  const isDarkMode = body.classList.contains("dark-mode");

  const iconToggle = document.getElementById("icon-toggle");
  const sunIcon = iconToggle.querySelector(".lucide-sun");
  const moonIcon = iconToggle.querySelector(".lucide-moon");
  sunIcon.style.display = isDarkMode ? "none" : "inline-block";
  moonIcon.style.display = isDarkMode ? "inline-block" : "none";

  localStorage.setItem("dark-mode", isDarkMode);

  themeStyle.href = `../css/home-page${isDarkMode ? "-dark" : ""}.css`;
}

const prefersDarkMode = localStorage.getItem("dark-mode") === "true";

if (prefersDarkMode) {
  document.body.classList.add("dark-mode");
  toggleTheme();
}
