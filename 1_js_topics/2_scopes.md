# Javascript Scopes

References: 
- https://dev.to/midasxiv/scopes-hoisting-closures-tricky-questions-4c85

## Questions on Scopes

1. ### What will be the output of the following code?
    
    ```js
    var variable = 10;
    (() => {
        console.log(variable); // Output ?
        var variable = 20;
        console.log(variable); // Output ?
    })();
    ```

2. ### What will be the output of the following code?
    
    ```js
    var variable = 10;
    (() => {
        console.log(variable); // Output ?
        variable = 20;
        console.log(variable); // Output ?
    })();
    ```

3. ### What will be the output of the following code?
    
    ```js
    var variable = 10;

    (() => {
        console.log(variable); // Output ?
        variable = 20;
        console.log(variable); // Output ?
    })();

    var variable = 30;
    console.log(variable); // Output ?
    ```
    
4. ### What will be the output of the following code?
    
    ```js
    var variable = 10;
    (() => {
        console.log(variable); // Output ?
        var variable = 20;
        console.log(variable); // Output ?
    })();

    console.log(variable); // Output ?
    var variable = 30;
    ```
    
5. ### What will be the output of the following code?
    
    ```js
    var variable = 10;
    (() => {
        console.log(variable); // Output ?
        variable = 20;
        console.log(variable); // Output ?
    })();

    console.log(variable); // Output ?
    var variable = 30;
    ```
    
6. ### What will be the output of the following code?
    
    ```js
    var variable = 10;
    (() => {
        variable_3 = 35;
        console.log(variable_3); // Output ?
        var variable_3 = 45;
        variable_2 = 15;
        console.log(variable); // Output ?
    })();

    console.log(variable_2); // Output ?
    console.log(variable_3); // Output ?
    var variable = 30;
    ```
    