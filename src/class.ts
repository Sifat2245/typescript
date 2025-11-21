// object oriented programming - class => object

class Animal {
    // name: string;
    // species: string;
    // sound: string

    constructor (public name: string, public species: string, public sound: string) {
        // this.name = name
        // this.species = species
        // this.sound = sound
    }

     makeSound(){
        console.log(`this ${this.name} is making sound: ${this.sound}`);
     }
}


const dog = new Animal("dogesh", "dog", "gheu gheu");

const cat = new Animal("cat bhai", "cat", "mew mew")

console.log(dog.name);

cat.makeSound()