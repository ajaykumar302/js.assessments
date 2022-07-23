//Write the code to access element which is having id as "text"

const element = document.getElementById("text");
console.log(element);

//Write the code to access element which is having tag as "h1"
const one = document.getElementsByTagName("h2");
console.log(one);

//Write the code to access element which is having class as "box"
const two = document.getElementsByClassName("box")[0];
console.log(two);


//Change the heading from ""Hello"" to ""Hello World"" using DOM functions"		
 document.getElementsByTagName("h1")[1].innerText = "Hello World";
	
//Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create 
//button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be 
//changed to vertical direction.
function changeText() {
   document.getElementById("container").style.flexDirection ="column";
}

// What’s the difference between window vs document?

//window
// syntx    window.propertName
// It  is a global/root object in JavaScript and it is the root object of the Document object model(DOM);
// The window is at a root/top level at the JavaScript object hierarchy.
// It represents the browser window in which you are seeing the content.
// It is loaded before the document because window container document.
// It is an object of the browser.

//document
// syntx   window.document.propertyName  OR document.propertyname
// A document is an object inside the window object and we use a document object for manipulation inside the document.
// It represents the document loaded inside the window or browser.
// The properties related to it are stored in the document object.
// It is loaded after the loading window because the window contains a document.
// It is an object of window.

// Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"

let head = document.createElement("h1");
head.innerText = "Hello";
document.querySelector("body").appendChild(head);
head.setAttribute("id", "heading");
document.getElementById("heading").style.color = "red";


// Create an HTML page having content as Hello world and a button named Replace Text.
// When user will click on this button page content should be changed to "Welcome to Elevation academy"


function textChng() {
  document.getElementById("textchng").innerHTML ="Welcome to Elevation academy";
}


// Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second

function displayTime (){
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById("session");

    if(hrs >= 12){
        session.innerHTML = 'PM';
    }
    else{
        session.innerHTML = 'AM'; 
    }
    
    if(hrs > 12){
        hrs = hrs - 12;
    }
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("minutes").innerHTML = min;
    document.getElementById("seconds").innerHTML = sec;
}
setInterval(displayTime, 10);


//Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

// let option1 = document.createElement("option");
// option1.setAttribute("value", "20-21");
// option1.innerText = "20-21";
// document.querySelector("#year").appendChild("option1");

document.getElementById("btn").addEventListener("click", showYear);
function showYear() {
  let selected = document.querySelector("#year").value;
  document.querySelector(
    ".yearselected"
  ).innerText = `Year Session :  ${selected}`;
}

