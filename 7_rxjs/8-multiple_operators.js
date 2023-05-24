import { Observable, filter, map, pipe, tap } from 'rxjs';

/**
 * Pipes in below examples are used along with observable
 */

const obs$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);
    subscriber.complete();
}).pipe(
    tap( data => console.log('1. Original data: ', data)),
    filter( elem => elem > 2),
    tap( data => console.log('2. Filtered data: ', data)),
    map( elem => elem*2),
    tap( data => console.log('3. Mapped data: ', data))
);

obs$.subscribe(data => {
    console.log('Subscribed data: ', data);
});

console.log('=========================STANDALONE PIPE RESULT ================================================');
/**
 * Standalone pipe can be used as below
 */

const customPipe = pipe(
    tap( data => console.log('1. Original data: ', data)),
    filter( elem => elem > 2),
    tap( data => console.log('2. Filtered data: ', data)),
    map( elem => elem*2),
    tap( data => console.log('3. Mapped data: ', data))
);

const obs2$ = new Observable((subscriber) => {
    subscriber.next(1);
    subscriber.next(2);
    subscriber.next(3);
    subscriber.next(4);
    subscriber.next(5);
    subscriber.complete();
});

customPipe(obs2$).subscribe( data => {
    console.log('Final Data : ', data);
});
