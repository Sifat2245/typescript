type User = {
  name: string;
  id: number;
};

type Role = {
  role: "admin" | "user";
};

interface IUser {
  name: string;
  id: number;
}

type UserWithRole = User & Role; // intersection

interface IUserWithRole extends IUser {
  role: "admin" | "user";
} //? created interface.. similar to the type. but interface can only be used in object like datatype. like array, object, function

const user: User = {
  name: "x man",
  id: 231,
};

const user2: IUserWithRole = {
  name: "y",
  id: 658,
  role: "admin",
};
