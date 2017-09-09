import { Inject, Injectable } from '@angular/core';
import { Http, Headers } from "@angular/http";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";
import 'rxjs/Rx';

/* Configurations */
import { CONFIG } from "../config/config";

/* Models */
import { AuthenticatedUser } from '../models/AuthenticatedUser';

@Injectable()
export class AuthenticationService {

  /**
   * Authenticated User.
   */
  private authenticatedUser: AuthenticatedUser = null;

  private static STORAGE_NAME: string = "authenticated_user";

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
    if (localStorage.getItem(this.configuration.sessionStorageName)) {
      this.authenticatedUser = JSON.parse(localStorage.getItem(this.configuration.sessionStorageName));
    }
  }

  /**
   * Determines if the user is logged in or not.
   *
   * @returns {boolean} True if the user is logged in, false otherwise.
   */
  isLoggedIn() {
    return !!this.authenticatedUser;
  }

  /**
   * Attempts to authenticate the user.
   *
   * @param email Email of the user.
   * @param password Password of the user.
   *
   * @throws Observable<string> Error message is any.
   */
  login(email: string, password: string) {
    let headers = new Headers({
      'Content-Type': 'application/json',
    });

    this.http.post(
      this.configuration.applicationURL,
      JSON.stringify({
        email: email,
        password: password
      }), { headers: headers })
      .map(response => response.json())
      .catch((error: any) => Observable.throw(error.json().message || 'Invalid credentials'))
      .subscribe(response => {
        this.authenticatedUser = response;
        localStorage.setItem(this.configuration.sessionStorageName, JSON.stringify(response));
      });
  };

  /**
   * Deletes the token from the local storage performing a logout.
   */
  logout() {
    localStorage.removeItem(this.configuration.sessionStorageName);
    this.authenticatedUser = null;
  }

}
