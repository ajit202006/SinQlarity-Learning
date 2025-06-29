-Creating employee table
    CREATE TABLE Employee(
    ID INT PRIMARY KEY AUTO_INCREMENT,
    NAME VARCHAR(30) NOT NULL,
    PHONE INT(10) NOT NULL UNIQUE,
    EMAIL VARCHAR(30) NOT NULL UNIQUE
    );

-Inserting record in employee table
    INSERT INTO Employee (NAME, PHONE, EMAIL)
    VALUES
    ('Yogesh Vaishnav', 0000000001, 'yogesh@mail.com'),
    ('Vishal Vishwakarma', 0000000002, 'chicha@mail.com'),
    ('Ajit Yadav', 0000000003, 'ppa@mail.com'),
    ('Ashish Yadav', 0000000004, 'baba@mail.com'),
    ('Tanvi Thakur', 0000000005, 'tanvi@mail.com'),
    ('Sam', 0000000006, 'sam@mail.com'),
    ('Ron', 0000000007, 'ron@mail.com'),
    ('Sara', 0000000008, 'sara@mail.com'),
    ('Zara', 0000000009, 'zara@mail.com'),
    ('Yoji', 0000000010, 'yoji@mail.com');

-Fetching on specific condition
   => select * from employee where name="Sam"; // selecting record where name is "Sam"
   => select * from employee where name="Yoji" and phone=10; // selecting when both given conditions are true
   => select * from employee where phone=5 or phone=10; // selecting when any of the given conditions are true
   => select * from employee where phone in (3,6) // selecting where value of phone is 3 or 6
   => select name,email from employee ; // to select just name and email of records

-Using alias
   => select name as Employee_Name , email as Email_address from employee;
      selecting field and getting output field names as we want

-Joins
 -Inserting record in teacher and class table
    => insert into teacher(teacher_name,mobile) VALUES ("Teacher 2","3455667"),("Teacher 3","333245267"),("Teacher 4","357678567");
    => insert into class(class_name,teacher_id) VALUES ("Class 5",5),("Class 6",3),("Class 7",4);
 -Joining these two tables
    select * 
    from teacher t
    inner join class cl
    on t.id=cl.teacher_id ;

    - getting specified records after join
        select teacher_name,class_name
        from teacher t
        inner join class cl
        on t.id=cl.teacher_id ;