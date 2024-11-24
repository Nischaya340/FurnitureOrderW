// Function to switch between languages and store the selected language in localStorage
function changeLanguage() {
    const language = document.getElementById('language').value;

    // Save the selected language in localStorage
    localStorage.setItem('selectedLanguage', language);

    // Apply the language change immediately
    applyLanguage(language);
}

// Function to apply the language change based on the selected language
function applyLanguage(language) {
    if (language === 'en') {
        document.getElementById('signupTitle').textContent = "Create an Account";
        document.getElementById('nameLabel').textContent = "Full Name";
        document.getElementById('emailLabel').textContent = "Email";
        document.getElementById('passwordLabel').textContent = "Password";
        document.getElementById('confirmPasswordLabel').textContent = "Confirm Password";
        document.getElementById('submitButton').textContent = "Sign Up";
    } else if (language === 'es') {
        document.getElementById('signupTitle').textContent = "Crear una cuenta";
        document.getElementById('nameLabel').textContent = "Nombre completo";
        document.getElementById('emailLabel').textContent = "Correo electrónico";
        document.getElementById('passwordLabel').textContent = "Contraseña";
        document.getElementById('confirmPasswordLabel').textContent = "Confirmar contraseña";
        document.getElementById('submitButton').textContent = "Registrarse";
    }
}

// On page load, check if a language is stored in localStorage and apply it
window.onload = function() {
    const storedLanguage = localStorage.getItem('selectedLanguage') || 'en'; // Default to English if none is set
    document.getElementById('language').value = storedLanguage; // Set the dropdown to the saved language
    applyLanguage(storedLanguage); // Apply the saved language
};
