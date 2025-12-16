class BigPerson {
    age = 25
    //location = 'Canada'
    get location(){
        return 'Canada';
    }
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    fullName(){
        console.log(this.firstName + this.lastName);
    }



}
let person = new BigPerson('Jim', 'Corbet');
console.log(person.age);
console.log(person.location);
console.log(person.fullName());

let Man = new BigPerson('Elephant', 'Wild');
console.log(Man.age);
console.log(Man.location);
console.log(Man.fullName());
