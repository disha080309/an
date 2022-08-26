function select_NGO(){
    ngo=document.getElementById("ngo").value;
    console.log(ngo);
}
function submit_form(){
    address=document.getElementById("add").value;
    name=document.getElementById("name").value;
    food_detail=document.getElementById("fd").value;

    if((ngo!="" && address!="")&&(name!="" && food_detail!="")){
        sendEmail();
    }
    else{
       window.alert("Pls Fill Up All The Values");
    }
}
function sendEmail() {
    Email.send({
      Host: "smtp.gmail.com",
      Username: "annadaansavefood@gmail.com",
      Password: "@annadaan08",
      To: 'poojabhay82@gmail.com',
      From: "annadaansavefood@gmail.com",
      Subject: "Sending Email using javascript",
      Body: "Well that was easy!!",
    }).then( message => alert("mail sent successfully") );
  }