import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {MyAppComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';

import {BugTracker} from './bug-tracker/bug-tracker.component';
import {BugOperations} from './bug-tracker/services/bugOperations';
import {BugService} from './bug-tracker/services/bugService';
import {BugAdd} from './bug-tracker/components/bug-add/bug-add.component';
import {BugDetails} from './bug-tracker/components/bug-details/bug-details.component';

import {TrimText} from './bug-tracker/pipes/trimText';
import {ClosedCount} from './bug-tracker/pipes/closedCount';
import {Filter} from './bug-tracker/pipes/filter';
import {Sort} from './bug-tracker/pipes/sort';
import {BugStats} from './bug-tracker/components/bug-stats/bug-stats.component';
import {BugSearch} from './bug-tracker/components/bug-search/bug-search.component';
import {BugSort} from './bug-tracker/components/bug-sort/bug-sort.component';

var routes : Routes = [
    {path : '', redirectTo : '/bugs', pathMatch : 'full'},
    {path : 'add', component : BugAdd},
    {path : 'details/:id', component : BugDetails},
    {path : 'bugs', component : BugTracker}
]

@NgModule({
    imports : [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
    bootstrap : [MyAppComponent],
    declarations : [MyAppComponent, BugTracker, BugAdd, BugDetails, TrimText, ClosedCount, Filter, Sort, BugStats, BugSearch, BugSort],
    providers  : [BugOperations, BugService]
})
export class MyAppModule{

}