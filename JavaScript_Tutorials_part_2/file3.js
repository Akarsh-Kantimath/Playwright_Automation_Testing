const Car = require('./file1')

class Aeroplane extends Car {
    constructor(brand, origin_country){
        super(brand, origin_country);
    }
    get colour(){
        return 'silver'
    }
}

let aero = new Aeroplane ('Lockheed Martin', 'USA');
aero.details();
console.log(aero.colour);