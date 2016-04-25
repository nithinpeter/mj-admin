  import { bootstrap } from 'angular2/platform/browser';
  import { StoryComponent } from './app/app.component';

  bootstrap(StoryComponent)
    .then(success => console.log(`Bootstrap success`))
    .catch(error => console.log(error));

