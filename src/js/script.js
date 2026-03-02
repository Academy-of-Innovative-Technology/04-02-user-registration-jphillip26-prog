document.querySelector(".btn-primary").addEventListener("click",function (event))

 var firstName = document.querySelector(".first").value;
  var last = document.querySelector(".last").value;
   var useremail = document.querySelector(".email").value;
   var acc = document.querySelector(".form-check-input:checked");
   var user = {
    firstName: first,
    lastName: last, 
    useremail: email,
    accType: acc
   };
   console.log(user);

   var u = localStorage.setItem("user", JSON.parse(user));
