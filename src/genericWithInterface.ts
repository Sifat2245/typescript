interface Developer <T>{
    name: string,
    salary: number,
    device:{
        brand: string,
        model: string,
        releaseDate: number
    }
    smartWatch: T; //dynamic value will come based on user preference
}


const developer1: Developer<{
    brand: string,
    useStopWatch: boolean,
}> = {
    name: 'x',
    salary: 200,
    device:{
        brand: 'asus',
        model: 'mk10',
        releaseDate: 2019
    },
    smartWatch:{
        brand: "oraimo",
        useStopWatch: true
    }
}