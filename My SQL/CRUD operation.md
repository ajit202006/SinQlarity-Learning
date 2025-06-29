----------------CREATE OPERATION ---------------

/*Command to create a database with name "training"*/
create database training;


use training; /*Use command is used to access a database*/
/* Create table is used to create a table inside a data base*/

create table users(id int,name varchar(255) , email varchar(255));
/*Note : - Data base should be accessed using use command before creating any table into it.*/


-------------------INSERT OPERATION ---------------------

/* Inserting values to a table :- */
use training;/* use database where the table is present*/

 /*Command to insert data into the table*/
insert into users VALUES  
(101, "person1","email1@gmail.com"),
(102, "person2","email2@gmail.com"),
(103, "person3","email3@gmail.com");
/* here VALUES is used to insert multiple records but we can also use VALUE for one record*/
/* Note :- values inserted will be corresponding to their order in the table means
		   first value 101 will be stored in id column in users and second value
           person1 will be stored in the name column*/



-------------------RETRIEVE  OPERATION ---------------------

/*Retrieving Data from a table in a database*/
use training;/*First of all use the database where table is present*/

select * from users;
/*'Select' is used to choose specific record*/
/*  '*'  is used to denote all records*/
/*  'from'  is used to tell from where the records should be fetched*/


-------------------UPDATE  OPERATION ---------------------

/* Update data present in a table in a database*/
use training;/*First of all use the database where table is present*/

update users set name="Updated Person" where id=101;
/*
--> update is used to modified an existing record
--> set is used to specify column that you need to change and value that is being assigned
--> where is used to check for given condition to specify records that need change

for ex:- above query will update the value in the name column in users table for record on which id is 101
*/

-------------------DELETE  OPERATION ---------------------

/* Update data present in a table in a database*/
use training; /*First of all use the database where table is present*/;

DELETE FROM users  where id=101;
/* DELETE is used to delete an existing record*/
/* from is used to specify table from where to delete*/
/* where is used to check for given condition to specify records that are change*/

/*for ex:- above query will delete the record in users table on which id is 101*/
