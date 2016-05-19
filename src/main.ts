import { bootstrap } from '@angular/platform-browser-dynamic';
import { AppComponent } from './components/app/app.component';
import { ROUTER_PROVIDERS } from '@angular/router';
import { provide }           from '@angular/core';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


bootstrap(AppComponent, [
      ROUTER_PROVIDERS, 
      provide(LocationStrategy, { useClass: HashLocationStrategy })
    ]
  ).then(success => console.log(`Bootstrap success`))
  .catch(error => console.log(error));



