const toogleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function localTheme() {
    const savedTheme = localStorage.getItem("data-theme");

    if (savedTheme) {
    document.documentElement.setAttribute('data-theme', savedTheme);
  }
}

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    if (currentTheme === "dark") {
        rootHtml.setAttribute("data-theme", "light");
        localStorage.setItem("data-theme", "light");
    } else {
        rootHtml.setAttribute("data-theme", "dark");
        localStorage.setItem("data-theme", "dark");
    }

    
    toogleTheme.classList.toggle("bi-sun")
    toogleTheme.classList.toggle("bi-moon-stars")
}

document.addEventListener("DOMContentLoaded", localTheme);
toogleTheme.addEventListener("click", changeTheme);