import { Component, Inject } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";
import { AuthenticationService } from "./core/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(@Inject(CONFIG) public configuration: IConfig,
              public authenticationService: AuthenticationService) {
  }


  isLoggedIn() {
    //return this.authenticationService.isLoggedIn();
  }

  logout() {
    //this.authenticationService.logout();
  }


}
