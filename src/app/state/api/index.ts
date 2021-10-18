import { Injectable } from '@angular/core';

import { GWalletStateHandlerApi } from './gwallet.api';

@Injectable()
export class GWalletStateHandler {
    constructor(public gwallet: GWalletStateHandlerApi) { }
}

export const gwalletHandlers = [GWalletStateHandlerApi];

export * from './gwallet.api';
