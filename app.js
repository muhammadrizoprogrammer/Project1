let PhonNumber = document.getElementById("PhonNumber");
let Message = document.getElementById("Message");
let footer_btn = document.getElementById("footer_btn");

function myFunction() {
console.log("salom")
    if (PhonNumber.value == "") {
        PhonNumber.style.border = "5px solid red"
    }
    if(PhonNumber.value !== ""){
        PhonNumber.style.border = "none"
    }if(Message.value==""){
        Message.style.border = "5px solid red"
    }if(Message.value!==""){
        Message.style.border = "none"
    }

}
