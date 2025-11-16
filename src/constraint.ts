type StudentInfo = {
    name: string,
    roll: number
} //? if the object is larger, can make a separate type to clean up the code


const getStudentInfo = <T extends StudentInfo>(studentInfo: T) => {
  return { class: "11th", group: "science", ...studentInfo }; //? now it will receive dynamic keys and values in object. 
};

const student1 = getStudentInfo({
    name: 'a',
    roll: 12,
    hasPen: true
})
const student2 = {
    name: 'a',
    roll: 12,
    hasPen: true
}

const result = getStudentInfo(student2)
console.log(result);