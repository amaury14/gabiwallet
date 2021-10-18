import { createAction, props } from '@ngrx/store';

import * as fromModels from '../../../models';

const prefix = '[GWALLET]';

export const loadWallets = createAction(`${prefix}[Load Wallets]`, props<{ id: string }>());
export const loadWalletsSuccess = createAction(`${prefix}[Load Wallets Success]`, props<{ id: string; payload: fromModels.GWallet[] }>());
export const addWallet = createAction(`${prefix}[Add Wallets]`, props<{ id: string }>());
export const addWalletSuccess = createAction(`${prefix}[Add Wallets Success]`, props<{ id: string; payload: fromModels.GWallet }>());
export const addressTransact = createAction(`${prefix}[Address Transact]`, props<{ id: string; request: fromModels.GWalletRequest }>());
export const addressTransactSuccess = createAction(`${prefix}[Address Transact Success]`, props<{ id: string; payload: fromModels.GTransaction[] }>());
