//static

class Counter {
   static count: number = 0; // used static to hold the data in a single memory. to set the datas in a single memory   
    
   static increment() {
        return (Counter.count = Counter.count + 1)
    }

    decrement () {
        return (Counter.count = Counter.count - 1)
    }
}

const instance1 =  new Counter() //holding the increment data in one memory
// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());
// console.log(instance1.increment());

const instance2 = new Counter() // holding the increment data in a different memory
// console.log(instance2.increment());
// console.log(instance2.increment());
// console.log(instance2.increment());

console.log(Counter.increment()); 