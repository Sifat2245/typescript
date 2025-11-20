//map

const arrayOfNumber: number[] = [1,2,4]

const arrayOfString: string[] = ['1', '3', '4']

const arrayOfStringUsingMap: string[] = arrayOfNumber.map((num) => num.toString())

// const user = {
//     id: 123
// }

// user["id"]

type areaOfNumber = {
    height: 20,
    width: 10
}

type height = areaOfNumber["height"]


type Area<T> = {
   [ key in keyof T]: T[key]
}

const area1: Area<{height: number; width: string}> = {height: 50, width: '2'}