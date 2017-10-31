import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreeterComponent } from './greeter/greeter.component';
import { MathCalculator1Component } from './mathCalculator/mathCalculator1.Component';

@NgModule({
  declarations: [
    AppComponent,
    GreeterComponent,
    MathCalculator1Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
