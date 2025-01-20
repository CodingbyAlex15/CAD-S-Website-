// Toggle Side Menu
function toggleSideMenu() {
  const menu = document.getElementById("side-menu");
  menu.style.left = menu.style.left === "0px" ? "-250px" : "0px";
}

// Toggle Tabs
function showTab(tabId) {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach(tab => tab.style.display = "none");
  document.getElementById(tabId).style.display = "block";
}

// Toggle Dark Mode
function toggleDarkMode() {
  const isChecked = document.getElementById("dark-mode-toggle").checked;
  document.body.classList.toggle("dark", isChecked);
  document.getElementById("side-menu").classList.toggle("dark", isChecked);

  const links = document.querySelectorAll("#menu-links a");
  links.forEach(link => link.classList.toggle("dark", isChecked));

  localStorage.setItem("darkMode", isChecked ? "enabled" : "disabled");
}

// Load Dark Mode Preference
document.addEventListener("DOMContentLoaded", () => {
  const darkMode = localStorage.getItem("darkMode");
  const isDark = darkMode === "enabled";
  document.body.classList.toggle("dark", isDark);
  document.getElementById("side-menu").classList.toggle("dark", isDark);
  document.getElementById("dark-mode-toggle").checked = isDark;

  const links = document.querySelectorAll("#menu-links a");
  links.forEach(link => link.classList.toggle("dark", isDark));

  showTab("welcome"); // Show Welcome tab by default
});

