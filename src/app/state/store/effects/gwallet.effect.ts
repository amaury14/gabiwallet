import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, zip } from 'rxjs';
import { catchError, concatMap, map, switchMap } from 'rxjs/operators';

import { GWalletService } from '../../services';
import * as fromActions from '../actions';

@Injectable()
export class GWalletEffects {
    constructor(private actions$: Actions, private gwalletService: GWalletService) {}

    loadWallets$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.loadWallets),
            switchMap(data =>
                this.gwalletService.fetchData('getWallets', 'GET', null).pipe(
                    map(payload => fromActions.loadWalletsSuccess({ id: data?.id, payload })),
                    catchError(error => of(new fromActions.ErrorHandlerAction(error)))
                )
            )
        )
    );

    addWallet$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.addWallet),
            switchMap(data =>
                this.gwalletService.fetchData('addWallet', 'GET', null).pipe(
                    map(payload => fromActions.addWalletSuccess({ id: data?.id, payload })),
                    catchError(error => of(new fromActions.ErrorHandlerAction(error)))
                )
            )
        )
    );

    addressTransact$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.addressTransact),
            switchMap(data =>
                this.gwalletService.fetchData('addressTransact', 'POST', data.request).pipe(
                    map(payload => fromActions.addressTransactSuccess({ id: data?.id, payload })),
                    catchError(error => of(new fromActions.ErrorHandlerAction(error)))
                )
            )
        )
    );
}
