function setTheme() {
  const root = document.querySelector("html");
  const themeMode = localStorage.getItem("theme");

  if (
    themeMode === "dark" ||
    (themeMode !== "light" &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    root.classList.add("dark");
  } else {
    root.classList.remove("dark");
  }
}

setTheme();
function changeTheme(mode) {
  
  if (mode === "light") {
    localStorage.setItem("theme", "light");
  } else if (mode === "dark") {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
  }
  setTheme();
}