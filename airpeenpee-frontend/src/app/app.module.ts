import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BsDropdownModule } from 'ngx-bootstrap'
import { CollapseModule } from 'ngx-bootstrap';
import { SidebarModule } from 'ng-sidebar';

/* Root Component / Landing Page */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';
import { ReactiveFormsModule, FormBuilder } from "@angular/forms";

/* Angular Google Maps Module */
import { AgmCoreModule } from '@agm/core';
import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

/* Routing */
const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'account', loadChildren: 'app/account/account.module#AccountModule' },
  { path: 'bathroom', loadChildren: 'app/bathroom/bathroom.module#BathroomModule' }
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
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCrhTDUFc1VSjsgf-jsKMMt82eAPThftt0'
    }),
    ReactiveFormsModule,
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    SidebarModule.forRoot(),
    AgmSnazzyInfoWindowModule
  ],
  providers: [
    FormBuilder
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }

/*

 @NgModule({
 declarations: [
 ],
 providers: [
 FormBuilder
 ],
 BsDropdownModule.forRoot(),
 ReactiveFormsModule
 ],
 */
