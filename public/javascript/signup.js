const userEmail = document.getElementById("email")
const userPassword = document.getElementById("password")
const userUsername = document.getElementById("username")

const submitButton = document.getElementById("submitbutton")

submitButton.addEventListener("click", event => {
    event.preventDefault()
    const signupData = {
        userName: userUsername.value.trim(),
        userEmail: userEmail.value.trim(),
        userPassword: userPassword.value.trim(),
    }
    if (!signupData.userName || !signupData.userEmail || !signupData.userPassword) {
        // brodcast user message"not valid data"
        return
    }
    fetch("/api/signup", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-type": "application/json",
        },
        body: JSON.stringify(signupData),
    })
})
