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
var http_1 = require("@angular/http");
require("rxjs/Rx");
var BugService = (function () {
    function BugService(http) {
        this.http = http;
    }
    BugService.prototype.getAll = function () {
        return this.http
            .get('http://localhost:3000/bugs')
            .map(function (response) { return response.json(); });
    };
    BugService.prototype.addNew = function (newBug) {
        return this.http
            .post('http://localhost:3000/bugs', newBug)
            .map(function (response) { return response.json(); });
    };
    BugService.prototype.save = function (bug) {
        console.log('triggering save fgor ', bug);
        return this.http
            .put('http://localhost:3000/bugs/' + bug.id, bug)
            .map(function (response) { return response.json(); })
            .subscribe(function (response) { });
    };
    BugService.prototype.remove = function (bug) {
        return this.http
            .delete('http://localhost:3000/bugs/' + bug.id)
            .subscribe(function (response) { });
    };
    return BugService;
}());
BugService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], BugService);
exports.BugService = BugService;
//# sourceMappingURL=bugService.js.map