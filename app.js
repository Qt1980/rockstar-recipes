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
    
document.getElementById("greeting-msg").innerText = greeting;

function realtalk(){
    var response = prompt("What's the best comfort food? Tacos or Nachos?");
    nachosortacos(response);
}

function nachosortacos(response){
    var alertMessage;

    if (response === "Nachos"){
        alertMessage = "Exactly! High Five!";
    }     
    else if(response === "Tacos"){
        alertMessage = "Tacos are good but you can do better!";
    }       
    else {
        alertMessage = "Not real food!";
    }
    alert(alertMessage);
}

function validateUserPassword() {
    var storedPassword = 'comein';
    do {
        var pswd = prompt("Enter a Password");
    }while(pswd !== storedPassword);
}

var userFavFood = realtalk();

function bottomlessfood(userFavFood) {
    
   document.write("<img src=\"" + userFavFood + ".jpg\">")
    
}


var infiniteNachos = prompt("How many Nachos do you want?");

for (var i = 0; i < infiniteNachos; i++) {
    console.log(i);
    bottomlessfood(userFavFood, "Awesome! Enjoy these Keto Nachos");
}

realtalk();
validateUserPassword();
