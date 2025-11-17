type vehicle = {
  car: string;
  bike: string;
  cng: string;
};

type myVehicle1 = "bike" | "car" | "cng";
type myVehicle2 = keyof vehicle;
// both are same...

const myVehicle: myVehicle2 = "car"; // can use both types

//.............

type User = {
  name: string;
  id: number;
  address: {
    city: string;
  };
};

const user = {
  name: "ali",
  id: 123,
  address: {
    city: "chattagram",
  },
};

// const myName  = user.name
// const myName  = user['name']

//function
const getPropertyFromObject = (obj: User, key: keyof User) => {
  return obj[key];
}; //this is how key of works.. 

const result = getPropertyFromObject(user, "address");

console.log(result);


// generic

const getPropertyFromObjectByGeneric = <X>(obj: X, key: keyof X) => {
  return obj[key];
};// now it receives any object or keys... 