import { User } from "./models/User";

console.log('Hello World!!');

const user = new User( {name:'JAYARAJ', age:40});
console.log(user.get('name'));

user.set({name:'MANOJ'});
console.log(user.get('name'));
console.log(user.get('age'));
user.on('change',()=>{
    console.log('1st Change Event ');
});
user.on('change',()=>{
    console.log('2nd Change Event ');
});
user.on('xyz',()=>{
    console.log('xyz Event ');
});
console.log(user);
user.trigger('aaaaaaaaaaaaa');