import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { RouterModule, Routes } from "@angular/router";
import { FormBuilder, ReactiveFormsModule } from '@angular/forms'

/* Routing */
const routes: Routes = [
  { path: '', redirectTo: 'register', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ],
  declarations: [
    RegisterComponent
  ],
  providers: [
    FormBuilder
  ]
})
export class AccountModule { }
