module.exports = class Car{
    type = 'suv'
    get colour(){
        return 'white'
    }
    constructor(brand,origin_country){
        this.brand = brand;
        this.origin_country = origin_country;
    }
    details(){
        console.log(this.brand+' '+this.origin_country);
    }

}