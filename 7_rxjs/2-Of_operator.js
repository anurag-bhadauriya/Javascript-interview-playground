import { of } from 'rxjs';

/**
 * Creating observable using of operator using string, array of strings
 * and an object.
 */
const student1 = of(['Ram', 'Sita', 'Hanuman']);
const student2 = of('Rajesh');
const student3 = of({
    name: 'anurag', id: '123'
});

student1.subscribe(data => {
    console.log('Observable 1: ', data);
});

student2.subscribe(data => {
    console.log('Observable 2: ', data);
});

student3.subscribe(data => {
    console.log('Observable 3: ', data);
});