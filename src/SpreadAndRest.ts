// spread operator
 
const friends = ['rakib', 'sakib', 'sujan'];
const newFriend = ['jisan', 'suvo']

friends.push(...newFriend) // spreading the newFriend and push

//object

const userInfo = {
    name: 'luci',
    age: 20,
    height: 5
}

const useOtherInfo ={
    income: 12000,
    married: false
}

const user = {...userInfo, ...useOtherInfo}
// console.log(user);

// rest operator
const inviteFriend = (...friends: string[]) =>{
    //? getting rest of the friends and showing in console
      friends.forEach((friend: string) =>{
        console.log(`you are invited to the event ${friend}`);
      })
}

inviteFriend('jamil','kamil','raj', 'suvo')