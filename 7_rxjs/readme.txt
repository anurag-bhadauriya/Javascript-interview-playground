1. What is Reactive programming ?
    Way of building application where our app will react to changes & handle data streams rather than
    we writing each handle separately.

2. What is RxJS ?
    A library for composing asynchronous and event based programs by using observable sequences.
    Or library which helps us in making async calls & implement the callback mechanisms easily using observables.

3. RxJS consists of three main things:
    - observables
    - satellite data types( ie. observers, schedulers, subjects etc. )
    - operators ( Array methods like map, filter, reduce etc)

4. Observable ( emits data over a period of time )
    It is a data stream which updates the latest value to various areas of apps.

    - Subscriber: Will listen to the observable for data change/updates.

5. Operators ( Its a pure function )
    - An operator taks an observable as input and output will also be an observable.
    Two types of operators:
        1. Pipeable operator
        2. Creational operator ( of, from etc. )