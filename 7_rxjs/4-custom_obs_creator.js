import { Observable } from 'rxjs';

function customCreationOperator() {
  return new Observable(subscriber => {
    // emit values over time
    subscriber.next('value 1');
    setTimeout(() => {
      subscriber.next('value 2');
    }, 2000);
    setTimeout(() => {
      subscriber.next('value 3');
      subscriber.complete();
    }, 4000);
  });
}

// subscribe to the custom observable
customCreationOperator().subscribe(value => console.log(value));
