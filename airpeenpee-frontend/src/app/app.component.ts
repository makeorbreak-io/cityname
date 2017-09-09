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

export class AppComponent implements OnInit {

  lat: number = 56.565656;
  lng: number = -56.7676;
  coors: object;

  /**
   * Called on component initialization.
   */
  ngOnInit(): void {
      this.geoLocationServive.getCurrentLocation()
      .subscribe(response => {
        this.lat = response.lat;
        this.lng = response.lon;
    });
  }

  constructor(@Inject(CONFIG) public configuration: IConfig,
              public authenticationService: AuthenticationService,
              public geoLocationServive: GeoLocationServive) {
  }

}
