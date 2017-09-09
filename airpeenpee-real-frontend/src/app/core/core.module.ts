import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Configuration */
import { CONFIG, Config } from "./config/config";


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    { provide: CONFIG, useValue: Config }
  ]
})
export class CoreModule { }
