class Person {
name: string;
  age: number;
  address: string;

  constructor(name: string, age: number, address: string) {
    this.name = name;
    this.address = address;
    this.age = age;
  }

  getSleep(numberOfHour: number) {
    console.log(`${this.name} ${numberOfHour} ghonta ghumay`);
  }
}

class Student extends Person{
  
}


class teacher extends Person {
  designation: string

  constructor(name: string, age: number, address: string, designation: string) {
    super(name, age, address)

    this.designation = designation
  }


  takeClass(numberOfHour: number) {
    console.log(`${this.name} ${numberOfHour} ghonta class koray`);
  }
}

const student1 = new Student("saif", 21, "adamjee")
student1.getSleep(10)

const teacher1 = new teacher("jhankar sir", 41, "janina", "master web developer")
teacher1.takeClass(10)