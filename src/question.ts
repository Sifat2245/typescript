//- ?: ternary operator
//- ??: nullish coalescing operator
//- ?. : optional  chaining


const userAge = (21)

const eligible = (age: number) =>{
    // if(age >= 21){
    //     console.log('eligible');
    // } 
    // else{
    //     console.log('not eligible');
    // }

    const result = age >= 21 ? 'eligible' : 'not eligible'
    console.log(result);
}

// ---------

const theme = undefined // or can be null not any ""(empty)

const seletedTheme = theme ?? 'light theme' // it works only if the theme returns undefine or null 




