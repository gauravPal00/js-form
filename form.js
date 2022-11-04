function mySubmit(event){
    console.log(event.target.value,"event");
    event.preventDefault()
    let arr1 = []
    var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone=/^\d{10}$/; 
    let Name = document.getElementById("Name").value;
    let Email = document.getElementById("Email").value;
    //  let Gender = document.querySelectorAll("input[type=radio][name=Gender]:checked")?.value
    let Number = document.getElementById("phone").value;
    if(Name === ""){
        document.getElementById("error").innerHTML = "please enter your name"
    }
    else if(Email === "" || !regEmail.test(Email)){
        document.getElementById("error").innerHTML = "please enter your email"
    }
    // else if(Gender?.value === undefined ){
    //     document.getElementById("error").innerHTML = "please enter your gender"
    //    console.log(Gender);
    // }
    else if(Number === "" || !regPhone.test(Number)){
        document.getElementById("error").innerHTML = "please enter your Number"
    }
    else{        
    console.log(Name,Email,Number);
    //   let arr = {
    //         name:Name,
    //         email:Email,
    //         number:Number
    //     }
    //   arr1 = [...arr1,...arr]
    // console.log(Name,Email,Number);
    document.getElementById("Name").value = ""
    document.getElementById("Email").value=""
    // document.querySelector('input[name="Gender"]:checked').checked = false
    document.getElementById("phone").value= ""
    }
    
 
   

}