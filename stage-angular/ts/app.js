"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Shape_abstract_1 = require("./models/Shape.abstract");
var Cat = /** @class */ (function () {
    function Cat(typeMove, speech) {
        this.typeMove = typeMove;
        this.speech = speech;
    }
    Cat.prototype.ret = function () {
        return (this.typeMove = 'Run',
            this.speech = 'Meow');
    };
    return Cat;
}());
var Bird = /** @class */ (function () {
    function Bird(typeMove, speech) {
        this.typeMove = typeMove;
        this.speech = speech;
    }
    Bird.prototype.ret = function () {
        return (this.typeMove = 'Fly',
            this.speech = 'Car');
    };
    return Bird;
}());
var Fish = /** @class */ (function () {
    function Fish(typeMove, speech) {
        this.typeMove = typeMove;
        this.speech = speech;
    }
    Fish.prototype.ret = function () {
        return (this.typeMove = 'Swim');
    };
    return Fish;
}());
//_____________________________________________________________________________
var Triangle = /** @class */ (function (_super) {
    __extends(Triangle, _super);
    function Triangle(a, b, c) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        _this.a = a;
        _this.b = b;
        _this.c = c;
        return _this;
    }
    Triangle.prototype.perimeter = function () {
        return (this.a + this.b + this.c);
    };
    Triangle.prototype.area = function () {
        return ((this.a * this.c) / this.b);
    };
    return Triangle;
}(Shape_abstract_1.Shape));
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(a, b) {
        var _this = _super.call(this) || this;
        _this.a = a;
        _this.b = b;
        _this.a = a;
        _this.b = b;
        return _this;
    }
    Rectangle.prototype.perimeter = function () {
        return (this.a * 4);
    };
    Rectangle.prototype.area = function () {
        return (this.a * this.a);
    };
    return Rectangle;
}(Shape_abstract_1.Shape));
var triangle = new Triangle(2, 4, 5);
var triangles = new Triangle(1, 6, 7);
var rectangle = new Rectangle(5, 3);
var rectangles = new Rectangle(2, 6);
var arr = [triangle, triangles, rectangle, rectangles];
arr.forEach(function (value) {
    console.log(value.area());
});
