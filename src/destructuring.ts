// destructuring concept for typescript

const user = {
    name: {
        firstName: 'md',
        middleName: 'saifuddin',
        lastName: 'ahmed'
    },
    gender: 'male',
    favColor: 'blue'
}

// console.log(user.gender);
// console.log(user.name.middleName);

const {gender, name: {firstName}} = user;
console.log(firstName);

// array destructuring

const friends = ['x', 'y', 'z']

// const olderOne = friends[1]
const [olderOne , , newOne]  = friends
console.log(olderOne, newOne);