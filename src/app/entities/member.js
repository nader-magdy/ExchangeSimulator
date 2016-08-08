"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var index_1 = require("./index");
var Member = (function (_super) {
    __extends(Member, _super);
    function Member() {
        _super.call(this);
        this.dependants = [];
    }
    return Member;
}(index_1.Person));
exports.Member = Member;
//# sourceMappingURL=member.js.map