const userPassword = document.getElementById("password")
const userUsername = document.getElementById("username")

const submitButton = document.getElementById("submitbutton")

submitButton.addEventListener("click", event => {
    event.preventDefault()
    const loginData = {
        userName: userUsername.value.trim(),
        userPassword: userPassword.value.trim(),
    }
    if (!loginData.userName || !loginData.userPassword) {
        return
    }
    fetch("/api/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify(loginData),
    }).then(fetch("/dashboard"))
})

//document.querySelector('.login-form').addEventListener('submit', loginFormHandler);

//document.querySelector('.signup-form').addEventListener('submit', signupFormHandler);
