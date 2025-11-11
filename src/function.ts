// normal function
function add(number1: number, number2: number) {
  return number1 + number2;
}

// arrow function
const addArrow = (num1: number, num2: number): number => {
  return num1 + num2;
};

addArrow(2, 2);

// object => function

const user = {
  name: "saif",
  balance: 0,
  addBalance(value: number): number {
    const newBalance = this.balance + value;
    return (this.balance = newBalance);
  },
};

user.addBalance(20000);

// console.log(user);

// array => function
const arr: number[] = [12, 2, 3, 34, 5, 7];

const sqrArr = arr?.map((element: number): number =>{
    return element * element
})