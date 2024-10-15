let isDark = false;
export function checkTheme() {
  if (isDark) {
    document.body.classList.remove("theme-dark");
    document.body.classList.add("theme-light");
  } else {
    document.body.classList.add("theme-dark");
    document.body.classList.remove("theme-light");
  }

  isDark = !isDark;
}
