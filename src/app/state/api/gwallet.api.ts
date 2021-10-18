import { Injectable } from '@angular/core';
import { ofType } from '@ngrx/effects';
import { ActionsSubject, Store } from '@ngrx/store';
import * as fromModels from '../../models';
import { Observable } from 'rxjs';

import { GWalletStateModule } from '../state.gwallet.module';
import * as fromActions from '../store/actions';
import * as fromSelectors from '../store/selectors';
import { getSelectorWithParams } from '../../utils';

@Injectable()
export class GWalletStateHandlerApi {
    constructor(private _store: Store<GWalletStateModule>, private _actionsSubject: ActionsSubject) {}

    getLoading(id: string): Observable<boolean> {
        return getSelectorWithParams<boolean>(this._store, fromSelectors.getGWalletLoading, id);
    }

    loadWallets(id: string): void {
        this._store.dispatch(fromActions.loadWallets({ id }));
    }

    getWallets(id: string): Observable<fromModels.GWallet[]> {
        return getSelectorWithParams<fromModels.GWallet[]>(
            this._store,
            fromSelectors.getGWalletWallets,
            id
        );
    }

    addWallet(id: string): void {
        this._store.dispatch(fromActions.addWallet({ id }));
    }

    getAddedWallet(id: string): Observable<fromModels.GWallet> {
        return getSelectorWithParams<fromModels.GWallet>(
            this._store,
            fromSelectors.getGWalletAddedWallet,
            id
        );
    }

    getAddedWalletSuccess(): Observable<boolean> {
        return this._actionsSubject.pipe(ofType(fromActions.addWalletSuccess));
    }

    addressTransact(id: string, request: fromModels.GWalletRequest): void {
        this._store.dispatch(fromActions.addressTransact({ id, request }));
    }

    getAddressTransactSuccess(): Observable<boolean> {
        return this._actionsSubject.pipe(ofType(fromActions.addressTransactSuccess));
    }

    getTransactions(id: string): Observable<fromModels.GTransaction[]> {
        return getSelectorWithParams<fromModels.GTransaction[]>(
            this._store,
            fromSelectors.getGWalletTransactions,
            id
        );
    }
}
