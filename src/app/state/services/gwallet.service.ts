import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { apiConfig } from '../../config';
import * as fromModels from '../../models';
import { EndpointParser } from '../../parsers';

@Injectable()
export class GWalletService {
    constructor(
        private _http: HttpClient
    ) {}

    fetchData(endpoint: string, type: string, request: fromModels.GWalletRequest): Observable<any> {
        console.log('🚀 ~ request', request);
        const url = this._getEndpoint(endpoint);
        switch (type) {
            case 'GET':
                return this._http
                    .get<any>(url)
                    .pipe(map(response =>  response));
            case 'POST'        :
                return this._http
                    .post<any>(url, { ...request })
                    .pipe(map(response =>  response));
        }
    }

    private _getEndpoint(endpoint: string): string {
        return EndpointParser.parse(
            apiConfig.gwallet.endpoints.api[endpoint],
            apiConfig.gwallet
        );
    }
}
