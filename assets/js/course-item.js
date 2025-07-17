const btnCourses = document.querySelectorAll(".btn--courses");

btnCourses.forEach(btn => {
    btn.addEventListener("click", () => {
        const coursesItem = btn.parentElement;
        const itemActive = coursesItem.classList.contains("active");

        itemActive ? coursesItem.classList.remove("active") : coursesItem.classList.add("active");
    })

});

// const accordionHeaders = document.querySelectorAll(".accordion__header");

// accordionHeaders.forEach(header => {
//   header.addEventListener("click", () => {
//     const accordionItem = header.parentElement;
//     const accordionActive = accordionItem.classList.contains("active");

//     accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
//   })
// })