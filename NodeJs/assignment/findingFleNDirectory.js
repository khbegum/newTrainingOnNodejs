var path=require('path');
var fs=require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname);
console.log(directoryPath)
//passsing directoryPath and callback function
fs.readdir('./', function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        if(fs.lstatSync(file).isFile()){
            console.log('File :'+file);
        }
        else
        console.log('Directory : '+file) 
        
    });
});