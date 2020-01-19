var time = 0 ;
console.log("Hello");

// Executes the fucntion after 3 seconds
setTimeout(function(){
    console.log("3 Sec Later..");
},3000);

var timer = setInterval(function(){ //this function runs for infinity. Make sure to stop it programatically.
    time+=2;
    console.log(time + " Seconds have passed");
    if(time > 5){
        clearInterval(timer); //clears the time
    }
},2000);

console.log(__dirname); //returns the directory in which the file is present;
console.log(__filename); //returns the file name with the full path;
