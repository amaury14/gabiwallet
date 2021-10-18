import { createSelector } from '@ngrx/store';

import * as fromReducers from '../reducers';
import { getGWalletState } from '../reducers/gwallet.reducer';

export const getState = createSelector(
    fromReducers.getGWalletState,
    (state: fromReducers.GWalletState) => state.gwallet
);

export const getGWalletStateSelector = createSelector(getState, getGWalletState);

export const getGWalletLoading = createSelector(
    getGWalletStateSelector, (state, id: string) => {
        return state?.[id]?.loading;
    });

export const getGWalletWallets = createSelector(
    getGWalletStateSelector, (state, id: string) => {
        return state?.[id]?.wallets;
    });

export const getGWalletAddedWallet = createSelector(
    getGWalletStateSelector, (state, id: string) => {
        return state?.[id]?.addedWallet;
    });

export const getGWalletTransactions = createSelector(
    getGWalletStateSelector, (state, id: string) => {
        return state?.[id]?.transactions;
    });