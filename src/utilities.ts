type Product = {
    id: number;
    name: string;
    price: number;
    stock: number;
    color?: string
}

type productSummery  = Pick<Product, 'id' | "name" | "price">
type filtered  = Omit<Product, 'stock' | "color">

type productWithColor = Required <Product>

const product: productWithColor = {
    id: 23,
    name: "asd",
    price: 123,
    stock: 12,
    color: 'black'
}

type partialProduct = Partial<Product>

// type partialProduct = {
//     id?: number;
//     name?: string;
//     price?: number;
//     stock?: number;
//     color?: string;
// }  //* it makes all the key optional. can used 1 or more

//readonly

type ReadOnlyProduct = Readonly<Product>

// type ReadOnlyProduct = {
//     readonly id: number;
//     readonly name: string;
//     readonly price: number;
//     readonly stock: number;
//     readonly color?: string;
// }

// record utility

const emptyObject: Record<string, unknown> = {} 
// the keys of the object will be string thats why used string in left side, the value can be anything. it can be string, number or boolean. so used unknown
