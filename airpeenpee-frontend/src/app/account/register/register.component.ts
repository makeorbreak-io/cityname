import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AuthenticationService } from "app/core/services/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html'
})
export class RegisterComponent implements OnInit {

  /**
   * Registration form.
   */
  registerForm: FormGroup;

  /**
   * Errors found in the registration form.
   *
   * @type {array} Array of errors found in the registration form.
   */
  registerFormErrors = {
    'name': '',
    'email': '',
    'password': ''
  };

  /**
   * Validation messages per field of the register form.
   *
   * @type {array} Array of validation messages per field of the register form.
   */
  validationMessages = {
    'name': {
      'required': 'Name is required.'
    },
    'email': {
      'required': 'Email is required.',
      'email': 'Email is invalid.',
    },
    'password': {
      'required': 'Password is required.',
      'minlength': 'Password should be atleast 6 characters long.'
    }
  };

  /**
   * Creates an instance of a register component.
   *
   * @param router Route manager.
   * @param authenticationService Service responsible for handling registration against an API.
   * @param formBuilder Builder used in the construction of reactive forms.
   */
  constructor(public router: Router,
              private authenticationService: AuthenticationService,
              private formBuilder: FormBuilder) {
  }

  /**
   * On init build the form and start its observer.
   */
  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: [ '', Validators.required ],
      email: [ '', [ Validators.required, Validators.email ] ],
      password: [ '', [ Validators.required, Validators.minLength(6) ] ]
    });

    this.registerForm.valueChanges.subscribe(data => this.onValueChanged(data));
  }

  /**
   * Performs the registration operation.
   */
  register() {
    const name = this.registerForm.value.name;
    const email = this.registerForm.value.email;
    const password = this.registerForm.value.password;

    this.authenticationService.register(name, email, password);
  }

  /**
   * Observes the changing of values in the form.
   *
   * @param data Changed values.
   */
  private onValueChanged(data?: any) {
    if (!this.registerForm) {
      return;
    }
    const form = this.registerForm;

    for (const field in this.registerFormErrors) {
      this.registerFormErrors[ field ] = ''; // Clear previous error message (if any)
      const control = form.get(field);

      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[ field ];

        for (const key in control.errors) {
          this.registerFormErrors[ field ] += messages[ key ];
          break;
        }
      }
    }
  }

}
