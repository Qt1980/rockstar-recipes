console.log("Hello Seattle");

function realtalk(){
    var promptQuestion = "What's the best comfort food? Tacos or Nachos?";
    var response = prompt(promptQuestion);
    nachosortacos(response);
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
    var color = "";
    if (answer === "Nachos"){
        color = "silver";
    }
    else if(answer === "Tacos"){
        color = "Yellow";
    }
}