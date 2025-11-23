// oop: instance of type guard / type narrowing

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  
  getSleep(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} ghonta ghumay`);
  }
}

class Student extends Person {
  constructor(name: string) {
    super(name);
  }

  doStudy(numOfHours: number) {
    console.log(`${this.name} daily ${numOfHours} ghonta ghumay`);
  }
}

class Teacher extends Person {
  constructor(name: string) {
    super(name);
  }

  takeClass(numOfClass: number) {
    console.log(`${this.name} daily ${numOfClass} ghonta class ney`);
  }
}

const isStudent = (user: Person) =>{
    return user instanceof Student;
}

const isTeacher = (user: Person) =>  {
    return user instanceof Teacher;

}

//guard who checking the person. if the person is student or teacher.
const getUserInfo  = (user: Person) => {
    // if(user instanceof Student) {
    //     user.doStudy(10)
    // }else if(user instanceof Teacher){
    //     user.takeClass(4)
    // }
    // else{
    //     user.getSleep(10)
    // }

    if(isStudent(user)){
        user.doStudy(10)
    }
    else if(isTeacher(user)){
        user.takeClass(4)
    }
    else{
        user.getSleep(10)
    }
}

const student1= new Student("batman")
const teacher1 = new Teacher("jamal bhai")
getUserInfo(student1)