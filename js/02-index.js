// Задание 2
// Перепиши функцию toggleUserState() так, чтобы она не использовала callback-функцию callback, 
// а принимала всего два параметра allUsers и userName и возвращала промис.

const users = [
  { name: 'Mango', active: true },
  { name: 'Poly', active: false },
  { name: 'Ajax', active: true },
  { name: 'Lux', active: false },
];

// const toggleUserState = (allUsers, userName, callback) => {
//   const updatedUsers = allUsers.map(user =>
//     user.name === userName ? { ...user, active: !user.active } : user,
//   );

//   callback(updatedUsers);
// };



/*
 * Сейчас работает так
 */
// toggleUserState(users, 'Mango', logger);
// toggleUserState(users, 'Lux', logger);


const toggleUserState = (allUsers, userName) => {
    const returnToggleUserActive =  allUsers.map(user => user);

    return new Promise((resolve, reject) =>{
        const toggleActive =  allUsers.map(user =>
            user.name === userName ? { ...user, active: !user.active } : user);
        resolve (toggleActive);        
        reject('error')
    })

};

const logger = updatedUsers => console.table(updatedUsers);
/*
 * Должно работать так
 */
toggleUserState(users, 'Mango').then(logger);
toggleUserState(users, 'Lux').then(logger);










// const returnUserName =  users.map(user => user.name);
// // console.log(returnUserName)



// const toggleUserState = (allUsers, userName) => {
//     const returnToggleUserActive =  allUsers.map(user => user);

//     return new Promise((resolve, reject) =>{

//         if(returnUserName.includes(userName)){
//             resolve(allUsers.map(user =>  { return {...user, active: !user.active }}))
//         }
        
//         reject('error')
//     })

// };