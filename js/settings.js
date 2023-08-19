document.addEventListener('click', function(event) {
    const settingsWindow = document.getElementById('settingsWindow');
    const settingsIcon = document.querySelector('.settings-icon');

    if (!settingsWindow.contains(event.target) && event.target !== settingsIcon) {
        settingsWindow.style.display = 'none';
    }
});

function toggleSettingsWindow() {
    const settingsWindow = document.getElementById('settingsWindow');
    settingsWindow.style.display = settingsWindow.style.display === 'block' ? 'none' : 'block';
}