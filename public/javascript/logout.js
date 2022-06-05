const logoutButton = document.getElementById("logoutbutton")

logoutButton.addEventListener("click", event => {
    event.preventDefault()
    fetch("/api/logout")
})

//document.querySelector('#logout').addEventListener('click', logout);