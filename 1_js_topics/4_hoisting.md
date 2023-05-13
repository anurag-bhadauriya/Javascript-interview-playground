# Javascript Hoisting

References: 
- https://eishta.medium.com/javascript-tricky-questions-hoisting-6df66b07334a
- https://www.freecodecamp.org/news/function-hoisting-hoisting-interview-questions-b6f91dbc2be8/

## Questions on Scopes

1. ### What will be the output of the following code?

    ```js
    console.log(employeeId); // Output ?
    ```

2. ### What will be the output of the following code?

    ```js
    console.log(employeeId); // Output ?
    var employeeId = '19000';
    ```

3. ### What will be the output of the following code?

    ```js
    var employeeId = '1234abe';
    (function(){
        console.log(employeeId); // Output ?
        var employeeId = '122345';
    })();
    ```

4. ### What will be the output of the following code?

    ```js
    var employeeId = '1234abe';
    (function() {
        console.log(employeeId); // Output ?
        var employeeId = '122345';
        (function() {
            var employeeId = 'abc1234';
        }());
    }());
    ```

5. ### What will be the output of the following code?

    ```js
    (function() {
        console.log(typeof displayFunc);
        var displayFunc = function(){
            console.log("Hi I am inside displayFunc"); // Output ?
        }
    }());
    ```

6. ### What will be the output of the following code?

    ```js
    var employeeId = 'abc123';
    function foo(){
        employeeId = '123bcd';
        return;
    }
    foo();
    console.log(employeeId); // Output ?
    ```

7. ### What will be the output of the following code?

    ```js
    var employeeId = 'abc123';

    function foo() {
        employeeId = '123bcd';
        return;

        function employeeId() {}
    }
    foo();
    console.log(employeeId); // Output ?
    ```

8. ### What will be the output of the following code?

    ```js
    var employeeId = 'abc123';

    function foo() {
        employeeId();
        return;

        function employeeId() {
            console.log(typeof employeeId); // Output ?
        }
    }
    foo();
    ```

9. ### What will be the output of the following code?

    ```js
    function foo() {
        employeeId();
        var product = 'Car'; 
        return;

        function employeeId() {
            console.log(product); // Output ?
        }
    }
    foo();
    ```

10. ### What will be the output of the following code?

    ```js
    (function foo() {
        bar();

        function bar() {
            abc();
            console.log(typeof abc); // Output ?
        }

        function abc() {
            console.log(typeof bar); // Output ?
        }
    }());
    ```

11. ### What will be the output of the following code?

    ```js
    function foo() {
        
        function bar() {
            return 5
        }
        return bar()
        
        function bar() {
            return 10
        }
    }
    console.log(foo()); // Output ?
    ```

12. ### What will be the output of the following code?

    ```js
    function printA() {  
        console.log("Value of a after declaration", a); // Output ?
    } 
    console.log("Value of a before declaration: ", a); // Output ?
    var a = 1;
    printA();
    ```

13. ### What will be the output of the following code?

    ```js
    function printA() { 
        a = 1;
    } 
    printA();
    console.log(a); // Output ?
    ```
    NOTE: a gets space in global scope.
    

14. ### What will be the output of the following code?

    ```js
    function printA() { 
        var a = 1;
    }
    printA();
    console.log(a); // Output ?
    ```
    NOTE: a is enclosed in function scope.


15. ### What will be the output of the following code?

    ```js
    function a() {
        var b = function () {
            return 3;
        };
        return b();
        var b = function () {
            return 8;
        };
    }
    alert(a()); // Output ?
    ```

    Answer: 3\
    Why ? => b is function expression and is assigned the function during execution phase , before assigning the second value to b, the function a returns b()


16. ### What will be the output of the following code?

    ```js
    function a() {
        function b() {
            return 3;
        }
        return b();
        function b() {
            return 8;
        }
    }
    alert(a()); // Output ?
    ```

    Answer: 8\
    Why? => b is function declaration and is assigned the definition during compilation phase and second definition overrides the first one


17. ### Preference given if a function and variable has same name.

    ```js
    function foo() {
        var bar = "I'm a bar variable". // 2nd hoisting
        function bar() {                // function is hoisted first
            return "I'm a bar function"
        }
        return bar();
    }
    console.log(foo()); // Output ?
    ```

    Answer: TypeError: bar is not a function\
    Because the function dec. is hoisted first and then overridden by the var i.e. now b() gives the type error


18. ### Precedence of function expressions and function declaration

    ```js
    greeting()
    var greeting = function () {
        console.log('Good morning'); // Output ?
    }
    greeting();
    function greeting() {
        console.log('Good evening'); // Output ?
    }
    greeting();
    ```

    Answer: \
    Good evening\
    Good morning\
    Good morning


19. ### What will be the output of the following code?

    ```js
    var x = 'foo';
    (function() {
        console.log('x: ' + x); // Output ?
        var x = 'bar'
        console.log('x: ' + x); // Output ?
    })();
    ```


20. ### What will be the output of the following code?

    ```js
    console.log('bar:', bar); // Output ?
    bar = 15;
    var foo = 1;
    console.log("foo:", foo, "bar:", bar); // Output ?
    var bar;
    ```


21. ### What will be the output of the following code?

    ```js
    var v1 = 10;
    (function(){
        console.log(v1); // Output ?
        v1 = 20;
        console.log(v1); // Output ?
        
    })();
    console.log(v1); // Output ?
    var v1 = 30;
    ```

22. ### What will be the output of the following code?

    ```js
    var v1 = 10;
    (function(){
        console.log(v1); // Output ?
        var v1 = 20;
        console.log(v1); // Output ?
        
    })();
    console.log(v1); // Output ?
    var v1 = 30;
    ```


23. ### What will be the output of the following code?

    ```js
    var v1 = 10;
    (function(){ 
        v3 = 35;
        console.log(v3);  // Output ?
        var v3 = 45;
        v2 = 25;
        console.log(v1);  // Output ?
    })();
    console.log(v2); // Output ?
    console.log(v3); // Output ?
    var v1 = 30;
    ```

    Answer:\
    35, 10, 25, ReferenceError: v3 is not defined

24. ### What will be the output of the following code?

    ```js
    (function () {
        try {
            throw new Error();
        } catch (x) {
            var x = 1, y = 2;
            console.log(x); // Output ?
        }
        console.log(x); // Output ?
        console.log(y); // Output ?
    })();
    ```

    This code after hoisting looks like :

    ```js
    (function () {
        var x, y; // outer and hoisted
        try {
            throw new Error();
        } catch (x /* inner */) {
            x = 1; // inner x, not the outer one
            y = 2; // there is only one y, which is in the outer scope         
            console.log(x /* inner */);
        }
        console.log(x);
        console.log(y);
    })();
    ```

    Answer:\
    1 undefined 2

***