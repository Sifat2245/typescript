type user = {
  id: number;
  name: {
    firstName: string;
    lastName: string;
  };
  contact: number;
  gender: "male" | "female";
  address: {
    city: string;
    area: string;
  };
};

const user1: user = {
  id: 321,
  name: {
    firstName: "md",
    lastName: "sifat",
  },
  contact: 546546549811,
  gender: "male",
  address: {
    area: "adamjee",
    city: "ngonj",
  },
};

const user2: user = {
  id: 321,
  name: {
    firstName: "md",
    lastName: "sifat",
  },
  contact: 546546549811,
  gender: "male",
  address: {
    area: "adamjee",
    city: "ngonj",
  },
};
