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
var bugOperations_1 = require("./services/bugOperations");
var bugService_1 = require("./services/bugService");
require("rxjs/Rx");
var BugTracker = (function () {
    //sortOrder:string = '';
    function BugTracker(bugOperations, bugService) {
        this.bugOperations = bugOperations;
        this.bugService = bugService;
        this.bugs = [];
        this.newBug = '';
        this.searchBug = '';
        this.sortOrder = { name: '', descending: false };
    }
    BugTracker.prototype.ngOnInit = function () {
        var _this = this;
        this.bugService.getAll().subscribe(function (bugs) { return _this.bugs = bugs; });
    };
    BugTracker.prototype.onSearchBug = function (bugName) {
        console.log('search bug name = ', bugName);
        this.searchBug = bugName;
    };
    BugTracker.prototype.onSortBug = function (sortOrder) {
        this.sortOrder = sortOrder;
    };
    BugTracker.prototype.onAddNew = function () {
        var _this = this;
        var newBugData = this.bugOperations.createNew(this.newBug);
        this.bugService.addNew(newBugData).subscribe(function (bug) { return _this.bugs.push(bug); });
    };
    BugTracker.prototype.toggle = function (bug) {
        this.bugOperations.toggle(bug);
        this.bugService.save(bug);
    };
    BugTracker.prototype.removeClosed = function () {
        for (var i = this.bugs.length - 1; i >= 0; i--) {
            if (this.bugs[i].isClosed) {
                this.bugService.remove(this.bugs[i]);
                this.bugs.splice(i, 1);
            }
        }
    };
    return BugTracker;
}());
BugTracker = __decorate([
    core_1.Component({
        selector: 'bug-tracker',
        styleUrls: ['style.css'],
        template: "\n    <div class=\"content\">\n        <a routerLink='/add'>Create New</a>\n        <bug-stats [Bugs]=\"bugs\"></bug-stats>\n        <bug-search (OnSearch)=\"onSearchBug($event)\"></bug-search>\n        <bug-sort (OnSort)=\"onSortBug($event)\"></bug-sort>\n        <section class=\"edit\">\n            <label for=\"\">Bug :</label>\n            <input type=\"text\" [(ngModel)]=\"newBug\">\n            <input type=\"button\" value=\"Add New\" (click)=\"onAddNew()\">\n        </section>\n        <section class=\"list\">\n            <ol>\n               <li [className]=\"bug.isClosed ? 'closed' : ''\" *ngFor=\"let bug of (bugs | filter:searchBug | sort:sortOrder)\" (click) = \"toggle(bug)\">\n                    <span>{{bug.name | trimText}}</span>\n                    <div><a [routerLink]=\"['/details',bug.id]\">More</a></div>\n               </li>\n            </ol>\n            <input type=\"button\" value=\"Remove Closed\" (click)=\"removeClosed()\">\n        </section>\n    </div>\n    "
    }),
    __metadata("design:paramtypes", [bugOperations_1.BugOperations, bugService_1.BugService])
], BugTracker);
exports.BugTracker = BugTracker;
//# sourceMappingURL=bug-tracker.component.js.map