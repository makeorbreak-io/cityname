import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Configuration */
import { CONFIG, Config } from './config/config';

/* Services */
import { AuthenticationService } from './services/authentication.service';
import { GeoLocationServive } from './services/geolocation.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    { provide: CONFIG, useValue: Config },
    AuthenticationService,
    GeoLocationServive
  ],
  declarations: [ ]
})
export class CoreModule { }
