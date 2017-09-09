import { InjectionToken } from '@angular/core';
import { IConfig } from "./iconfig";

/* Configuration export */
export let CONFIG = new InjectionToken('app.configuration');

export const Config: IConfig = {
  applicationName: 'AirPeeNPee',
};
