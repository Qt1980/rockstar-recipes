console.log("Hello Seattle");

var promptQuestion = "What's the best comfort food? Tacos or Nachos?";
var response = prompt(promptQuestion);
console.log(response);
var reflected;

var alertMessage = "";
var color;"#FF0000"

if (response === "Nachos") {
    alertMessage = "Exactly! High Five!";
    color = "#0000ff";
}else if(response === "Tacos") {
    alertMessage = "Tacos are good but you can do better!"
    color = "#FF0000";
}else {
    reflected = "Not real food!"
    alert(reflected)
}
var container = document.getElementById("reflected")
container.innerText = alertMessage
container.style.color = color