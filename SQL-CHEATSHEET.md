## SQL Questions

### References: 
- https://artoftesting.com/sql-queries-for-interview
- https://github.com/kansiris/SQL-interview-questions
- https://github.com/learning-zone/sql-basics
- https://github.com/Aafreen29/SQL-Interview-Prep-Question/blob/master/queries.sql

***

- ***Employee***: [ employee_id (unique identifier for each employee), employee_name ]
- ***Product***: [ product_id (unique identifier for each product), product_name ]
- ***Sales***: [ sale_id (unique identifier for each sale), employee_id (foreign key to Employee table), product_id (foreign key to Product table), amount (amount of the sale), sales_date (date of the sale) ]

***

1. Write a SQL query to find the second highest salary from an Employee table. 

    ```sql
    SELECT MAX(salary) FROM Employee 
    WHERE salary NOT IN ( SELECT MAX(salary) FROM Employee );
    ```

2. Write a SQL query to find the nth highest salary from an Employee table.

    ```sql
    SELECT salary FROM Employee 
    GROUP BY salary ORDER BY salary DESC LIMIT n-1,1;
    ```

3. Write a SQL query to find the employees who have not sold any product.3

    ```sql
    SELECT Employee.employee_id, Employee.employee_name
    FROM Employee
    LEFT JOIN Sales
    ON Employee.employee_id = Sales.employee_id
    WHERE Sales.employee_id IS NULL;
    ```

4. Write a SQL query to find the duplicate records in a table.
    ```sql
    SELECT column1, column2, column3, COUNT(*) AS duplicates
    FROM table_name
    GROUP BY column1, column2, column3
    HAVING COUNT(*) > 1;
    ```

5. Write a SQL query to find the third highest salary without using the LIMIT clause.
    
    ```sql
    SELECT salary
    FROM Employee
    WHERE 3 = (
        SELECT COUNT(DISTINCT salary)
        FROM Employee
        WHERE salary > e.salary
    )
    ```

6. Write a SQL query to find the names of employees who have joined before their managers.
    
    ```sql
    SELECT e.employee_name, e.join_date
    FROM Employee e
    JOIN Employee m ON e.manager_id = m.employee_id
    WHERE e.join_date < m.join_date;
    ```

7. Write a SQL query to find the number of products sold by each employee.
    
    ```sql
    SELECT Employee.employee_id, Employee.employee_name, COUNT(*) AS total_sales
    FROM Employee
    JOIN Sales
    ON Employee.employee_id = Sales.employee_id
    GROUP BY Employee.employee_id, Employee.employee_name;
    ```

8. Write a SQL query to find the top 3 most selling products.
    
    ```sql
    SELECT Product.product_name, COUNT(*) AS total_sales
    FROM Product
    JOIN Sales
    ON Product.product_id = Sales.product_id
    GROUP BY Product.product_name
    ORDER BY total_sales DESC
    LIMIT 3;
    ```

9.  Write a SQL query to find the names of employees who have not made any sales.
    
    ```sql
    SELECT Employee.employee_id, Employee.employee_name
    FROM Employee
    LEFT JOIN Sales
    ON Employee.employee_id = Sales.employee_id
    WHERE Sales.employee_id IS NULL;
    ```

10. Write a SQL query to find the names of employees who have made sales of more than $10,000 in a single day.
    
    ```sql
    SELECT Employee.employee_name, Sales.sales_date, SUM(Sales.amount) AS total_sales
    FROM Employee
    JOIN Sales
    ON Employee.employee_id = Sales.employee_id
    GROUP BY Employee.employee_name, Sales.sales_date
    HAVING SUM(Sales.amount) > 10000;
    ```

***

### ACID Properties:

- ***Atomicity:*** This property ensures that a transaction is treated as a single unit of work, which is either completely done or not done at all. If any part of the transaction fails, the entire transaction must be rolled back to the previous state.

    ```
    For example, suppose a bank transfer transaction occurs between two accounts A and B. If the transfer transaction fails for any reason, the entire transaction is rolled back, and the balances of both accounts remain unchanged.
    ```

- ***Consistency:*** This property ensures that the data in the database remains consistent before and after the transaction. It requires that the data should be valid and follow all the defined rules and constraints.

    ```
    For example, consider a database that stores information about employees, and the salary of every employee should be greater than or equal to the minimum wage. If an employee's salary is updated through a transaction, and the updated salary is less than the minimum wage, the transaction should be aborted, and the original data should be maintained.
    ```

- ***Isolation:*** This property ensures that concurrent transactions do not interfere with each other. Each transaction should operate independently, and the effect of one transaction should not be visible to the other transaction until it is committed.

    ```
    For example, suppose two transactions occur simultaneously, one that transfers money from account A to account B, and the other that withdraws money from account A. Isolation ensures that the withdrawal transaction will not interfere with the transfer transaction, and the transfer transaction will commit successfully without errors.
    ```

- ***Durability:*** This property ensures that once a transaction is committed, its effects should be permanent, even if there is a system failure. The data should be stored in a persistent storage medium, and it should be able to recover the data in the event of a system failure.

    ```
    For example, suppose a transaction commits that updates a customer's address. Even if there is a system failure after the transaction is committed, the updated address should be permanently stored, and the system should be able to recover the address data.
    ```

***