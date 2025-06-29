-Created teachers table in training1 database=>

create database training1;
use training1;
create table teachers(
    id int(11) primary key AUTO_INCREMENT,
    teacher_name varchar(50) not null,
    mobile varchar(13) not null
);


-Creating a classes table

use training1;
create table classes(
    id int(11) AUTO_INCREMENT,
    class_name varchar(10) not null,
    teacher_id int(11) ,
    PRIMARY KEY(id),
    FOREIGN KEY(teacher_id) REFERENCES teachers(id)
);



-Changing column name of teachers table from 'mobile' to 'phone_num'

use training1;
alter table teachers change mobile phone_num varchar(13) not null;

-Adding a new column to teachers table

use training1;
alter table teachers add class_id int(11) not null; 

- Adding a foreign key using alter

use training1;
alter table teachers add FOREIGN KEY (class_id) REFERENCES classes(id); 

- Delete a table teacher123
 
use training1;
drop table teachers123;
