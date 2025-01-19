// Tab Switching
function switchTab(tabId) {
    const tabs = document.querySelectorAll('#tabs button');
    const sections = document.querySelectorAll('#content > div');

    tabs.forEach(tab => tab.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));

    document.querySelector(`#tabs button[onclick="switchTab('${tabId}')"]`).classList.add('active');
    document.getElementById(tabId).classList.add('active');
}

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}