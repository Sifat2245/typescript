// union type

type UserRole = "admin" | "user";

const getDashboard = (role: UserRole) => {
  if (role === "admin") {
    return "adminDashboard";
  } else if (role === "user") {
    return "user dashboard";
  } else {
    return "guest dashboard";
  }
};

// getDashboard('guest') | not assignable because it is a union type

//intersection type

type Employee = {
  name: string;
  id: number;
  gender: string;
};

type Manager = {
    teamSize: number,
    designation: string
};

type EmployeManager = Employee & Manager


const mdTarek: EmployeManager ={
    name: 'tarek',
    designation: 'manager'
}  //showing error because need to take all the key that are include in both type

