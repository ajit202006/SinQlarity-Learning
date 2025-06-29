-Creating a studentinfo table and inserting value in it
    CREATE TABLE studentinfo
    ( Roll_no INT,
    NAME VARCHAR(25),
    Address VARCHAR(20),
    CONTACTNO int NOT NULL,
    Age INT ); 
    INSERT INTO studentinfo
    VALUES (7,'ROHIT','GHAZIABAD',9193458625,18),
    (4,'DEEP','RAMNAGAR',9193458546,18),
    (1,'HARSH','DELHI',9193342625,18),
    (8,'NIRAJ','ALIPUR',9193678625,19),
    (5,'SAPTARHI','KOLKATA',9193789625,19),
    (2,'PRATIK','BIHAR',9193457825,19),
    (6,'DHANRAJ','BARABAJAR',9193358625,20),
    (3,'RIYANKA','SILIGURI',9193218625,20);

-where clause
    SELECT * from studentinfo where age=19;
    choosing records where age is 19

-where with and
    SELECT * from studentinfo where age=19 and roll_no=2;
    choosing records where age is 19 and rollno is 2

-where with or
    SELECT * from studentinfo where age=19 or roll_no=6;
    choosing all records where age is 19 or rollno is 6

-where with not
    SELECT * from studentinfo where age <> 18;
    choosing all records where age is not 18

-where with not and order by clause
    SELECT * from studentinfo where age <> 18 order by roll_no ASC;
    choosing all records where age is not 18 and records are sorted in increasing order of roll no