var file1=require("fs");
//create a new file if it does not exist, if it exist replace it
file1.writeFileSync("txt1.txt","Hi..how are you?...written synchronously ");
//append data in file
file1.appendFileSync("txt1.txt","adding more text");
//Rename the file
file1.renameSync("txt1.txt","txt2.txt");
//var v=file1.readFileSync("txt2.txt")
//this will display data in buffer/binary format
//console.log(v)
//to change it into string
//console.log(v.toString());
//to directly read data in string(without need to convert to toString()) use utf8 encoding
var v=file1.readFileSync("txt2.txt","utf8");
console.log(v);
console.log("can u read me first please!")
//delete the file
file1.unlinkSync("txt2.txt");