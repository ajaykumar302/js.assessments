// question-1.Create 2 objects - parent and child.
// Attach methods to parent and use those methods in child object using parents prototype.

const Parent = {
    calcuateAge(){
        console.log(`My name is ${this.fname} ${this.lName} and current age is ${2022 - this.bYear}`);
    
    }
}
const objectOne = Object.create(Parent);
objectOne.fname = 'yeminani';
objectOne.lName = 'Prakesh';
objectOne.bYear = 1998;
objectOne.calcuateAge();

const objectTwo = Object.create(Parent);
objectTwo.fname = 'GTV';
objectTwo.lName = 'Sairam';
objectTwo.bYear = 1988;
objectTwo.calcuateAge();




//Question2
//Write code to explain prototype chaining.

const firstProto = {
    calcuateAge(){
        console.log(`This is the most popular ${this.Name} wine it having ${this.Color} colour it is ${2022 -this.Year} years old wine. `);
    },
    initialise(Name,Color,Year){
        this.Name = Name;
        this.Color = Color;
        this.Year = Year;

    }
};
const Ravi = Object.create(firstProto);
console.log(Ravi);
Ravi.initialise("Red","Purpule",1998);
Ravi.calcuateAge();

const secondProto = Object.create(firstProto);
secondProto.initial = function (Name,Color,Year,Mplace){
    firstProto.initialise.call(secondProto,Name,Color,Year)
    this.Mplace = Mplace;
}
secondProto.introduce = function(){
    console.log(`This is the most popular ${this.Name} wine.
     it having ${this.Color} colour.
     it is ${2022 -this.Year} years old wine.
     Manufacture in ${this.Mplace} `);
    

}

const sejhal = Object.create(secondProto);
sejhal.initial("Malbec","yellow",1994,"France");
sejhal.introduce();


//Question3
//Add a method to calculate sum of all elements in Array in array's protype, use that method to calculate sum for multiple arrays.

function arraySum(a){
    let sum=0;
    for(let i in a) { 
        sum += a[i];
    }
    return sum;
}
let array = [1,2,3,4]; 
let Sum= arraySum(array);

//Question4
//Write a JavaScript function to retrieve all the names of object's own and inherited properties.

function student(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}
  
student.prototype.nationality = "English";
const mySon = new student("kava", "ajay", 20, "blue");
console.log(mySon);
console.log("The nationality of my son is " + mySon.nationality);


