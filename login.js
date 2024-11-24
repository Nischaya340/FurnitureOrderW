// Function to apply the language change based on the selected language
function applyLanguage(language) {
    if (language === 'en') {
        document.getElementById('loginTitle').textContent = "Login to Your Account";
        document.getElementById('emailLabel').textContent = "Email";
        document.getElementById('passwordLabel').textContent = "Password";
        document.getElementById('submitButton').textContent = "Login";
    } else if (language === 'es') {
        document.getElementById('loginTitle').textContent = "Iniciar sesión en tu cuenta";
        document.getElementById('emailLabel').textContent = "Correo electrónico";
        document.getElementById('passwordLabel').textContent = "Contraseña";
        document.getElementById('submitButton').textContent = "Iniciar sesión";
    }
}

// On page load, check if a language is stored in localStorage and apply it
window.onload = function() {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English
    applyLanguage(storedLanguage); // Apply the saved language
};
