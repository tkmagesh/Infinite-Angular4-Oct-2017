import {Component}  from '@angular/core'


@Component({
    selector : 'myapp',
    template : `
        <h1>Bug Tracker</h1>
        <hr />
       <router-outlet></router-outlet>
        `
})
export class MyAppComponent{
    message:string = 'Angular 2.0 is awesome!';
}

