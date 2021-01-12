var fs=require('fs');
// Removes elements from offset of 0
process.argv.splice(0, 2);

// Print the text as usually!
console.log(process.argv.join(' '));
fs.writeFileSync('./assignment/write.txt',process.argv.join(' '),(err,data)=>{
    if(err)
    console.log(err)
})