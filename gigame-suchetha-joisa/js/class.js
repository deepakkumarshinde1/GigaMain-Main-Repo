// inheritance
class Parent {
  constructor(_text) {
    this.text = _text;
  }
  printText() {
    console.log(this.text);
  }
}

// OOP
class MyClass extends Parent {
  constructor(text) {
    super(text);
  }
  printText() {
    super.printText();
    console.log("child");
  }
}

let data = "gigamain";
// object of a class
let myCLass = new MyClass(data);

myCLass.printText(); // gigamain

// new ==> create a object
// MyClass() ==> constructor
// function  ==> this ==> window
// js don't support overloading ==>

//access modifier , abstract class , interface
