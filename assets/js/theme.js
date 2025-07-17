const toogleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;

function changeTheme() {
    const currentTheme = rootHtml.getAttribute("data-theme");

    currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark");
    
    toogleTheme.classList.toggle("bi-sun")
    toogleTheme.classList.toggle("bi-moon-stars")
}

toogleTheme.addEventListener("click", changeTheme);