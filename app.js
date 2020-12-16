console.log('Hello Seattle')

var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow >18) {
    greeting = 'Bonsoir!';
}else if (hourNow > 12) {
    greeting = 'Bonnes apres-midi!';
}else if (hourNow > 0) {
    greeting = 'Bonjour!';
} 

document.write(greeting)

function realtalk(){
    var promptQuestion = "What's the best comfort food? Tacos or Nachos?";
    var response = prompt(promptQuestion);
    nachosortacos(response);
    return response;

}

function nachosortacos(response){
    var alertMessage = "";
    if (response === "Nachos"){
        alertMessage = "Exactly! High Five!";
    }     
    else if(response === "Tacos"){
        alertMessage = "Tacos are good but you can do better!";
    }       
    else {
        alertMessage = "Not real food!";
        color = "White";
    }
    
    var container = document.getElementById("reflected")
    container.innerText = alertMessage
    container.style.color = color
    alert(alertMessage);
}
realtalk();

function changebackgroundcolor(answer){

    if (answer === "Nachos"){
        color = "silver";
    }
    else if(answer === "Tacos"){
        color = "Yellow";
    }
    document.getElementById("content").style.backgroundColor = color;
}

var response; 
response = realtalk();
changebackgroundcolor(response);