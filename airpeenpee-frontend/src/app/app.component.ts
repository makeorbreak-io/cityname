import { Component, Inject } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";
import { AuthenticationService } from "./core/services/authentication.service";
import { GeoLocationServive } from "./core/services/geolocation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {

  lat: number = 56.565656;
  lng: number = -56.7676;


  constructor(@Inject(CONFIG) public configuration: IConfig,
              public authenticationService: AuthenticationService,
              public geoLocationServive: GeoLocationServive) {
  }

  getCurrentLocation(){
    geoLocationServive.getCurrentLocation();
  }

}
