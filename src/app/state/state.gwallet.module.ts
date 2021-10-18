import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { gwalletHandlers } from './api';
import { services } from './services';
import { effects } from './store/effects';
import { reducers, GWALLET_STATE, metaReducers } from './store/reducers';
import { environment } from '../../environments/environment';

@NgModule({
    imports: [
        StoreModule.forRoot({}, {metaReducers}),
        !environment.production ? StoreDevtoolsModule.instrument() : [],
        EffectsModule.forRoot(effects),
        StoreModule.forFeature(GWALLET_STATE, reducers),
    ],
    providers: [...gwalletHandlers, ...services]
})
export class GWalletStateModule { }
