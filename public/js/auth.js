const logoutEl = document.getElementById("logout");

logoutEl.addEventListener("click", (event) => {
event.preventDefault();

fetch("/api/user/logout", {
    method: "POST",

}).then(() => {
    location.reload();
})
})