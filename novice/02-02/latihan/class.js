/**
 * Basic class syntax
 * class MyClass {
  prop = value; // property

  constructor(...) { // constructor
    // ...
  }

  method(...) {} // method

  get something(...) {} // getter method
  set something(...) {} // setter method

  [Symbol.iterator]() {} // method with computed name (symbol here)
  // ...
    }
 */

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
}