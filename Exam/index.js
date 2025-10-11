const form = document.getElementById("loginForm");
const errorText = document.getElementById("errorText");
const loginPage = document.getElementById("loginPage");
const homePage = document.getElementById("homePage");
const booksPage = document.getElementById("booksPage");
const findBooksBtn = document.getElementById("findBooksBtn");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Dummy login validation
    if (username === "" && password === "") {
        errorText.classList.add("d-none");
        loginPage.classList.add("d-none");
        homePage.classList.add("active");
        homePage.classList.remove("d-none");
    } else {
        errorText.classList.remove("d-none");
    }
});

findBooksBtn.addEventListener("click", () => {
    homePage.classList.add("d-none");
    booksPage.classList.remove("d-none");

});