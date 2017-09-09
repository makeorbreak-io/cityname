import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';

/* Configuration */
import { CONFIG, Config } from './config/config';

/* Services */
import { AuthenticationService } from './services/authentication.service';

@NgModule({
  imports: [
    CommonModule,
    HttpModule
  ],
  providers: [
    { provide: CONFIG, useValue: Config },
    AuthenticationService
  ],
  declarations: [ ]
})
export class CoreModule { }
