import { InjectionToken } from '@angular/core';
import { IConfig } from "./iconfig";

/* Configuration export */
export let CONFIG = new InjectionToken('app.configuration');

export const Config: IConfig = {
  applicationName: 'AirPeeNPee',
  applicationURL: 'http://api.airpeenpee.tk',
  sessionStorageName: 'authenticated_user',
  currentLocation: 'http://ip-api.com/json'
};
