import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Root Component / Landing Page */
import { AppComponent } from './app.component';

/* Feature Modules */
import { CoreModule } from './core/core.module';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },
  { path: 'auth', loadChildren: 'app/authentication/authentication.module#AuthenticationModule'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    RouterModule.forRoot(routes, {
      enableTracing: true
    }),
    CoreModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
