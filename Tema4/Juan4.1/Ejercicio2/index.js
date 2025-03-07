const themeSelector = document.getElementById('themeSelector');
const fontSizeSelector = document.getElementById('fontSizeSelector');
const languageSelector = document.getElementById('languageSelector');
const savePreferencesButton = document.getElementById('savePreferences');
const resetPreferencesButton = document.getElementById('resetPreferences');
const app = document.getElementById('app');

function loadPreferences() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    const savedFontSize = localStorage.getItem('fontSize') || 'medium';
    const savedLanguage = localStorage.getItem('language') || 'es';

    themeSelector.value = savedTheme;
    fontSizeSelector.value = savedFontSize;
    languageSelector.value = savedLanguage;

    applyPreferences(savedTheme, savedFontSize);
}

function applyPreferences(theme, fontSize) {
    app.className = theme === 'dark' ? 'dark-theme' : 'light-theme';
    app.style.fontSize = fontSize === 'small' ? '14px' : fontSize === 'large' ? '20px' : '16px';
}

function savePreferences() {
    const theme = themeSelector.value;
    const fontSize = fontSizeSelector.value;
    const language = languageSelector.value;

    localStorage.setItem('theme', theme);
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('language', language);

    applyPreferences(theme, fontSize);
}

function resetPreferences() {
    localStorage.removeItem('theme');
    localStorage.removeItem('fontSize');
    localStorage.removeItem('language');

    themeSelector.value = 'light';
    fontSizeSelector.value = 'medium';
    languageSelector.value = 'es';

    applyPreferences('light', 'medium');
}

savePreferencesButton.addEventListener('click', savePreferences);
resetPreferencesButton.addEventListener('click', resetPreferences);

loadPreferences();
