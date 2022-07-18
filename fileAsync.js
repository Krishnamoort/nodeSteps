const file1=require("fs");
file1.writeFile("txt1.txt","Hi..how are you?..written asynchronously",(err)=>
{
    if(err)
    console.log(err);
})
file1.readFile("txt1.txt","utf8",(err,data)=>
   {
    if(err)
      {
        console.log(err);
        return;
      }

    console.log(data);
   })

console.log("can u read me first please!")