


function randomString() {
    //define a variable consisting alphabets in small and capital letter
var characters = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    
    //specify the length for the new string
let lenString = document.getElementById("strlength").value;
var randomstring = '';

    //loop to select a new character in each iteration
for (var i=0; i<lenString; i++) {
var rnum = Math.floor(Math.random() * characters.length);
randomstring += characters.substring(rnum, rnum+1);
}

     //display the generated string 
document.getElementById("randomfield").innerHTML = randomstring;
}

function rand() {
    document.getElementById("result").value = generateRandStr();
}

function generateRandStr() {
    var candidates = "ABCDEFGHIJKLMNOPQRSTUVWXY123456789$%$-_&*abcdefghijklmnopqrstuvwxyz";
    let length = document.getElementById("strlength").value;
    var result = "", rand;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < length; j++) {
            rand = Math.floor(Math.random() * candidates.length);
            result += candidates.charAt(rand);
        }
        if (i != 3) {
            result += "-";
        }
    }
    return result;
}


function myFunction() {
  // Get the text field
  const copyText = document.getElementById("result");

  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
  
  // Alert the copied text
  alert("Copied the text: " + copyText.value);
}

function copy(){
    // Get the text field
    const copyText = document.getElementById("randomfield");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
    // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.inn);
    
    // Alert the copied text
    alert("Copied the text: " + copyText.innerText);
  }
 

function send(){

const textbot = document.querySelector(".textfield").value;
const replyfield = document.querySelector(".reply");
   
prompt("Verify Username name");
 if(prompt.value != textbot){
    prompt("Invalid Username Entered Retry", alert("try again"))

       
 }
}