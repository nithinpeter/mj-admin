  import { bootstrap } from 'angular2/platform/browser';
  import { AppComponent } from './components/app/app.component';
  import { ROUTER_PROVIDERS } from 'angular2/router';

  bootstrap(AppComponent, [ROUTER_PROVIDERS])
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

