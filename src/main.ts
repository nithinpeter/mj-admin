import { bootstrap } from 'angular2/platform/browser';
import { AppComponent } from './components/app/app.component';
import { ROUTER_PROVIDERS } from 'angular2/router';
import { provide }           from 'angular2/core';
import { LocationStrategy, HashLocationStrategy } from 'angular2/platform/common';

import { provideStore } from '@ngrx/store';
import { counter } from './ngrx/reducers'

bootstrap(AppComponent, [
      ROUTER_PROVIDERS, 
      provide(LocationStrategy, { useClass: HashLocationStrategy }),
      provideStore({counter})
    ]
  ).then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));

