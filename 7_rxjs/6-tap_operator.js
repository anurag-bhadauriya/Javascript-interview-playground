import { tap, of } from 'rxjs';

/**
 * tap() Taps into the emission without affecting the items You can use tap for debugging, or performing actions outside of the flow of data (side effects). 
 * You will want tap as your best friend as you learn RxJS and should be the first thing you add to your pipeline if you are not getting the results you expect.
 */

of(1,2,3,4,5).pipe(
    tap( item => console.log('Tapped data: ', item) )
).subscribe( data => {
    console.log('Transformed data: ', data);
});