/**
 * From operator will create an observable from 
 * an array, 
 * an array like object, 
 * an iterable object or an
 * observable like object.
 */

import { from } from "rxjs";

const orders = ['Fashion', 'Electronics', 'Mobile', 'Household'];
const ordersObservable$ = from(orders);

ordersObservable$.subscribe(data => {
    console.log('Observable 1: ', data);
});