import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

/* Configurations */
import { CONFIG } from "../config/config";


@Injectable()
export class GeoLocationServive {

  /**
   * Creates an instance of an authentication service.
   *
   * @param http Request handler.
   * @param router Routing class.
   * @param configuration Application configurations.
   */
  constructor(private http: Http,
              private router: Router,
              @Inject(CONFIG) private configuration) {
  }

  getCurrentLocation() {

    return this.http.get(this.configuration.currentLocation)
    .map(response => response.json())
    .catch((error) => {
        console.log('error ' + error);
        throw error;
      });

  };

}
