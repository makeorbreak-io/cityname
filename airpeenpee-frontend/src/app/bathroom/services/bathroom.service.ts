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
      .catch(this.handleError);
  }

  /**
   * Creates a bathroom for rental based on the retrieved information.
   *
   * @param bathroom Bathroom to rent.
   */
  rentBathroom(bathroom: Bathroom) {
    let headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': this.authenticationService.token()
    });

    this.http.post(
      `${this.configuration.applicationURL}/wcs/me`,
      { headers: headers })
      .toPromise()
      .then(response => response.json() as Bathroom)
      .catch(this.handleError);
  }

  // /**
  //  * Fetches a meal based on its id.
  //  *
  //  * @param id Meal identifier.
  //  * @returns {Promise<any|Meal>} Meal found.
  //  */
  // getMeal(id
  //           :
  //           number
  // ):
  // Promise < Meal > {
  //   const url = `${this.mealsURL}/${id}`;
  //
  //   return this.http.get(url, { headers: this.headers })
  //     .toPromise()
  //     .then(response => response.json() as Meal)
  //     .catch(this.handleError);
  // }
  //
  // /**
  //  * Updates a meal based on performed modifications.
  //  *
  //  * @param meal Updated meal
  //  * @returns {Promise<any|Meal>} Updated meal.
  //  */
  // updateMeal(meal
  //              :
  //              Meal
  // ):
  // Promise < Meal > {
  //   const url = `${this.mealsURL}/${meal.id}`;
  //   return this.http
  //     .put(url, JSON.stringify(meal), { headers: this.headers })
  //     .toPromise()
  //     .then(() => meal)
  //     .catch(this.handleError);
  // }
  //
  // /**
  //  * Deletes a meal based on its id.
  //  *
  //  * @param id Meal identifier.
  //  * @returns {Promise<any>} Nothing
  //  */
  // deleteMeal(id
  //              :
  //              number
  // ):
  // Promise < void > {
  //   const url = `${this.mealsURL}/${id}`;
  //
  //   return this.http.delete(url, { headers: this.headers })
  //     .toPromise()
  //     .then(() => null)
  //     .catch(this.handleError);
  // }

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
