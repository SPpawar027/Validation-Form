const formSubmit = document.querySelector("#formSubmit")
let error = document.querySelector("#error")
const register = document.querySelector(".register")
const scrollsignup = document.querySelector("#scrollsignup")
const menuicon = document.querySelector(".menuicon")
const menu = document.querySelector(".menu")
const close = document.querySelector(".close")
const anchor = document.querySelector(".anchor")

menuicon.addEventListener("click" , function(){
    menu.classList.add("open-menu")
    anchor.parentElement.classList.add("open-menu")
})
close.addEventListener("click",function(){
    menu.classList.remove("open-menu")
    anchor.parentElement.classList.remove("open-menu")
})

register.addEventListener("click" , function(){
    scrollsignup.scrollIntoView({behavior:"smooth"})

})

formSubmit.addEventListener("submit", function (e) {
    let obj = {}
    error.innerHTML = ""
    e.preventDefault()

    const first = document.querySelector(".firstName").value
    const email = document.querySelector(".email").value
    const phone = document.querySelector(".phoneNumber").value
    const password = document.querySelector(".password").value
    const last = document.querySelector(".lastName").value
    // error.innerHTML = ''
    if (!first) {
        error.innerHTML += "* First name is required. <br>"
    }
    if (!last) {
        error.innerHTML += "* last name is required. <br>"
    }
    const phonepattern = /^[0-9]{10}$/;
    if (!phonepattern.test(phone)) {
        error.innerHTML += "* Phone number must be a valid 10-digit number.<br>"
    }
    if (password.length < 8) {
        error.innerHTML += "* Password must be at least 8 characters long.<br>"
    }

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        error.innerHTML += '* Please enter a valid email address.<br>'

    }
    console.log((error.textContent))
    if (!error.textContent) {
        obj = {
            first_name: first,
            last_name: last,
            email: email,
            phone_number: Number(phone),
            password: password
        }
        console.log("obj created")
        console.log(obj)
        alert("form submitted successfully!")
    }





})