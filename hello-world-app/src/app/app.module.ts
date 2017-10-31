import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { MathCalculator1Component } from './mathCalculator/mathCalculator1.Component';
import { MathCalculator2Component } from './mathCalculator/mathCalculator2.Component';
import { MathResultComponent } from './mathCalculator/mathResult.component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    MathCalculator1Component,
    MathCalculator2Component,
    MathResultComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
