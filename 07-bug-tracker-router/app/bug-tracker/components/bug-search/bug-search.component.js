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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var BugSearch = (function () {
    function BugSearch() {
        this.OnSearch = new core_1.EventEmitter();
        this.searchBug = '';
    }
    BugSearch.prototype.setSearch = function () {
        console.log(this.searchBug);
        this.OnSearch.emit(this.searchBug);
    };
    return BugSearch;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", core_1.EventEmitter)
], BugSearch.prototype, "OnSearch", void 0);
BugSearch = __decorate([
    core_1.Component({
        selector: 'bug-search',
        styleUrls: ['style.css'],
        template: "\n     <section class=\"search\">\n            <label for=\"\">Search :</label>\n            <input type=\"text\" [(ngModel)]=\"searchBug\" (keyup)=\"setSearch()\" >\n            <label for=\"\">Is Closed :</label>\n            <input type=\"checkbox\" >\n        </section>\n    "
    })
], BugSearch);
exports.BugSearch = BugSearch;
//# sourceMappingURL=bug-search.component.js.map