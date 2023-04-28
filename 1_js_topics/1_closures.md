# Javascript Closures

References: 
- https://dmitripavlutin.com/javascript-closure/
- https://javascript.plainenglish.io/grokking-closure-in-javascript-7e8194924398
- https://dev.to/midasxiv/series/2609
- https://javascript.plainenglish.io/ultimate-interview-questions-on-javascript-closures-8dd12a210677
- https://dmitripavlutin.com/javascript-closures-interview-questions/
- https://javascript.plainenglish.io/practical-usage-of-closures-in-javascript-b3203770ba2

## Questions on Closures

1. ### What is a closure in JavaScript?

    A closure is an inner function that has access to the outer function's variables and parameters.
    It allows the inner function to access and manipulate the outer function's variables, even after the outer function has returned.

2. ### Why are closures important in JavaScript?
    Closures are important in JavaScript because they allow for information hiding and encapsulation. They also allow for private variables and methods, which can be useful in certain scenarios.

3. ### Can you give an example of a closure in JavaScript?
    ```js
    function outerFunction() {
        var outerVariable = "Hello, ";
        
        function innerFunction(name) {
            console.log(outerVariable + name);
        }
        return innerFunction;
    }
    var inner = outerFunction();
    inner("John"); // Output: "Hello, John"
    ```

    In this example, innerFunction is a closure because it has access to the outerVariable defined in the outerFunction. The innerFunction is returned by the outerFunction and assigned to the inner variable. When inner is called with the argument "John", it logs the string "Hello, John" to the console.

4. ### How do you create a closure in JavaScript?
    To create a closure in JavaScript, you need to define a function inside another function and return the inner function. Here's an example:

    ```js
    function outerFunction() {
        var outerVariable = "Hello, ";
        
        function innerFunction(name) {
            console.log(outerVariable + name);
        }
        return innerFunction;
    }

    var inner = outerFunction();
    inner("John"); // Output: "Hello, John"
    ```
5. ### How do you use a closure in JavaScript?
    
    To use a closure in JavaScript, you can define a function inside another function and use the inner function to access the outer function's variables and parameters. You can also return the inner function from the outer function to make the closure available for use elsewhere in your code. Here's an example:

    ```js
    function createCounter() {
        var count = 0;
        
        function counter() {
            count++;
            console.log(count);
        }
        return counter;
    }

    var increment = createCounter();
    increment(); // Output: 1
    increment(); // Output: 2
    increment(); // Output: 3
    ```

    In this example, createCounter is a function that returns another function counter, which increments and logs the count variable every time it's called. The increment variable is assigned the counter function returned by createCounter, which can be used to increment the count variable from other parts of your code.

6. ### What will be the output of the following code?

    ```js
    function outer() {
        var x = 10;
        
        function inner() {
            console.log(x);
        }
        return inner;
    }
    var innerFunc = outer();
    innerFunc();
    ```

    Answer: The output will be 10. This is because the outer function returns the inner function, which has access to the x variable declared in the outer function's scope. When innerFunc is called, it logs the value of x, which is 10.

7. ### What will be the output of the following code?
    
    ```js
    function outer() {
        var x = 10;
        
        function inner() {
            console.log(x);
        }
        x = 20;
        return inner;
    }

    var innerFunc = outer();
    innerFunc();
    ```

    Answer: The output will be 20. This is because the inner function has access to the x variable in the outer function's scope, and that variable is assigned the value of 20 before the inner function is returned. When innerFunc is called, it logs the current value of x, which is 20.

8. ### What will be the output of the following code?
    
    ```js
    function outer() {
        var x = 10;
        
        function inner() {
            var y = 5;
            console.log(x + y);
        }
        return inner;
    }

    var innerFunc = outer();
    innerFunc();
    ```

    Answer: The output will be 15. This is because the inner function has access to both the x variable declared in the outer function's scope and the y variable declared within the inner function's scope. When innerFunc is called, it logs the sum of x and y, which is 15.

9. ### What will be the output of the following code?
    
    ```js
    function outer() {
        var x = 10;
        
        function inner() {
            var y = 5;
            console.log(x + y);
        }
        var x = 20;
        return inner;
    }

    var innerFunc = outer();
    innerFunc();
    ```

    Answer: The output will be 25. This is because the inner function has access to the x variable declared in the outer function's scope, which is reassigned the value of 20 before the inner function is returned. When innerFunc is called, it logs the sum of the current value of x and y, which is 25.

10. ### What will be the output of the following code?
    
    ```js
    function outer() {
        var x = 10;
        
        function inner() {
            var y = 5;
            console.log(x + y);
            x = 20;
        }
        return inner;
    }

    var innerFunc = outer();
    innerFunc();
    innerFunc();
    ```

    Answer: The output will be 15 and 25. This is because the inner function has access to the x variable declared in the outer function's scope, which is initially assigned the value of 10. When innerFunc is called for the first time, it logs the sum of x and y, which is 15, and then reassigns the value of x to 20. When innerFunc is called for the second time, it logs the sum of the new value of x and y, which is 25.

11. ### What will be the output of the following code?
    
    ```js
    function foo() {
        let a = 0;

        function bar(){
            console.log('Number is : ', a);
        }

        function increase(num){
            a += num;
        }

        return [bar, increase];
    }

    let val = foo();
    val[0]();
    val[1](5);
    val[0]();

    let val2 = foo();
    val2[0]();
    val2[1](5);
    val2[0]();
    ```

12. ### What will be the output of the following code?
    
    ```js
    let countEven = 0;
    const items = [1, 5, 100, 10];

    const callback = (number) => {
        if(number%2 === 0){
            countEven++;
        }
    }

    items.forEach(callback);
    console.log(countEven);
    ```

13. ### What will be the output of the following code?
    
    ```js
    (function immediateA(a) {
        return (function immediateB(b) {
            console.log(a); // What is logged?
        })(1);
    })(0);
    ```

14. ### What will be the output of the following code?
    
    ```js
    let count = 0;
    (function immediate() {
        if (count === 0) {
            let count = 1;
            console.log(count); // What is logged?
        }
        console.log(count); // What is logged?
    })();
    ```

15. ### What will be the output of the following code?
    
    ```js
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, 1000);
    }
    ```

16. ### What will be the output of the following code?
    
    ```js
    for (var i = 0; i < 3; i++) {
        setTimeout(function log() {
            console.log(i); // What is logged?
        }, 1000);
    }
    ```
    Side Challenge: 
    - How would you fix this example to log 0, 1, 2 values after passing 1 second?
    - How would you console 0, 1, 2, 3, ... 10 each after a delay of 1 second ?

17. ### What will be the output of the following code?
    
    ```js
    function createIncrement() {
        let count = 0;
        function increment() { 
            count++;
        }

        let message = `Count is ${count}`;
        function log() {
            console.log(message);
        }
        
        return [increment, log];
    }

    const [increment, log] = createIncrement();
    increment(); 
    increment(); 
    increment(); 
    log(); // What is logged?
    ```

    Side Challenge:
    - How would you fix log() function to return the message having the actual count value?

