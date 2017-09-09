import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Configuration */
import { CONFIG, Config } from './config/config';

/* Services */
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    { provide: CONFIG, useValue: Config },
    AuthenticationService
  ],
  declarations: [ ]
})
export class CoreModule { }
