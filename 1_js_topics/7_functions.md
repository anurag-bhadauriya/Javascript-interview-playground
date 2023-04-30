# Javascript Functions

1. ### What will be the output of the following code?

    ```js
    function funcA(){
        console.log("funcA ", this);
        (function innerFuncA1(){
            console.log("innerFunc1", this);
            (function innerFunA11(){
                console.log("innerFunA11", this);
            })();
        })();
    }
        
    console.log(funcA()); // Output ?
    ```

    Answer:\
    funcA Window {...} innerFunc1 Window {...} innerFunA11 Window {...}

2. ### What will be the output of the following code?

    ```js
    var obj = {
        message: "Hello",
        innerMessage: !(function() {
            console.log(this.message);
        })()
    };
        
    console.log(obj.innerMessage); // Output ?
    ```

    Answer:\
    undefined true

3. ### What will be the output of the following code?

    ```js
    var obj = {
        message: "Hello",
        innerMessage: function() {
            return this.message;
        }
    };
        
    console.log(obj.innerMessage()); // Output ?
    ```

    Answer:\
    Hello

4. ### What will be the output of the following code?

    ```js
    var obj = {
        message: 'Hello',
        innerMessage: function () {
            (function () {
                console.log(this.message); // Output ?
            }());
        }
    };
    console.log(obj.innerMessage()); // Output ?
    ```

    Answer:\
    undefined undefined

5. ### What will be the output of the following code?

    ```js
    var obj = {
        message: 'Hello',
        innerMessage: function () {
            var self = this;
            (function () {
            console.log(self.message);  // Output ?
            }());
        }
    };
    console.log(obj.innerMessage()); // Output ?
    ```

    Answer:\
    Hello undefined

6. ### What will be the output of the following code?

    ```js
    function myFunc(){
        console.log(this.message); // Output ?
    }
    myFunc.message = "Hi John";
        
    console.log(myFunc()); // Output ?
    ```

    Answer:\
    undefined

7. ### What will be the output of the following code?

    ```js
    function myFunc(){
        console.log(myFunc.message); // Output ?
    }
    myFunc.message = "Hi John";
        
    console.log(myFunc()); // Output ?
    ```

    Answer:\
    "Hi John"

8. ### What will be the output of the following code?

    ```js
    function myFunc() {
        myFunc.message = 'Hi John';
        console.log(myFunc.message); // Output ?
    }
    console.log(myFunc()); // Output ?
    ```

    Answer:\
    'Hi John'

9. ### What will be the output of the following code?

    ```js
    function myFunc(param1,param2) {
        console.log(myFunc.length); // Output ?
    }
    console.log(myFunc()); // Output ?
    console.log(myFunc("a","b")); // Output ?
    console.log(myFunc("a","b","c","d")); // Output ?
    ```

    Answer:\
    2 2 2

10. ### What will be the output of the following code?

    ```js
    function myFunc() {
        console.log(arguments.length);  // Output ?
    }
    console.log(myFunc());  // Output ?
    console.log(myFunc("a","b"));  // Output ?
    console.log(myFunc("a","b","c","d"));  // Output ?
    ```

    Answer:\
    0 2 4

***