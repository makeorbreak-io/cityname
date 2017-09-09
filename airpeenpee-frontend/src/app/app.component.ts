import { Component, Inject, OnInit } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";
import { AuthenticationService } from "./core/services/authentication.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeoLocationServive } from "./core/services/geolocation.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent implements OnInit {

  lat: number;
  lng: number;

  /**
   * Login form.
   */
  loginForm: FormGroup;

  /**
   * Errors found in the login form.
   *
   * @type {array} Array of errors found in the login form.
   */
  loginFormErrors = {
    'email': '',
    'password': '',
  };

  /**
   * Validation messages per field of the login form.
   *
   * @type {array} Array of validation messages per field of the login form.
   */
  validationMessages = {
    'email': {
      'required': 'Email is required.',
      'email': 'Email is invalid.',
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password should be at least 6 characters long.'
    }
  };

  constructor(@Inject(CONFIG) public configuration: IConfig,
              public authenticationService: AuthenticationService,
              private formBuilder: FormBuilder,
              public geoLocationServive: GeoLocationServive) {
  }

  /**
   * Called on component initialization.
   */
  ngOnInit(): void {
    this.geoLocationServive.getCurrentLocation()
    .subscribe(response => {
      this.lat = response.lat;
      this.lng = response.lon;
    });

    this.loginForm = this.formBuilder.group({
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(6) ] ]
    });

    this.loginForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  /**
   * Determines if the user is authenticated.
   *
   * @returns {boolean} True if the user is authenticated, false otherwise.
   */
  isLoggedIn() {
    return this.authenticationService.isLoggedIn();
  }

  /**
   * Returns the name of the authenticated user.
   *
   * @returns {string} Name of the authenticated user.
   */
  greeting() {
    return this.authenticationService.greeting();
  }

  /**
   * Performs the login operation.
   */
  login() {
    const email = this.loginForm.value.email;
    const password = this.loginForm.value.password;

    this.authenticationService.login(email, password);
  }

  /**
   * Performs the logout operation.
   */
  logout() {
    this.authenticationService.logout();
  }

  /**
   * Observes the changing of values in the form.
   *
   * @param data Changed values.
   */
  private onValueChanged(data?: any) {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;

    for (const field in this.loginFormErrors) {
      this.loginFormErrors[ field ] = ''; // Clear previous error message (if any)
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[ field ];

        if (control.errors) {
          this.loginFormErrors[ field ] += messages[ Object.keys(control.errors).entries().next().value[ 1 ] ];
        }
      }
    }
  }

}
