console.log("Hello Seattle");

function realtalk(){
    var promptQuestion = "What's the best comfort food? Tacos or Nachos?";
    var response = prompt(promptQuestion);
    nachosortacos(response);
}

function nachosortacos(response){
    var alertMessage = "";
    var color = "";
    if (response === "Nachos"){
        alertMessage = "Exactly! High Five!";
        color = "#0000ff";
    }     
    else if(response === "Tacos"){
        alertMessage = "Tacos are good but you can do better!";
        color = "#FF0000";
    }       
    else {
        alertMessage = "Not real food!";
    }
    
    var container = document.getElementById("reflected")
    container.innerText = alertMessage
    container.style.color = color
    alert(alertMessage);
}
realtalk();

