"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var RandomService = (function () {
    function RandomService() {
    }
    RandomService.prototype.getExchangeId = function () {
        var m = this.randomNumber(1, 20);
        var fPart = this.randomNumber(111111000, 999999999);
        var lPart = this.randomNumber(100, 999);
        return "" + fPart + m + lPart;
    };
    RandomService.prototype.randomNumber = function (min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    };
    RandomService.prototype.randomSsn = function () {
        return this.randomNumber(111111111, 999999999).toString();
    };
    RandomService.prototype.randomName = function () {
        var names = "Smith Johnson Williams Brown Jones Miller Davis Garcia Rodriguez Mahran Bader Mina Said Ahmed Mustafa Farag Hassan Yasser let var Wilson Martinez Anderson Taylor Thomas Hernandez Moore Martin Jackson Thompson White Noah Sophia Liam Emma Jacob Olivia Mason Isabella William Ava Ethan Mia Michael Emily Alexander Abigail Jayden Madison Daniel Elizabeth"
            .split(' ');
        return names[this.randomNumber(0, names.length - 1)] + this.randomNumber(111, 999);
    };
    RandomService.prototype.randomizePerson = function (person) {
        person.personalInfo.firstName = this.randomName();
        person.personalInfo.lastName = this.randomName();
        person.personalInfo.middleName = this.randomName();
        person.personalInfo.ssn = this.randomSsn();
    };
    RandomService.prototype.randDOB = function () {
        var y = this.randomNumber(1965, 1980);
        var m = this.randomNumber(1, 12).toString();
        var d = this.randomNumber(1, 28).toString();
        if (m.length < 2) {
            m = "0" + m;
        }
        if (d.length < 2) {
            d = "0" + d;
        }
        return "" + y + m + d;
    };
    RandomService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], RandomService);
    return RandomService;
}());
exports.RandomService = RandomService;
//# sourceMappingURL=random.service.js.map