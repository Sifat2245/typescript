let anything: any;

anything = 25;

const kgToGm = (value: string | number): string | number | undefined => {
  if (typeof value === "number") {
    return value * 1000;
  } else if (typeof value === "string") {
    const [amount] = value.split(" ");
    return `converted gm is ${Number(amount) * 1000}`;
  }
};

const result1 = kgToGm(2) as number;
const result2 = kgToGm("2 kg") as string;



