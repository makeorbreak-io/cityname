import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap'

/* Root Component / Landing Page */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";

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
    BsDropdownModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
