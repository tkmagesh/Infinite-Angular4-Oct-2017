import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UtilsModule } from './utils/utilsModule';

import { AppComponent } from './app.component';
import { BugTrackerComponent } from './bug-tracker/bugTracker.component';

import { ClosedCountPipe } from './bug-tracker/pipes/closedCount.pipe';

import { BugOperationsService } from './bug-tracker/services/BugOperations.service';
import { BugStorageService } from './bug-tracker/services/BugStorage.service';

import { BugStatsComponent } from './bug-tracker/views/bugStats.component';
import { BugEditComponent } from './bug-tracker/views/bugEdit.component';

@NgModule({
  declarations: [
    AppComponent,
    BugTrackerComponent,
    ClosedCountPipe,
    BugStatsComponent,
    BugEditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    UtilsModule
  ],
  providers: [
    BugOperationsService,
    BugStorageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
