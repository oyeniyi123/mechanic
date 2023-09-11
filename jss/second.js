 // slider
 var counter = 1;
 setInterval(function(){
     document.getElementById('radio' + counter).checked = true;
     counter++;
     if(counter > 4){
         counter = 1;
     }
 }, 5000);

 


   /* Scroll top */
let scrollTop = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
    scrollTop.classList.toggle("scroll-active", window.scrollY >= 400);
}) 




   /* Background change on scroll */
   let header = document.querySelector("header");

   window.addEventListener("scroll", () => {
       header.classList.toggle("header-active", window.scrollY > 0);
   }) 



//    contact
// function theButton(){
//     let myName = document.getElementById("nameOf").value;
//     let myEmail = document.getElementById("emailOf").value;
//     let myMss = document.getElementById("messageOf").value;


//     sendBtn.addEventListener('click', (e) => {
//         e.preventDefault();

//     if(myName == "" && myEmail == "" && myMss == "" ){
//         document.getElementById("underName").innerHTML = "Field cannot be empty";
//         document.getElementById("underEmail").innerHTML = "Field cannot be empty";
//         document.getElementById("messageOf").innerHTML = "Field cannot be empty";
//     }

//     else{
//         Swal.fire
//     }

// });
// }


// function success(){
//     swal({
//   title: "Email Sent successfully",
//   text: "We try to reply in 24 hours",
//   icon: "success",
 
// });
// }


// Swal.fire(
//     'Good job!',
//     'You clicked the button!',
//     'success'
//   )



      //Email
      function validate(){
        let name = document.querySelector('.name')
        let email = document.querySelector('.email')
        let msg = document.querySelector('.message')
        let sendBtn = document.querySelector('.send-btn')
        
        sendBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (name.value == "" || email.value == "" || msg.value == ""){
               alert("Fill up required fields")
            }
            
            else{
                sendmail(name.value, email.value, msg.value);
                success();
            }
        });
    }
    
    validate();
    
    
    
    function sendmail(name, email, msg){
        emailjs.send("service_d42omd8","template_jgrwizb",{
    
    to_name: email,
    
    from_name: name,
    
    message: msg,
    
    });
    }
    
    
    function success(){
        swal({
      title: "Email Sent successfully",
      text: "W'll get back to you within the hour",
      icon: "success",
     
    });
    }