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
var bugOperations_1 = require("../../services/bugOperations");
var bugService_1 = require("../../services/bugService");
var router_1 = require("@angular/router");
require("rxjs/Rx");
var BugAdd = (function () {
    function BugAdd(bugOperations, bugService, router) {
        this.bugOperations = bugOperations;
        this.bugService = bugService;
        this.router = router;
        this.newBug = '';
    }
    BugAdd.prototype.ngOnInit = function () {
    };
    BugAdd.prototype.onAddNew = function () {
        var _this = this;
        var newBugData = this.bugOperations.createNew(this.newBug);
        this.bugService.addNew(newBugData).subscribe(function (bug) { return _this.router.navigate(['bugs']); });
    };
    return BugAdd;
}());
BugAdd = __decorate([
    core_1.Component({
        selector: 'bug-add',
        styleUrls: ['style.css'],
        template: "\n\n        <section class=\"edit\">\n            <label for=\"\">Bug :</label>\n            <input type=\"text\" [(ngModel)]=\"newBug\">\n            <input type=\"button\" value=\"Add New\" (click)=\"onAddNew()\">\n        </section>\n        \n    "
    }),
    __metadata("design:paramtypes", [bugOperations_1.BugOperations, bugService_1.BugService, router_1.Router])
], BugAdd);
exports.BugAdd = BugAdd;
//# sourceMappingURL=bug-add.component.js.map