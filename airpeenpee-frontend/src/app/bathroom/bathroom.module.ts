import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RentedComponent } from './rented/rented.component';
import { RouterModule, Routes } from "@angular/router";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

/* Service */
import { BathroomService } from './services/bathroom.service';

/* Routing */
const routes: Routes = [
  { path: '', redirectTo: 'rented', pathMatch: 'full' },
  { path: 'rented', component: RentedComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [
    RentedComponent
  ],
  providers: [
    BathroomService
  ]
})
export class BathroomModule { }
