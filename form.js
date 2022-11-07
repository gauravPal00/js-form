function mySubmit(event) {
    event.preventDefault()
    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;
    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let number = document.getElementById("phone").value;
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    var gender = '';
    var allData = document.getElementById("demo")
    if (male) {
        gender = document.getElementById("male").value
    }
    if (female) {
        gender = document.getElementById("female").value
    }
    if (name === "") {
        document.getElementById("error").innerHTML = "please enter your name"
    }
    else if (email === "") {
        document.getElementById("error").innerHTML = "please enter your email"
    }
    else if (!regEmail.test(email)) {
        document.getElementById("error").innerHTML = "please enter your valid email"
    }
    else if (gender === "") {
        document.getElementById("error").innerHTML = "please enter your gender"
    }
    else if (number === "") {
        document.getElementById("error").innerHTML = "please enter your Number"
    }
    else if (!regPhone.test(number)) {
        document.getElementById("error").innerHTML = "please enter your valid Number"
    }
    else {
        console.log(name, email, number, gender);
        let a = 0;
        allData.innerHTML += `<tr id="${a++}"><td>${name}</td><td>${number}</td><td>${email}</td><td>${gender}</td><td></td></tr>`
        document.getElementById("Name").value = ""
        document.getElementById("Email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("error").innerHTML = ""
        document.getElementById("male").checked = false
        document.getElementById("female").checked = false
        gender == ""
    }

}