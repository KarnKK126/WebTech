let myObj = {
    "firstname":"John",
    "lastname":"Doe",
    "age":30,
    "cars":[ "Ford", "BMW", "Fiat" ]
};
document.write( myObj.firstname + "<br>");
document.write( myObj.lastname + "<br>");
document.write( myObj.age + "<br>");
document.write(myObj.cars[0]+"<br><br>");

// loopแบบง่ายๆ
for (let i = 0; i < myObj.cars.length; i++){
    document.write(myObj.cars[i]+"<br>");
}

// loopแบบใหม่
let text = '';
document.write("<br><br>")
for (let car of myObj.cars){
    text += car + ","
}

document.getElementById("p1").innerHTML = text;
