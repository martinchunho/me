const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeColor = document.querySelector('meta[name="theme-color"]');
const themeKey = 'theme';
const themeColors = {
  dark: '#101713',
  light: '#f7f5ef',
};

const getSavedTheme = () => {
  try {
    return window.localStorage.getItem(themeKey);
  } catch {
    return null;
  }
};

const saveTheme = (theme) => {
  try {
    window.localStorage.setItem(themeKey, theme);
  } catch {
    // Storage can be unavailable in private browsing; the visual theme still works.
  }
};

const setTheme = (theme) => {
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  const alternateTheme = nextTheme === 'dark' ? 'light' : 'dark';

  root.dataset.theme = nextTheme;
  themeColor?.setAttribute('content', themeColors[nextTheme]);

  if (themeToggle) {
    themeToggle.setAttribute('aria-label', `Switch to ${alternateTheme} mode`);
  }

  saveTheme(nextTheme);
};

setTheme(getSavedTheme() || root.dataset.theme || 'dark');

themeToggle?.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'light' ? 'dark' : 'light');
});

const year = document.querySelector('#current-year');

if (year) {
  year.textContent = new Date().getFullYear();
}
