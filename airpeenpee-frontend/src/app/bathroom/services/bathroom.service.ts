import { Inject, Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import { Bathroom } from '../models/Bathroom';
import { AuthenticatedUser } from "../../core/models/AuthenticatedUser";
import { AuthenticationService } from "../../core/services/authentication.service";
import { CONFIG } from "../../core/config/config";

@Injectable()
export class BathroomService {

  /**
   * Creates an instance of a meal service.
   *
   * @param http Class which will handle the creation of the requests.
   * @param authenticationService
   * @param configuration
   */
  constructor(private http: Http,
              private authenticationService: AuthenticationService,
              @Inject(CONFIG) private configuration) {
  }

  /**
   * Returns the rented bathrooms of a user.
   */
  getRentedBathrooms() {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.authenticationService.token()
    });

    this.http.get(
      `${this.configuration.applicationURL}/wcs/me`,
      { headers: headers })
      .toPromise()
      .then(response => response.json() as Array<Bathroom>)
      .catch();
  }

  /**
   *
   *
   * @param bathroom
   */
  rentBathroom(bathroom: Bathroom) {

  }



  /**
   * Handles any error that might occur.
   *
   * @param error Error.
   * @returns {Promise<never>} Error.
   */
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }

}
