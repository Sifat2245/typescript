//polymorphism

class Person {
  getSleep() {
    console.log(`i am a normal happy person. i sleep for 9 hours`);
  }
}

class Student extends Person {
    getSleep() {
        console.log(`i am a student. i sleep for 7 hours`);
    }
}

class NextDeveloper extends Person {
    getSleep() {
        console.log(`i am a developer. i sleep for 5 hours`);
    }
}

const getSleepingours = (params: Person) =>{
    params.getSleep()
}

const person1= new Person
const person2= new Student
const person3= new NextDeveloper

getSleepingours(person1);