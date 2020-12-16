



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

// This function will prompt the user with a question
function realtalk(){
    // Declare a variable to hold the prompt box question
    var promptQuestion = "What's the best comfort food? Tacos or Nachos?";
    
    // Prompt box is called
    var response = prompt(promptQuestion);

    // Calling another function within a function
    nachosortacos(response);

    return response;
}


function nachosortacos(response){
    // Declare alertMessage variable
    var alertMessage = "";

    if (response === "Nachos"){
        alertMessage = "Exactly! High Five!"; //if "Nachos"
    }    
    else if(response === "Tacos"){
        alertMessage = "Tacos are good but you can do better!"; //if "Tacos"
    }       
    else {
        alertMessage = "Not real food!"; //catch-all for everything else
        color = "White";
    }
    
    // Declare new variable, assign the value returned from
    // getElementById("reflected")
    var container = document.getElementById("reflected");

    // Populate the container's innerText with the value
    // of alertMessage
    container.innerText = alertMessage;


    container.style.color = color;
    alert(alertMessage);
}

function changebackgroundcolor(answer) {
    var color;

    if (answer === "Nachos"){
        color = "silver";
    }
    else if(answer === "Tacos"){
        color = "Yellow";
    }

    // dot-chaining
    document.getElementById("content").style.backgroundColor = color;

    // var element = document.getElementById("content");
    // var elementStyle = element.style;
    // var elementBckGrdColor = elementStyle.backgroundColor;
    // elementBckGrdColor = color;
}

var response;
response = realtalk();
changebackgroundcolor(response);