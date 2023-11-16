class Person {
    constructor(name, gender) {
        this.name = name;
        this.gender = gender;
    };
};


class Apartment {
    residentsArr = [];

    addNewResident(resident) {
        this.residentsArr.push(resident)

        return this;
    }

};

class House {
    apartmentsArr = [];
    maxQuantityOfApart;
    constructor(maxQuantityOfApart) {
        this.maxQuantityOfApart = maxQuantityOfApart;
    };
    addApartment(apartment) {
        if (this.apartmentsArr.length < this.maxQuantityOfApart) {
            this.apartmentsArr.push(apartment)
        }
        else {
            console.log('Кількість квартир більша максимальної');
        }
    }
}

const person = new Person('Pavel', 'man');
const person2 = new Person('Anna', 'woman');
const apartment = new Apartment();
apartment.addNewResident(person)
    .addNewResident(person2);

const person3 = new Person('Viktor', 'man');
const apartment2 = new Apartment();
apartment2.addNewResident(person3);

const house = new House(100);
house.addApartment(apartment);
house.addApartment(apartment2);

console.log(person);
console.log(person2);
console.log(person3);
console.log(apartment);
console.log(apartment2);
console.log(house);