import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { GmainComponent } from './gmain/gmain.component';

const GWALLET_ROUTES: Routes = [
    {
        path: '',
        component: GmainComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(GWALLET_ROUTES)],
    exports: [RouterModule]
})
export class GMainRoutingModule {}
