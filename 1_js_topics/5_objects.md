# Javascript Objects

1. ### What will be the output of the following code?

    ```js
    (function() {
        'use strict';

        var person = {
            name: 'John'
        };
        person.salary = '10000$';
        person['country'] = 'USA';

        Object.defineProperty(person, 'phoneNo', {
            value: '8888888888',
            enumerable: true
        })

        console.log(Object.keys(person)); // Output ?
    })();
    ```

    Answer:\
    ["name", "salary", "country", "phoneNo"]

2. ### What will be the output of the following code?

    ```js
    (function() {
        'use strict';

        var person = {
            name: 'John'
        };
        person.salary = '10000$';
        person['country'] = 'USA';

        Object.defineProperty(person, 'phoneNo', {
            value: '8888888888',
            enumerable: false
        })

        console.log(Object.keys(person)); // Output ?
    })();
    ```

    Answer:\
    ["name", "salary", "country"]

3. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = {
            foo: 'foo',
            bar: 'bar'
        };
        var objB = {
            foo: 'foo',
            bar: 'bar'
        };
        console.log(objA == objB); // Output ?
        console.log(objA === objB); // Output ?
    }());
    ```

    Answer: \
    false false

4. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = new Object({foo: "foo"});
        var objB = new Object({foo: "foo"});
        console.log(objA == objB); // Output ?
        console.log(objA === objB); // Output ?
    }());
    ```

    Answer: \
    false false

5. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = Object.create({
            foo: 'foo'
        });
        var objB = Object.create({
            foo: 'foo'
        });
        console.log(objA == objB); // Output ?
        console.log(objA === objB); // Output ?
    }());
    ```

    Answer: \
    false false

6. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = Object.create({
            foo: 'foo'
        });
        var objB = Object.create(objA);
        console.log(objA == objB); // Output ?
        console.log(objA === objB); // Output ?
    }());
    ```

    Answer: \
    false false

7. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = Object.create({
            foo: 'foo'
        });
        var objB = Object.create(objA);
        console.log(objA.toString() == objB.toString()); // Output ?
        console.log(objA.toString() === objB.toString()); // Output ?
    }());
    ```

    Answer: \
    true true

8. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = Object.create({
            foo: 'foo'
        });
        var objB = objA;
        console.log(objA == objB); // Output ?
        console.log(objA === objB); // Output ?
        console.log(objA.toString() == objB.toString()); // Output ?
        console.log(objA.toString() === objB.toString()); // Output ?
    }());
    ```

    Answer: \
    true true true true

9. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = Object.create({
            foo: 'foo'
        });
        var objB = objA;
        objB.foo = 'bar';
        console.log(objA.foo); // Output ?
        console.log(objB.foo); // Output ?
    }());
    ```

    Answer: \
    bar bar

10. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = Object.create({
            foo: 'foo'
        });
        var objB = objA;
        objB.foo = 'bar';

        delete objA.foo;
        console.log(objA.foo); // Output ?
        console.log(objB.foo); // Output ?
    }());
    ```

    Answer: \
    foo foo

11. ### What will be the output of the following code?

    ```js
    (function() {
        var objA = {
            foo: 'foo'
        };
        var objB = objA;
        objB.foo = 'bar';

        delete objA.foo;
        console.log(objA.foo); // Output ?
        console.log(objB.foo); // Output ?
    }());
    ```
    Answer: \
    undefined undefined

***