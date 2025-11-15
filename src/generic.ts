//generic type

type GenericArray<value> = Array<value>;

// const friends: string[]= ['x', 'w', 'z']
const friends: GenericArray<string> = ["x", "y", "z"];

// const numbers: number[] = [1,5,9,7,4]
const numbers: GenericArray<number> = [1, 5, 9, 7, 4];

const isAdmin: GenericArray<boolean> = [true, false];

const user: GenericArray<{name: string, age: number, number: number}> = [
  {
    name: "luis",
    age: 54,
    number: 5546546,
  },
  {
    name: 'y',
    age: 12,
    number: 654
  }
];
