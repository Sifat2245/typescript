//type guard

type Alphaneumeric = number | string;

const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
  if (typeof num1 === "number" && typeof num2 === "number") {
    return num1 + num2;
  } else {
    return num1.toString() + num2.toString();
  }
};

add(2, "2");
add("2", 6);


type NormalUser = {
  name: string;
};

type AdminUser = {
  name: string;
  role: string;
};

const User1 = (user: NormalUser | AdminUser) => {
  if ("role" in user) {
    console.log(`user name is ${user.name} and his role is ${user.role}`);
  } else {
    console.log(`user name is ${user.name}`);
  }
};
