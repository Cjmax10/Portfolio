const body = document.querySelector('body');
const darkMode = document.getElementById('dark-mode-toggle');

// Functions
function changeTheme() {
    if(body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
    } else {
        body.classList.add('dark-mode');
    }
    
}

// Event Listeners
darkMode.addEventListener('change', changeTheme);