import { InjectionToken } from '@angular/core';
import { IConfig } from "./iconfig";

/* Configuration export */
export let CONFIG = new InjectionToken('app.configuration');

export const Config: IConfig = {
  applicationName: 'AirPeeNPee',
<<<<<<< HEAD
  applicationURL: 'api.airpeenpee.tk',
  sessionStorageName: 'authenticated_user',
  currentLocation: 'http://ip-api.com/json'
=======
  applicationURL: 'http://api.airpeenpee.tk',
  sessionStorageName: 'authenticated_user'
>>>>>>> f6699a0407ba48d9062f8dbcc7453d6319ff1914
};
