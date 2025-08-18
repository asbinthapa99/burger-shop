document.addEventListener('DOMContentLoaded', () => {
    const darkToggle = document.getElementById('dark-mode-toggle');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }

    function enableDarkMode() {
        document.body.classList.add('dark-theme');
        localStorage.setItem('theme', 'dark');
        darkToggle.innerHTML = '<i class="ri-sun-fill"></i>';
        console.log('Dark mode enabled');
    }

    function disableDarkMode() {
        document.body.classList.remove('dark-theme');
        localStorage.setItem('theme', 'light');
        darkToggle.innerHTML = '<i class="ri-moon-fill"></i>';
        console.log('Dark mode disabled');
    }

    darkToggle.addEventListener('click', () => {
        console.log('Toggle clicked');
        if (document.body.classList.contains('dark-theme')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });
});