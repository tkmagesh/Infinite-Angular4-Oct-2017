"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var bug_tracker_component_1 = require("./bug-tracker/bug-tracker.component");
var bugOperations_1 = require("./bug-tracker/services/bugOperations");
var bugService_1 = require("./bug-tracker/services/bugService");
var bug_add_component_1 = require("./bug-tracker/components/bug-add/bug-add.component");
var bug_details_component_1 = require("./bug-tracker/components/bug-details/bug-details.component");
var trimText_1 = require("./bug-tracker/pipes/trimText");
var closedCount_1 = require("./bug-tracker/pipes/closedCount");
var filter_1 = require("./bug-tracker/pipes/filter");
var sort_1 = require("./bug-tracker/pipes/sort");
var bug_stats_component_1 = require("./bug-tracker/components/bug-stats/bug-stats.component");
var bug_search_component_1 = require("./bug-tracker/components/bug-search/bug-search.component");
var bug_sort_component_1 = require("./bug-tracker/components/bug-sort/bug-sort.component");
var routes = [
    { path: '', redirectTo: '/bugs', pathMatch: 'full' },
    { path: 'add', component: bug_add_component_1.BugAdd },
    { path: 'details/:id', component: bug_details_component_1.BugDetails },
    { path: 'bugs', component: bug_tracker_component_1.BugTracker }
];
var MyAppModule = (function () {
    function MyAppModule() {
    }
    return MyAppModule;
}());
MyAppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, router_1.RouterModule.forRoot(routes)],
        bootstrap: [app_component_1.MyAppComponent],
        declarations: [app_component_1.MyAppComponent, bug_tracker_component_1.BugTracker, bug_add_component_1.BugAdd, bug_details_component_1.BugDetails, trimText_1.TrimText, closedCount_1.ClosedCount, filter_1.Filter, sort_1.Sort, bug_stats_component_1.BugStats, bug_search_component_1.BugSearch, bug_sort_component_1.BugSort],
        providers: [bugOperations_1.BugOperations, bugService_1.BugService]
    })
], MyAppModule);
exports.MyAppModule = MyAppModule;
//# sourceMappingURL=app.module.js.map