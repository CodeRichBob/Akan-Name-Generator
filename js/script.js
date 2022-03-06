const boyNames = ["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"];
const girlNames = ["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"];
function findName (){
    //declaring variables and assigning them value from the user's input
    var yearOfBirth = document.getElementById("year").value;
    var monthOfBirth = document.getElementById("month").value;
    var dateOfBirth = document.getElementById("day").value; 
    //parsing user input to integers
    var yy = parseInt(yearOfBirth);
    var mm = parseInt(monthOfBirth);
    var dd = parseInt(dateOfBirth);
    var cc = math.tranc(yy/100);

    //calculating day of the week
    var dayOfTheWeek = 
}