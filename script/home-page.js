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


// Date and Time for iPhone Function
function updateDateTime() {
  const now = new Date();
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const dayOfWeek = daysOfWeek[now.getDay()];
  const dayOfMonth = now.getDate();
  const month = months[now.getMonth()];
  const hours = now.getHours().toString().padStart(2, '0');
  const minutes = now.getMinutes().toString().padStart(2, '0');

  const datetimeString = `<span class="date">${dayOfWeek}, ${dayOfMonth} ${month}</span><br><span class="time">${hours}:${minutes}</span>`;
  document.getElementById('datetime').innerHTML = datetimeString;
}

// Update date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display date and time immediately
updateDateTime();

