import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Root Component / Landing Page */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';

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
    AgmCoreModule.forRoot({
    apiKey: 'AIzaSyCrhTDUFc1VSjsgf-jsKMMt82eAPThftt0'
  })
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
