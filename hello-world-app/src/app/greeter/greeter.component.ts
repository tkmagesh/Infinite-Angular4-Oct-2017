import { Component } from '@angular/core';


@Component({
	selector : 'greeter',
	templateUrl : 'greeter.component.html'
})
export class GreeterComponent{
	message = '[Dummmy message from  greeter]';

	getAppNameClicked(appName){
	  	this.message = 'Hello, Welcome to ' + appName + '!!!';
	  }
}