# Javascript Call/Apply/Bind

1. ### What will be the output of the following code?

    ```js
    (function() {
        var greet = 'Hello World';
        var toGreet = [].filter.call(greet, function(element, index) {
            return index > 5;
        });
        console.log(toGreet);
    }());
    ```

    Answer:\
    [ 'W', 'o', 'r', 'l', 'd' ]

2. ### What will be the output of the following code?

    ```js
    (function() {
        var fooAccount = {
            name: 'John',
            amount: 4000,
            deductAmount: function(amount) {
                this.amount -= amount;
                return 'Total amount left in account: ' + this.amount;
            }
        };
        var barAccount = {
            name: 'John',
            amount: 6000
        };
        var withdrawAmountBy = function(totalAmount) {
            return fooAccount.deductAmount.bind(barAccount, totalAmount);
        };
        console.log(withdrawAmountBy(400)());
        console.log(withdrawAmountBy(300)());
    }());
    ```

    Answer:\
    Total amount left in account: 5600 Total amount left in account: 5300

3. ### What will be the output of the following code?

    ```js
    (function() {
        var fooAccount = {
            name: 'John',
            amount: 4000,
            deductAmount: function(amount) {
                this.amount -= amount;
                return this.amount;
            }
        };
        var barAccount = {
            name: 'John',
            amount: 6000
        };
        var withdrawAmountBy = function(totalAmount) {
            return fooAccount.deductAmount.apply(barAccount, [totalAmount]);
        };
        console.log(withdrawAmountBy(400));
        console.log(withdrawAmountBy(300));
        console.log(withdrawAmountBy(200));
    }());
    ```

    Answer:\
    5600 5300 5100

4. ### What will be the output of the following code?

    ```js
    (function() {
        var fooAccount = {
            name: 'John',
            amount: 6000,
            deductAmount: function(amount) {
                this.amount -= amount;
                return this.amount;
            }
        };
        var barAccount = {
            name: 'John',
            amount: 4000
        };
        var withdrawAmountBy = function(totalAmount) {
            return fooAccount.deductAmount.call(barAccount, totalAmount);
        };
        console.log(withdrawAmountBy(400));
        console.log(withdrawAmountBy(300));
        console.log(withdrawAmountBy(200));
    }());
    ```

    Answer:\
    3600 3300 3100

5. ### What will be the output of the following code?

    ```js
    (function greetNewCustomer() {
        console.log('Hello ' + this.name);
    }.bind({
        name: 'John'
    })());
    ```

    Answer:\
    'Hello John'

***