function changeTheme(){
    document.body.classList.toggle("dark")
}
let hour= new Date().getHours();
if(hour<12){
    document.getElementById("greeting").innerHTML="Good Morning";
}
else if(hour<18){
  document.getElementById("greeting").innerHTML="Good Afternoon";  
}
else{
  document.getElementById("greeting").innerHTML="Good Evening";  
}  
function validateForm(){
let name=document.getElementById("name").value;
let email=document.getElementById("email").value;
let message=document.getElementById("message").value;



}
