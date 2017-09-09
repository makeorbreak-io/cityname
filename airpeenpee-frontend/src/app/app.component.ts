import { Component, Inject } from '@angular/core';
import { CONFIG } from "./core/config/config";
import { IConfig } from "./core/config/iconfig";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {

  constructor(@Inject(CONFIG) public configuration: IConfig) {
  }

}
