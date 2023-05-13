import { map, of } from 'rxjs';

/**
 * The map operators transforms or changes each emitted item, as defined by a function we provide.
 */

const mapsObs$ = of(1,2,3,4,5);
mapsObs$.pipe(
    map( item => 2*item )
).subscribe( data => {
    console.log('Transformed data: ', data);
});


/**
 * Map Operator Example 2
 */

of([1,2,3,4,5]).pipe(
    map( (items) => {
        return items.map( elem => elem*2);
    })
).subscribe( data => {
    console.log('Transformed data: ', data);
});