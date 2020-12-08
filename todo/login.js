let mail = document.getElementById("email");
let pwd = document.getElementById("pass");
let lgin = document.getElementById("submit");
//let msg =document.getElementById("msg");


function ValidateEmailPhone(){
    var regexp = /^admin$/; // email
   
    if (regexp.test(mail.value) )
     {
         return (true);      
     }
     else{

     document.getElementById("msg").innerHTML="You have entered an invalid Email/PhoneNo ";
    return (false);
     }
        
}


function ValidatePassword()
{
    var rgxp=/^12345$/;
    if(rgxp.test(pwd.value) )
    {
       
        return true;
       
        
    }

    else{
        document.getElementById("msg1").innerHTML="You have entered an invalid password ";
        return (false);
        
    }
    
}







// let mail = document.getElementById("email");
// let pwd = document.getElementById("pass");
// let lgin = document.getElementById("submit");
// //let msg =document.getElementById("msg");


// function validateUsername(){
//     var regexp = /^admin$/; // admin
//     if (regexp.test(mail.value) )
//      {
//          return (true);  
//          ValidatePassword();    
//      }
//      else{

//      document.getElementById("msg").innerHTML="You have entered an invalid Username ";
//     return (false);
//      }
    
        
// }


// function validatePassword()
// {
//     var rgxp=/^12345$/;
//     if(rgxp.test(pwd.value) )
//     {
//         return true;
//     }

//     else{
//         document.getElementById("msg1").innerHTML="You have entered an invalid password ";
//         return (false);
        
//     }
    
// }

// function validate(){
//     return validateUsername();
//   }
  
  

