# Javascript Arrays

1. ### What will be the output of the following code?

    ```js
    (function() {
        var array = new Array('100');
        console.log(array); // Output ?
        console.log(array.length); // Output ?
    }());
    ```

    Answer:\
    ["100"] 1

2. ### What will be the output of the following code?

    ```js
    (function() {
        var array1 = [];
        var array2 = new Array(100);
        var array3 = new Array(['1',2,'3',4,5.6]);
        console.log(array1); // Output ?
        console.log(array2); // Output ?
        console.log(array3); // Output ?
        console.log(array3.length); // Output ?
    }());
    ```

    Answer:\
    [] [] [ Array[5] ] 1

3. ### What will be the output of the following code?

    ```js
    (function () {
        var array = new Array('a', 'b', 'c', 'd', 'e');
        array[10] = 'f';
        delete array[10];
        console.log(array.length); // Output ?
    }());
    ```

    Answer:\
    11

4. ### What will be the output of the following code?

    ```js
    (function(){
        var animal = ['cow','horse'];
            animal.push('cat');
            animal.push('dog','rat','goat');
            console.log(animal.length); // Output ?
    })();
    ```

    Answer:\
    6


5. ### What will be the output of the following code?

    ```js
    (function(){
        var animal = ['cow','horse'];
            animal.push('cat');
            animal.unshift('dog','rat','goat');
            console.log(animal); // Output ?
    })();
    ```

    Answer:\
    [ 'dog', 'rat', 'goat', 'cow', 'horse', 'cat' ]


6. ### What will be the output of the following code?

    ```js
    (function(){
        var array = [1,2,3,4,5];
        console.log(array.indexOf(2)); // Output ?
        console.log([{name: 'John'},{name : 'John'}].indexOf({name:'John'})); // Output ?
        console.log([[1],[2],[3],[4]].indexOf([3])); // Output ?
        console.log("abcdefgh".indexOf('e')); // Output ?
    })();
    ```

    Answer:\
    1 -1 -1 4


7. ### What will be the output of the following code?

    ```js
    (function(){
        var array = [1,2,3,4,5,1,2,3,4,5,6];
        console.log(array.indexOf(2)); // Output ?
        console.log(array.indexOf(2,3)); // Output ?
        console.log(array.indexOf(2,10)); // Output ?
    })();
    ```

    Answer:\
    1 6 -1


8. ### What will be the output of the following code?

    ```js
    (function(){
        var numbers = [2,3,4,8,9,11,13,12,16];
        var even = numbers.filter(function(element, index){
            return element % 2 === 0; 
        });
        console.log(even); // Output ?

        var containsDivisibleby3 = numbers.some(function(element, index){
            return element % 3 === 0;
        });

        console.log(containsDivisibleby3); // Output ?
    })();
    ```

    Answer:\
    [ 2, 4, 8, 12, 16 ] true


9.  ### What will be the output of the following code?

    ```js
    (function(){
        var containers = [2,0,false,"", '12', true];
        var containers = containers.filter(Boolean);
        console.log(containers); // Output ?
        var containers = containers.filter(Number);
        console.log(containers); // Output ?
        var containers = containers.filter(String);
        console.log(containers); // Output ?
        var containers = containers.filter(Object);
        console.log(containers); // Output ?
    })();
    ```

    Answer:\


10. ### What will be the output of the following code?

    ```js
    (function(){
        var list = ['foo','bar','john','ritz'];
            console.log(list.slice(1)); // Output ?
            console.log(list.slice(1,3)); // Output ?
            console.log(list.slice()); // Output ?
            console.log(list.slice(2,2)); // Output ?
            console.log(list); // Output ?
    })();
    ```

    Answer:\
    [ 'bar', 'john', 'ritz' ] [ 'bar', 'john' ] [ 'foo', 'bar', 'john', 'ritz' ] [] [ 'foo', 'bar', 'john', 'ritz' ]


11. ### What will be the output of the following code?

    ```js
    (function(){
        var list = ['foo','bar','john'];
            console.log(list.splice(1)); // Output ?
            console.log(list.splice(1,2)); // Output ?
            console.log(list); // Output ?
    })();
    ```

    Answer:\
    [ 'bar', 'john' ] [] [ 'foo' ]


12. ### What will be the output of the following code?

    ```js
    (function(){
        var arrayNumb = [2, 8, 15, 16, 23, 42];
        arrayNumb.sort();
        console.log(arrayNumb); // Output ?
    })();
    ```

    Answer:\
    [ 15, 16, 2, 23, 42, 8 ]

    Side Challenge: Sort the array in descending order.

    ```js
    (function(){
        var arrayNumb = [2, 8, 15, 16, 23, 42];
        arrayNumb.sort((i, j) => {
            return i-j; // Sorts in ascending order. ie return j-i and it will sort array in descending order
        });
        console.log(arrayNumb);
    })();
    ```

***
