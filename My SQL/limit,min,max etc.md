-Creating a salary table and inserting record into it
    CREATE TABLE SALARY (
    EMP_ID INT NOT NULL,
    FULL_NAME VARCHAR(50) NOT NULL,
    PROJECT VARCHAR(50) NOT NULL,
    SALARY INT NOT NULL
    );
    INSERT INTO SALARY VALUES (100,"JOHN SMITH","P1",20000),
    (101,"ANTHONY WILLIAMS","P2",40000),
    (102,"ETHAN CARTER","P3",50000),
    (103,"MATHEW MERCER","P3",50000),
    (104,"NOLAN NORTH","P2",40000),
    (105,"ASHLEY JENKINS","P4",15000),
    (106,"AMY MADISON","P1",20000),
    (107,"EMILY SIMPSONS","P5",70000),
    (108,"BETTY WHITE","P5",55000);


-limit clause
    => select * from salary where salary<=50000 limit 4;
    shows top 4 records where salary is 50000 or greater

-max 
    => select max(salary) from salary;
    shows record where salary is maximum

-min 
    => select min(salary) from salary;
    shows record where salary is minimum

-count 
    => select count(*) from salary;
    shows number of records in the table 

-sum 
    => select sum(salary) as Total_salary from salary;
    shows sum of all the salary field value from all records

-avg 
    => select avg(salary) as Average_Salary from salary;
    shows average of all the salary value from all records.
    average is shown in floating point even if it is an integer

-like operator => '%' = multiple characters , '_' = single character 
    => select * from salary where full_name like "A%S";
       shows records where full_name starts with A and ends with S having any number of characters in between
    => select * from salary where full_name like "%A%";
       shows records where full_name has A somewhere in it
    => select * from salary where full_name like "A_S";
       shows records where full_name starts with A and ends with S having single characters in between

-in operator
    => select * from salary where emp_id in (101,102,103);
       shows record where emp_id is 101 or 102 or 103

-getting second highest salary
    => select max(salary) from salary where salary <> (select max(salary) from salary); 

-between operator
    => select salary from salary where salary between 20000 and 50000; 
       shows record where salary is 20000, 50000 or something between them