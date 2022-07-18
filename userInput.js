console.log("\nTaking inputs from user");

var readline = require('readline-sync');
var name = readline.question("\nWhat is your name?");
var age = readline.question("What is your age?");
var email = readline.question("What is your email address?");
var message = readline.question("Give us a feedback message: ");

console.log("\nOutput after taking inputs from user");
console.log("Hi " + name + ", You have successfully signed in!");
console.log("You are "+ age+" years old is used for verification purpose");
console.log("You have logged in with the email address: "+email+"");
console.log("This is your message: "+message+"");
console.log("");
console.log("");
console.log("Your message will be sent. Are your sure?");
var choice = readline.question("Select YES(y) or NO(n): ");
if(choice=='y'){

    console.log("Your message is sent successfully");

} else if(choice=='n'){
    console.log("Your message is terminated");

}else {
    console.log("Oops, Please try again!");

}
