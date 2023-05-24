# Javascript Pass by Value & Pass by reference

Remember that objects, including arrays are passed by reference while strings, booleans and numbers are passed by value.

## Questions

1. ### What will be the output of the following code?

    ```js
    var strA = "hi there";
    var strB = strA;
    strB="bye there!";
    console.log (strA); // Output ?
    ```

2. ### What will be the output of the following code?

    ```js
    var objA = {prop1: 42};
    var objB = objA; 
    objB.prop1 = 90;
    console.log(objA); // Output ?
    ```

3. ### What will be the output of the following code?

    ```js
    var objA = {prop1: 42};
    var objB = objA;
    objB = {};
    console.log(objA); // Output ?
    ```

4. ### What will be the output of the following code?

    ```js
    var arrA = [0,1,2,3,4,5];
    var arrB = arrA;
    arrB[0]=42;
    console.log(arrA); // Output ?
    ```

5. ### What will be the output of the following code?

    ```js
    var arrA = [0,1,2,3,4,5];
    var arrB = arrA.slice();
    arrB[0]=42;
    console.log(arrA); // Output ?
    ```

6. ### What will be the output of the following code?

    ```js
    var arrA = [{prop1: "value of array A!!"},  {someProp: "also value of array A!"}, 3,4,5];
    var arrB = arrA;
    arrB[0].prop1=42;
    console.log(arrA); // Output ?
    ```

***