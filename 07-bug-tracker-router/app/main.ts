import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';


import {MyAppModule} from './app.module'

var platform = platformBrowserDynamic();

platform.bootstrapModule(MyAppModule);
