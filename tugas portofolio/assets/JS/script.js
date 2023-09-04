// dark mode
const toggleBtn = document.getElementById('toggle-btn');
const icon = document.getElementById('icon');
const body = document.body;

toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    const isDarkMode = body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        icon.textContent = '☀️';
        localStorage.setItem('dark-mode', 'enabled');
    } else {
        icon.textContent = '🌙';
        localStorage.setItem('dark-mode', 'disabled');
    }
});

const savedMode = localStorage.getItem('dark-mode');
if (savedMode === 'enabled') {
    body.classList.add('dark-mode');
    icon.textContent = '☀️';
}
