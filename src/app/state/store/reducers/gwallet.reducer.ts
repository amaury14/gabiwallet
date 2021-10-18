import { Action, createReducer, on } from '@ngrx/store';
import * as fromModels from '../../../models';

import * as fromActions from '../actions';

export const initialState: fromModels.GWalletGenericState = {};

const newDate = (): Date => {
    return new Date();
};

const reducer = createReducer<fromModels.GWalletGenericState, Action>(
    initialState,
    on(
        fromActions.loadWallets,
        fromActions.addWallet,
        fromActions.addressTransact,
        (state, { id }) => ({
            ...state,
            [id]: {
                ...state?.[id],
                loading: true,
                updated: newDate()
            }
        })
    ),
    on(
        fromActions.loadWalletsSuccess,
        (state, { id, payload }) => ({
            ...state,
            [id]: {
                ...state?.[id],
                loading: false,
                updated: newDate(),
                wallets: payload
            }
        })
    ),
    on(
        fromActions.addWalletSuccess,
        (state, { id, payload }) => ({
            ...state,
            [id]: {
                ...state?.[id],
                loading: false,
                updated: newDate(),
                addedWallet: payload
            }
        })
    ),
    on(
        fromActions.addressTransactSuccess,
        (state, { id, payload }) => ({
            ...state,
            [id]: {
                ...state?.[id],
                loading: false,
                updated: newDate(),
                transactions: payload
            }
        })
    )
);

/**
 * @param state
 * @param action
 */
export function gwalletReducer(state: fromModels.GWalletGenericState | undefined, action: Action) {
    return reducer(state, action);
}

export const getGWalletState = (state: fromModels.GWalletGenericState) => state;
