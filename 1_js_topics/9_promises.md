# Javascript Promises

References: 
- https://in.indeed.com/career-advice/interviewing/javascript-promise-interview-questions
- https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec
- https://medium.com/frontend-canteen/10-code-challenges-to-master-promise-then-and-promise-catch-3da2bdea1d97
- https://medium.com/@nikita.malyschkin/8-async-javascript-challenges-for-senior-developers-b994f204d086
- https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

1. ### What will be the output of the following code?

    ```js
    // Promise Constructor
    console.log('start')
    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
    })
    console.log('end');
    ```

    Answer:\
    start 1 end

2. ### What will be the output of the following code?

    ```js
    // .then()
    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
        resolve(2)
    });

    promise1.then(res => {
        console.log(res)
    });

    console.log('end');
    ```

    Answer:\
    start 1 end 2

3. ### What will be the output of the following code?

    ```js
    // resolve()
    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
        resolve(2)
        console.log(3) 
    });

    promise1.then(res => {
        console.log(res)
    });

    console.log('end');
    ```

    Answer:\
    start 1 3 end 2

4. ### What will be the output of the following code?

    ```js
    // resolve() isn’t called
    console.log('start');

    const promise1 = new Promise((resolve, reject) => {
        console.log(1)
    });

    promise1.then(res => {
        console.log(2)
    });

    console.log('end');
    ```

    Answer:\
    start 1 end


5. ### What will be the output of the following code?

    ```js
    // The One That’s There to Confuse You
    console.log('start')

    const fn = () => (new Promise((resolve, reject) => {
        console.log(1);
        resolve('success');
    }));

    console.log('middle');

    fn().then(res => {
        console.log(res);
    });

    console.log('end');
    ```

    Answer:\
    start middle 1 end success


6. ### What will be the output of the following code?

    ```js
    // The One With a Fulfilling Promise
    console.log('start')

    Promise.resolve(1).then((res) => {
        console.log(res);
    });

    Promise.resolve(2).then((res) => {
        console.log(res);
    });

    console.log('end');
    ```

    Answer:\
    start end 1 2


7. ### What will be the output of the following code?

    ```js
    // setTimeout vs Promise
    console.log('start')

    setTimeout(() => {
        console.log('setTimeout');
    });

    Promise.resolve().then(() => {
        console.log('resolve');
    });

    console.log('end');
    ```

    Answer:\
    start end resolve setTimeout


8. ### What will be the output of the following code?

    ```js
    // Microtasks mix Macrotasks
    const promise = new Promise((resolve, reject) => {
        console.log(1);
        setTimeout(() => {
            console.log("timerStart");
            resolve("success");
            console.log("timerEnd");
        }, 0);
        console.log(2);
    });

    promise.then((res) => {
        console.log(res);
    });

    console.log(4);
    ```

    Answer:\
    1 2 4 timerStart timerEnd success


9. ### What will be the output of the following code?

    ```js
    // Prioritise Between Microtasks and Macrotasks
    const timer1 = setTimeout(() => {
        console.log('timer1');
        
        const promise1 = Promise.resolve().then(() => {
            console.log('promise1')
        })
    }, 0);

    const timer2 = setTimeout(() => {
        console.log('timer2')
    }, 0)
    ```

    Answer:\
    timer1 promise1 timer2


10. ### What will be the output of the following code?

    ```js
    // A Typical Interview Question
    console.log('start');

    const promise1 = Promise.resolve().then(() => {
        console.log('promise1');
        const timer2 = setTimeout(() => {
            console.log('timer2')
        }, 0)
    });

    const timer1 = setTimeout(() => {
        console.log('timer1')
        const promise2 = Promise.resolve().then(() => {
            console.log('promise2')
        });
    }, 0)

    console.log('end');
    ```

    Answer:\
    start end promise1 timer1 promise2 timer2

11. ### What will be the output of the following code?

    ```js
    const promise = new Promise((resolve, reject) => {
        resolve("success1");
        reject("fail");
        resolve("success2");
    });

    promise.then(res => {
        console.log("then: ", res);
    }).catch(err => {
        console.log("catch: ", err);
    });
    ```

    Answer:\
    then: success1
    ##### REASON : The status can only change from pending to fulfilled, or from pending to rejected.This change is irreversible. It cannot change from fulfilled to pending, nor from rejected to pending. At the same time, fulfilled cannot become rejected, and rejected cannot become fulfilled.


