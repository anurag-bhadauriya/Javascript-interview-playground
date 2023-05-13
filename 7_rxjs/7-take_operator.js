import { take, of } from 'rxjs';

/**
 * take() emites a specified number of item.
 * You can use take for taking a specified number of items and limiting unlimited observables. 
 */

of(1,2,3,4,5).pipe(
    take(3)
).subscribe( data => {
    console.log('Transformed data: ', data);
});