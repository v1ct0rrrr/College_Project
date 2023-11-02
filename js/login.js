/* ====================  LOGIN | REGISTER  ====================*/


$(function(){

    const wrapper = document.querySelector(".wrap")
    const loginLink = document.querySelector(".login-link")
    const registerLink = document.querySelector(".register-link")

    registerLink.addEventListener('click', ()=>{
        wrapper.classList.add('active')
    })

    loginLink.addEventListener('click', ()=>{
        wrapper.classList.remove('active')
    })

})



/* ==================== HIDE PASSWORD ==================== */


$(function(){
    const loginShowPassword = document.querySelector("#reg-show-password")
    const loginPasswordField = document.querySelector("#reg-password")

    loginShowPassword.addEventListener("click", function(){
        this.classList.toggle("bi-eye-slash-fill")

        let type = loginPasswordField.getAttribute("type") === "password" ? "text" : "password"

        loginPasswordField.setAttribute("type", type)
    })


    const registerShowPassword = document.querySelector("#show-password")
    const registerPasswordField = document.querySelector("#password")

    registerShowPassword.addEventListener("click", function(){
        this.classList.toggle("bi-eye-slash-fill")

        let type = registerPasswordField.getAttribute("type") === "password" ? "text" : "password"

        registerPasswordField.setAttribute("type", type)
    })
})