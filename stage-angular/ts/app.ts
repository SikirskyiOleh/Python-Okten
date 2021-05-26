import {Animal} from './models/animal.interface';
import {Shape} from './models/Shape.abstract';

class Cat implements Animal {

    constructor(typeMove: string, speech: string) {
        this.typeMove = typeMove;
        this.speech = speech;
    }

    typeMove: string;
    speech?: string;

    ret(): string {
        return (
            this.typeMove = 'Run',
                this.speech = 'Meow')
    }
}

class Bird implements Animal {
    constructor(typeMove: string, speech: string) {
        this.typeMove = typeMove;
        this.speech = speech;
    }

    typeMove: string;
    speech?: string;

    ret(): string {
        return (
            this.typeMove = 'Fly',
                this.speech = 'Car')
    }
}

class Fish implements Animal {
    constructor(typeMove: string, speech: string) {
        this.typeMove = typeMove;
        this.speech = speech;
    }

    typeMove: string;
    speech?: string;

    ret(): string {
        return (
            this.typeMove = 'Swim'
        )
    }
}

//_____________________________________________________________________________

class Triangle extends Shape {
    constructor(private a: number, private b: number, private c: number) {
        super()
        this.a = a;
        this.b = b;
        this.c = c;
    }

    perimeter(): number {
        return (
            this.a + this.b + this.c
        )
    }

    area(): number {
        return (
            (this.a * this.c) / this.b
        )
    }


}

class Rectangle extends Shape {
    constructor(private a: number, private b: number) {
        super()
        this.a = a;
        this.b = b;
    }

    perimeter(): number {
        return (
            this.a * 4
        )
    }

    area(): number {
        return (
            this.a * this.a
        )
    }

}


let triangle = new Triangle(2, 4, 5);
let triangles = new Triangle(1, 6, 7);

let rectangle = new Rectangle(5, 3);
let rectangles = new Rectangle(2, 6);

let arr = [triangle, triangles, rectangle, rectangles];

arr.forEach((value: Shape) => {
    console.log(value.area())
});

