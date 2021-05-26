import {EGenders} from './genders.enum';

export class Deputy {
    name: string;
    age: number;
    gender: EGenders;
    degreeOfHonesty: number;
    minAmountBribe: number;


    constructor(name: string, age: number, gender: EGenders, degreeOfHonesty: number, minAmountBribe: number) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.degreeOfHonesty = degreeOfHonesty;
        this.minAmountBribe = minAmountBribe;
    }
}