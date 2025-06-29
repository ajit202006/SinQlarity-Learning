-Union
    => select teacher_name from teacher UNION select class_name from class UNION select full_name from salary;
    SHOWS the value of the field given from all the tables, merged in single table

-group by
    => select * from salary GROUP by salary;
     groups the records on the basis of salary and shows one member of each group

- group by with having
    => select COUNT(*) from salary GROUP by salary having salary >40000;
    shows count of people having same salary in different groups whose salary is greater than 40000
    having is used when we need to check a condition for an aggregate function

-insert with select
    => insert into teacher (teacher_name) select full_name from  salary;
    selecting name values from salary table and inserting them into teachers table