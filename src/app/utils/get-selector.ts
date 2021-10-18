import { MemoizedSelector, select, Store } from '@ngrx/store';
import { GenericObject } from '../models';
import { Observable } from 'rxjs';

export const getSelector = <T>(
    store: Store<any>,
    selector: MemoizedSelector<GenericObject, T>
): Observable<T> => {
    return store.pipe(select(selector));
};

export const getSelectorWithParams = <T>(
    store: Store<any>,
    selector: any,
    props?: any
): Observable<T> => {
    return store.pipe(select(selector, props));
};
