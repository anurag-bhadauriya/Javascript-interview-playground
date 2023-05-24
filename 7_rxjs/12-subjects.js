/**
 * A Subject is a special type of Observable that allows value to be multicasted to many observers.
 * They can be observable and observers both. 
 * The subject is similar to EventEmitters, they just emit the same value to all its subscribers and maintain a registry of many listeners.
 */

import { Subject } from 'rxjs';

const subject = new Subject();

subject.subscribe({
    next( data){
        console.log('1.Emitteed Value : ', data);
    }
});

subject.subscribe({
    next( data){
        console.log('2.Emitteed Value : ', data);
    }
});

subject.subscribe({
    next( data){
        console.log('3.Emitteed Value : ', data);
    }
});

subject.subscribe({
    next( data){
        console.log('4.Emitteed Value : ', data);
    }
});

subject.next(12);
subject.next(14);