"use strict";
var index_1 = require("./index");
var Person = (function () {
    function Person() {
        this.personalInfo = new index_1.PersonalInfo();
        this.address = new index_1.Address();
        this.contactInformation = new index_1.ContactInformation();
        this.healthCoverage = new index_1.HealthCoverage();
    }
    return Person;
}());
exports.Person = Person;
//# sourceMappingURL=person.js.map