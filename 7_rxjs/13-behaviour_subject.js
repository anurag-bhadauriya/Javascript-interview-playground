/**
 * A BehaviorSubject holds some initial value. When it is subscribed it emits the value immediately.
 * BehaviorSubject has the capability to store the last emitted value. 
 * Whenever a new subscriber comes and subscribes it will get the last emitted value, even if it comes much later than the subject emitted value. 
 * The real-world usage of BehaviorSubject is when we need to share the data between two unrelated components.
 */

import { BehaviorSubject } from 'rxjs';

const bvrSubject = new BehaviorSubject('Hi There !');

function addSubscription(){
    bvrSubject.subscribe( data => {
        console.log('1. addSubscription: ', data);
    });

    bvrSubject.subscribe( data => {
        console.log('2. addSubscription: ', data);
    });

    bvrSubject.subscribe( data => {
        console.log('3. addSubscription: ', data);
    });
}

function emitValues() {
    bvrSubject.next('MY name is');
    bvrSubject.next('Anurag Bhadauriya');
    bvrSubject.next('MY age is');
    bvrSubject.next('28');
}

addSubscription();
emitValues();
addSubscription();
