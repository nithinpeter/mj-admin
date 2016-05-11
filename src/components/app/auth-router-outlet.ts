import {Directive, Attribute, ViewContainerRef, DynamicComponentLoader} from 'angular2/core';
import {Router, RouterOutlet, ComponentInstruction} from 'angular2/router';
// import {Login} from '../login/login';

@Directive({
  selector: 'router-outlet'
})
export default class LoggedInRouterOutlet extends RouterOutlet {
  publicRoutes: any;
  private parentRouter: Router;

  constructor(_elementRef: ViewContainerRef, _loader: DynamicComponentLoader,
              _parentRouter: Router, @Attribute('name') nameAttr: string) {
    super(_elementRef, _loader, _parentRouter, nameAttr);

    this.parentRouter = _parentRouter;
    // The Boolean following each route below denotes whether the route requires authentication to view
    this.publicRoutes = {
      'login': true,
      'signup': true
    };
  }

  activate(instruction: ComponentInstruction) {
    let url = instruction.urlPath;
    if (!this.publicRoutes[url] && !localStorage.getItem('token')) {
      // todo: redirect to Login, may be there a better way?
      this.parentRouter.navigateByUrl('/login');
    }
    return super.activate(instruction);
  }
}