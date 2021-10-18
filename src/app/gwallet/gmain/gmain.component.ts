import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import * as fromModels from '../../models';
import { GWalletStateHandler } from '../../state/api';
import { mainConfig } from './gmain.metadata';

@Component({
    selector: 'app-gmain',
    templateUrl: './gmain.component.html',
    styleUrls: ['./gmain.component.scss']
})
export class GmainComponent implements OnInit {

    loading: Observable<boolean>;
    wallets: fromModels.GWallet[];
    checkoutForm: FormGroup;

    private _layoutDisposed$ = new Subject<void>();

    get gwalletId(): string {
        return mainConfig.id;
    }

    constructor(
        private _gwalletState: GWalletStateHandler,
        private formBuilder: FormBuilder) { }

    ngOnInit(): void {
        this._buildFrom();
        this._loadData();
        this._getWalletsData();
    }

    onClick(event): void {
        this._gwalletState.gwallet.addWallet(this.gwalletId);
    }

    onSubmit(): void {
        this._gwalletState.gwallet.addressTransact(this.gwalletId, this.checkoutForm.value);
        this.checkoutForm.reset();
    }

    private _buildFrom(): void {
        this.checkoutForm = this.formBuilder.group({
            sender: '',
            recipient: '',
            amount: 0,
            fee: 0.001
        });
    }

    private _getWalletsData(): void {
        this.loading = this._gwalletState.gwallet.getLoading(this.gwalletId);
        this._gwalletState.gwallet.getWallets(this.gwalletId)
            .pipe(takeUntil(this._layoutDisposed$))
            .subscribe(data => {
                this.wallets = data;
            });
        this._gwalletState.gwallet.getAddedWalletSuccess()
            .pipe(takeUntil(this._layoutDisposed$))
            .subscribe(() => {
                this._loadData();
            });
        this._gwalletState.gwallet.getAddressTransactSuccess()
            .pipe(takeUntil(this._layoutDisposed$))
            .subscribe(() => {
                this._loadData();
            });
    }

    private _loadData(): void {
        this._gwalletState.gwallet.loadWallets(this.gwalletId);
    }
}
