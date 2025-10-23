// Theme Toggle Functionality
class ThemeManager {
  constructor() {
    this.root = document.documentElement;
    this.themeToggleBtn = document.getElementById('themeToggle');
    this.currentTheme = this.getStoredTheme() || 'light';

    this.init();
  }

  init() {
    // Apply stored theme on page load
    this.applyTheme(this.currentTheme);

    // Add event listener to toggle button
    if (this.themeToggleBtn) {
      this.themeToggleBtn.addEventListener('click', () => this.toggleTheme());
    }
  }

  getStoredTheme() {
    return localStorage.getItem('theme');
  }

  setStoredTheme(theme) {
    localStorage.setItem('theme', theme);
  }

  applyTheme(theme) {
    if (theme === 'dark') {
      this.root.setAttribute('data-theme', 'dark');
    } else {
      this.root.removeAttribute('data-theme');
    }
    this.currentTheme = theme;
    this.setStoredTheme(theme);
  }

  toggleTheme() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.applyTheme(newTheme);
  }
}

// Initialize theme manager when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new ThemeManager();
});
