const lightThemeBtn = document.querySelector('.light-theme-button');
const darkThemeBtn = document.querySelector('.dark-theme-button');
const mainPage = document.querySelector('.main-page');

if (lightThemeBtn && darkThemeBtn && mainPage) {
  window.onload = () => {
    const themeInLocal = localStorage.getItem('theme');
    if (themeInLocal === 'dark') {
      setDarkTheme();
    } else {
      setLightTheme();
    }
  };

  lightThemeBtn.addEventListener('click', setLightThemeHandler);
  darkThemeBtn.addEventListener('click', setDarkThemeHandler);
}

function setLightThemeHandler() {
  setLightTheme();
  localStorage.removeItem('theme');
}

function setDarkThemeHandler() {
  setDarkTheme();
  localStorage.setItem('theme', 'dark');
}

function setDarkTheme() {
  mainPage.classList.add('dark-theme');
  darkThemeBtn.classList.add('active');
  lightThemeBtn.classList.remove('active');
  darkThemeBtn.disabled = true;
  lightThemeBtn.disabled = false;
}

function setLightTheme() {
  mainPage.classList.remove('dark-theme');
  lightThemeBtn.classList.add('active');
  darkThemeBtn.classList.remove('active');
  darkThemeBtn.disabled = false;
  lightThemeBtn.disabled = true;
}
