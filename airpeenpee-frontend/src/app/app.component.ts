import { Component, Inject } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {

  lat: number = 56.565656;
  lng: number = -56.7676;

  ngOnInit() {
      $http.get('http://ip-api.com/json')
      .success(function(coordinates) {
        lat = coordinates.lat;
        lng = coordinates.lon;
    })
  }

  constructor(@Inject(CONFIG) public configuration: IConfig) {
  }

}
