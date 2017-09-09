import { Component, Inject, OnInit } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";
import { AuthenticationService } from "./core/services/authentication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {

  constructor(@Inject(CONFIG) public configuration: IConfig,
              public authenticationService: AuthenticationService) {
  }

  /**
   * Called on component initialization.
   */
  ngOnInit(): void {
    // Here kty... xD
  }

  isLoggedIn() {
    //return this.authenticationService.isLoggedIn();
  }

  logout() {
    //this.authenticationService.logout();
  }


}
