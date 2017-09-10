import { Component, Inject, OnInit } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";
import { AuthenticationService } from "./core/services/authentication.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { GeoLocationServive } from "./core/services/geolocation.service";
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})


export class AppComponent implements OnInit {

  marker: marker;
  lat: number;
  lng: number;
  zoom: number = 13;
  styles: object= this.configuration.mapSettings;
  markers: marker[] = [];
  info: infoWindow = {
    img:'',
    tooltip:'',
    lat:0,
    lng:0
  };

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

  public _opened: boolean = false;

  public _toggleSidebar() {
    this._opened = !this._opened;
  }

  /**
   * Called on component initialization.
   */
  ngOnInit(): void {
    this.geoLocationServive.getCurrentLocation()
    .subscribe(response => {
      this.markers.push({
  		  lat: response.lat,
  		  lng: response.lon,
  		  title: 'YOU ARE HERE',
        iconUrl: '/assets/rsz_1person_pooping.png'
  	  });

      this.lat = response.lat;
      this.lng = response.lon;

      this.geoLocationServive.setAllMarkers(this.lat,this.lng)
      .subscribe(response => {
        response.forEach((element) =>{
          this.markers.push({
      		  lat: element.lat,
      		  lng: element.lng,
      		  title: element.name,
            iconUrl: '/assets/rsz_bathroom.png',
            img:element.img
      	  });
        });
      });

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

  mapClicked($event){
    let coords = $event.coords;
    //console.dir(coords);
  }

  clickedMarker(m, i){
    console.dir(m);
    this.info = {
      img:m.img,
      tooltip:m.title,
      lat:m.lat,
      lng:m.lng
    }
  }
}

interface infoWindow{
  img:string;
  tooltip:string;
  lat:number;
  lng:number;
}

interface marker {
	lat: number;
	lng: number;
  iconUrl: string;
	title?: string;
	draggable?: false;
  img?:string;
}
