const arrayWithString = (value: string) => [value]; // creating an array with string value using a function

const arrayWithNumber = (value: number) => [value];

const arrayWithObject = (value: { id: string; name: string }) => {
  return [value]; //? object must return value
};

const createArrayWithGeneric = <T>(value: T) => {
  return [value];
};

const numberArr = createArrayWithGeneric(321);
const stringArr = createArrayWithGeneric("assdff");
const objectArr = createArrayWithGeneric({
  id: 123,
  name: "x man",
});

//tuple

const createArrWithTuple = (param1: string, param2: number) => {
  return [param1, param2];
};

const createArrWithGenericTuple = <X, Y>(param1: X, param2: Y) => {
  return [param1, param2]; //? this is how generic type works. we can pass the type dynamically for any data
};

const string = createArrWithGenericTuple("asd", {
  name: "y",
});

// dynamic value

const getStudentInfo = <T>(studentInfo: T) => {
  return { class: "11th", group: "science", ...studentInfo }; //? now it will receive dynamic keys and values in object. 
};

