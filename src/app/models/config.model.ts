import { InjectionToken } from '@angular/core';

export const WEB_CONFIG_INJECTION_TOKEN = new InjectionToken<any>(
    'WebConfigInjectionToken'
);

export interface GenericObject {
    [key: string]: any;
}

export interface GWalletRequest {
    [key: string]: any;
}