12. ### What will be the output of the following code?

    ```js
    const promise = new Promise((resolve, reject) => {
        reject("fail");
        resolve("success2");
    });
    promise.then(res => {
        console.log("then1: ", res);
    }).then(res => {
        console.log("then2: ", res);
    }).catch(err => {
        console.log("catch: ", err);
    }).then(res => {
        console.log("then3: ", res);
    });
    ```

    Answer:\
    catch:  fail\
    then3:  undefined

    ##### REASON: First, no matter where the catch method is placed, it can catch errors that are not caught by the upper layer. At the same time, it should be noted that the catch method will also return a new Promise object, causing the then method after it to be executed as well.

13. ### What will be the output of the following code?

    ```js
    Promise.resolve(1).then(res => {
        console.log(res);
        return 2;
    }).catch(err => {
        return 3;
    }).then(res => {
        console.log(res);
    }).then(res => {
        console.log(res);
    });
    ```

    Answer:\
    1 2 undefined\
    ##### REASON: The return value of each .then() method is a new Promise. Even though the code says return 2, what actually executes is return Promise.resolve(2).

14. ### What will be the output of the following code?

    ```js
    Promise.reject(1).then(res => {
        console.log(res);
        return 2;
    }).catch(err => {
        return 3;
    }).then(res => {
        console.log(res);
    }).then(res => {
        console.log(res);
    });
    ```

    Answer:\
    3 undefined

15. ### What will be the output of the following code?

    ```js
    const promise = new Promise((resolve, reject) => {
        resolve(1)
    });

    promise.then(res => {
        console.log('first then: ', res)
        return 2
    });

    promise.then(res => {
        console.log('second then: ', res)
        return 3
    });

    promise.then(res => {
        console.log('third then: ', res)
    });
    ```

    Answer:\
    first then: 1\
    second then: 1\
    third then: 1
    ##### REASON: Remember a steel rule: Once the state of a Promise is determined, it cannot be changed. Also in this challenge, those .then() are not chained calls, they are all calls to the promise object.

16. ### What will be the output of the following code?

    ```js
    Promise.resolve().then(() => {
        return new Error('error!!!')
    }).then(res => {
        console.log("then: ", res)
    }).catch(err => {
        console.log("catch: ", err)
    });
    ```

    Answer:\
    then:  Error: error!!!
    ##### REASON: new Error() is a normal JavaScript object, and return is a normal JavaScript keyword, so this code will work normally and will not throw an exception.

    Of course, if you want to throw an error, you can use either of the following:
    ```js
    return Promise.reject(new Error('error!!!'));
    // or
    throw new Error('error!!!')
    ```

17. ### What will be the output of the following code?

    ```js
    const promise = Promise.resolve().then(() => {
        return promise;
    });

    promise.catch(console.err);
    ```

    Answer:\
    TypeError: Chaining cycle detected for promise.\
    The value returned by .then or .catch cannot be the promise itself, otherwise, it will cause an infinite loop.

18. ### What will be the output of the following code?

    ```js
    Promise.resolve(1)
    .then(2)
    .then(Promise.resolve(3))
    .then(console.log)
    ```

    Answer:\
    1\
    The argument to .then or .catch should be a function. If the parameter is not a function, then this .then or .catch will be ignored. In this case first & seconf then will be ignored & third will be the only valid then which is taking console.log which is a value function.

***

# JavaScript Promises and Async/Await Tasks

References:
- https://www.freecodecamp.org/news/learn-promise-async-await-in-20-minutes/

### Task 1: Promise basics explained using my birthday

```js
/**
 My friend Kayo promises to make a cake for my birthday in two weeks.
 If everything goes well and Kayo doesn't get sick, we'll have a certain number of cakes.
 (Cakes are a countable in this tutorial 😆). Otherwise, if Kayo gets sick, we'll have no cakes.
 Either way, we're still going to have a party.
 */
const onMyBirthday = (isKayoSick) => {
    return new Promise( (resolve, reject) => {
        setTimeout( () => {
            if( isKayoSick){
                reject( new Error('I am Sad !'));
            } else {
                resolve(5);
            }
        }, 2000);
    });
};

const isKayoSick = true;

onMyBirthday(isKayoSick).then( res => {
    console.log(`We have ${res} cakes...`)
}).catch( err => {
    console.log(err);
}).finally( () => {
    console.log('Party !!!');
});
```
