type A = null;
type B = undefined;

type C = A extends number ? true: B extends null ? true: false;

type Vehicle = {
    car: string;
    bike: string;
    ship: string
}

type checkVehicle<T> = T extends keyof Vehicle ? true : false

type  hasVehicle = checkVehicle<"bike">