import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { GWalletGenericState } from '../../../models';
import {environment} from '../../../../environments/environment';
import { gwalletReducer } from './gwallet.reducer';

export interface GWalletState {
    gwallet: GWalletGenericState;
}

export const reducers: ActionReducerMap<GWalletState> = {
    gwallet: gwalletReducer
};

export const metaReducers: MetaReducer<any>[] = !environment.production ? [] : [];

export const GWALLET_STATE = '[GWALLET_STATE]';

export const getGWalletState = createFeatureSelector<GWalletState>(GWALLET_STATE);
