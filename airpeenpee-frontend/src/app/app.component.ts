import { Component, Inject, OnInit } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";
import { AuthenticationService } from "./core/services/authentication.service";
import { GeoLocationServive } from "./core/services/geolocation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
<<<<<<< HEAD

export class AppComponent {
=======
export class AppComponent implements OnInit {
>>>>>>> 17b65e6df6603fae3269ee546f9ea62c5e8e1e6e

  lat: number = 56.565656;
  lng: number = -56.7676;

  /**
   * Called on component initialization.
   */
  ngOnInit(): void {
    // Here kty... xD
  }

  constructor(@Inject(CONFIG) public configuration: IConfig,
              public authenticationService: AuthenticationService,
              public geoLocationServive: GeoLocationServive) {
  }

  getCurrentLocation(){
    geoLocationServive.getCurrentLocation();
  }

}
