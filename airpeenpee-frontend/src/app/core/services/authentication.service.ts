import { Inject, Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { Router } from "@angular/router";
import { AuthenticatedUser } from '../models/AuthenticatedUser';
import { CONFIG } from "../config/config";

@Injectable()
export class AuthenticationService {

  /**
   * Authenticated User.
   */
  private authenticatedUser: AuthenticatedUser;

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


  // /**
  //  * Attempts to authenticate the user.
  //  *
  //  * @param username Username of the user.
  //  * @param password Password of the user.
  //  *
  //  * @throws Observable<string> Error message is any.
  //  */
  // login(username: string, password: string) {
  //   let headers = new Headers({
  //     'Content-Type': 'application/json',
  //   });
  //
  //   this.http.post(this.configuration.authenticationURL, JSON.stringify({
  //     grant_type: 'password', client_id: this.configuration.clientIdentifier,
  //     client_secret: this.configuration.clientSecret, username: username, password: password
  //   }), { headers: headers })
  //     .map(response => response.json())
  //     .catch((error: any) => Observable.throw(error.json().message || 'An error as occurred.'))
  //     .subscribe(response => {
  //       console.dir(response);
  //       let token = response[ 'access_token' ];
  //       console.dir(token);
  //       headers.set('Authorization', `Bearer ${token}`);
  //
  //       this.http.get(this.configuration.profileURL, { headers: headers })
  //         .map(response => response.json() as AuthenticatedUser)
  //         .catch((error: any) => Observable.throw(error.json().message || 'An error as occurred.'))
  //         .subscribe(
  //           authenticatedUser => {
  //             this.authenticatedUser = authenticatedUser;
  //             localStorage.setItem('authenticated_user', JSON.stringify(authenticatedUser));
  //
  //             this.router.navigateByUrl('/');
  //           }
  //         );
  //     });
  // }
  //
  // /**
  //  * Deletes the token from the local storage performing a logout.
  //  */
  // logout() {
  //   localStorage.removeItem('authenticated_user');
  //   this.authenticatedUser = null;
  // }
  //
  // /**
  //  * Determines if the user is logged in or not.
  //  *
  //  * @returns {boolean} True if the user is logged in, false otherwise.
  //  */
  // isLoggedIn() {
  //   return !!this.authenticatedUser;
  // }


}
