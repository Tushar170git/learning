// Write a program in JavaScript that checks whether a given password is strong or not.
// Conditions:
// The password must:
// Have at least 8 characters
// Contain at least one uppercase letter
// Contain at least one lowercase letter
// Contain at least one digit (0–9)
// Contain at least one special character (such as @, #, $, %, &)
// Output:
// If all conditions are satisfied → print "Strong Password"
// Otherwise → print which conditions are not satisfied
// solution :- 👇
// let password = "Aarsh456@";   // change and check 
let password = prompt("enter password");
// console.log(password.length);
let hasUpper = false;
let hasLower = false;
let hasNumber = false;
let hasSpecial = false;

let specialChars = "@#$%&";

for(let i = 0; i < password.length; i++){  // password length is not sring index length it start with 1 only

    let ch = password[i];
// console.log(ch);
    if(ch >= 'A' && ch <= 'Z'){
        hasUpper = true;
    }
    else if(ch >= 'a' && ch <= 'z'){
        hasLower = true;
    }
    else if(ch >= '0' && ch <= '9'){
        hasNumber = true;
    }
    else if(specialChars.includes(ch)){
        hasSpecial = true;
    }
}

// Final check
if(password.length >= 8 && hasUpper && hasLower && hasNumber && hasSpecial){
    console.log("Strong Password");
    // document.writeln("strong password");
    document.getElementById("result").innerText = "Strong Password";
}
else{

    console.log ("not a strong password");
     document.getElementById("result").innerText= "NOT a strong password"; // it will not print because it will overwrite by next innertext actually innertext do overwrite 
    if(password.length < 8){
        console.log("Password too short");
        document.getElementById("result").innerText = "Password too short ";
    }

    if(!hasUpper){    // !  is the logical NOT operator true became false and false became true 
        console.log("Missing uppercase letter");
        // document.writeln("Missing upper case"); 
        document.getElementById("result").innerText="missing upper case";
//         document.write() / writeln()
//          page load ke baad use karoge
// → pura HTML page overwrite (clear) ho jata hai
// → isliye output properly show nahi hota
// document.write() = page ko replace kar deta hai 
// innerText = page me content add/update karta hai 
    }

    if(!hasLower){
        console.log("Missing lowercase letter");
              document.getElementById("result").innerText="Missing lowercase letter";
    }

    if(!hasNumber){
        console.log("Missing number");
                document.getElementById("result").innerText="Missing number";
    }

    if(!hasSpecial){
        document.getElementById("result").innerText="Missing special character";

    }
}

