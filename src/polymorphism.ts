// =========================
// Polymorphism Example 1
// =========================

// Base class (Parent)
class Person {
  // A general method that all persons have
  getSleep() {
    console.log(`I am a normal happy person. I sleep for 9 hours`);
  }
}

// Child class overriding (polymorphic behavior)
class Student extends Person {
  // Overriding the parent method with a new implementation
  getSleep() {
    console.log(`I am a student. I sleep for 7 hours`);
  }
}

// Another child class overriding the same method differently
class NextDeveloper extends Person {
  getSleep() {
    console.log(`I am a developer. I sleep for 5 hours`);
  }
}

// A function that accepts any object derived from Person
// Because of polymorphism, the correct overridden method will execute
const getSleepingHours = (params: Person) => {
  params.getSleep();
};

// Creating instances of each class
const person1 = new Person();
const person2 = new Student();
const person3 = new NextDeveloper();

// Calling the polymorphic function
// This will run Person's version
getSleepingHours(person1);
// getSleepingHours(person2); // Would run Student's version
// getSleepingHours(person3); // Would run Developer's version



// =========================
// Polymorphism Example 2 (Shapes)
// =========================

// Base class with a generic getArea method
class Shape {
  // Default area method (to be overridden)
  getArea() {
    return 0;
  }
}

// Circle class extending Shape
class Circle extends Shape {
  radius: number;

  constructor(radius: number) {
    super(); // Calling parent constructor
    this.radius = radius;
  }

  // Overriding getArea for Circle
  getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

// Rectangle class extending Shape
class Rectangle extends Shape {
  height: number;
  width: number;

  constructor(height: number, width: number) {
    super();
    this.height = height;
    this.width = width;
  }

  // Overriding getArea for Rectangle
  getArea(): number {
    return this.height * this.width;
  }
}

const getArea = (param: Shape) => {
    console.log(param.getArea());
}

const shape1 = new Shape()
const shape2 = new Circle(50)
const shape3 = new Rectangle(21, 66)


getArea(shape2) // calling to see the result