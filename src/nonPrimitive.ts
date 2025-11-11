const groceries: string[]= ["apple", "potato", "onion", "oil"]

// groceries.push(5)

const components : (string | number)[]=  ['ram', 2, 'ssd', 1, 'fan', 4]

// ts type - tuple

let rgbColor : [number, number, number]= [255,0,256];
// rgbColor[1] = "string" | not assignable

const user:{
    // organization: "programming hero"
    //literal type

    readonly organization: string; //the property is readonly can not write 
    firstName: string;
    middleName?: string; // optional type
    lastName: string;
    isMarried: boolean
} = {
    firstName: 'saifuddin',
    middleName: 'ahmed',
    lastName: 'sifat',
    isMarried: true
}
