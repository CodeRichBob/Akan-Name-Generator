var boyNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
var girlNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
var dayOfBirth = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
function findName (){
    //declaring variables and assigning them value from the user's input
    var yearOfBirth = document.getElementById("year").value;
    var monthOfBirth = document.getElementById("month").value;
    var dateOfBirth = document.getElementById("day").value; 
    var gender = document.getElementByName("gender").value;
    //parsing user input to integers
    var yearr = parseInt(yearOfBirth);
    var yy = parseInt(yearOfBirth.substr(2));
    var mm = parseInt(monthOfBirth);
    var dd = parseInt(dateOfBirth);
    var cc = parseInt(yearOfBirth.substr(0,2));

    //calculating day of the week
    var dayOfTheWeek = parseInt(((cc/4) - 2*cc-1) + ((5*yy/4)) + ((26*(mm+1)/10))+dd)%7;
    // adding some validation
    if(yearr<1000 || yearr > 2022){
        alert("Please enter a valid Year of Birth");
    }else if (mm<=0 || mm > 12 || mm == 2 && dd > 29){
        alert("Please Enter a valid Month of birth");
    }else if (dd <= 0 || dd > 31){
        alert("Please enter a valid Date of Birth");
    }
    //checking name based on day of birth
    if (gender === "male"){
        alert(`Your Akan name is ${boyNames[dayOfTheWeek]} because you were born on ${dayOfBirth[dayOfTheWeek]}.`);
    } 
    else if (gender === "female"){
        alert (`Your Akan name is ${girlNames[dayOfTheWeek]}`);
    }
}