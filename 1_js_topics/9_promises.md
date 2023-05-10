# Javascript Promises

References: 
- https://in.indeed.com/career-advice/interviewing/javascript-promise-interview-questions
- https://betterprogramming.pub/10-javascript-promise-challenges-before-you-start-an-interview-c9af8d4144ec


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
