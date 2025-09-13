(() => {
  const storageKey = 'storyhub-theme';
  const root = document.documentElement;

  function applyTheme(theme) {
    if (theme === 'light') {
      root.setAttribute('data-theme', 'light');
    } else {
      root.removeAttribute('data-theme');
    }
  }

  function getPreferred() {
    const saved = localStorage.getItem(storageKey);
    if (saved === 'light' || saved === 'dark') return saved;
    const prefersLight = window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches;
    return prefersLight ? 'light' : 'dark';
  }

  let current = getPreferred();
  applyTheme(current);

  const btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', () => {
      current = current === 'light' ? 'dark' : 'light';
      applyTheme(current);
      localStorage.setItem(storageKey, current);
    });
  }
})();

