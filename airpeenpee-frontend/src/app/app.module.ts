import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap'

/* Root Component / Landing Page */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";

/* Angular Google Maps Module */
import { AgmCoreModule } from '@agm/core';

/* Routing */
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
    CoreModule,
<<<<<<< HEAD
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCrhTDUFc1VSjsgf-jsKMMt82eAPThftt0'
  })
  ],
  providers: [],
=======
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
>>>>>>> f6699a0407ba48d9062f8dbcc7453d6319ff1914
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
