- Creating a record

     * INSERT INTO teacher (teacher_name,mobile) values("teacher1","1111");

     * INSERT INTO class (id,class_name,teacher_id) values(4,"Class 4",2);

- Retrieving a record

     * SELECT * from teacher;

- Update a record

     * update teacher set mobile="2222" ;

     * update class set class_name = "Class 3" where id =3;

- Delete a record

     * DELETE FROM teacher;

     * DELETE removes the record from the table but cannot reset the auto increment
     
     * truncate table teacher; 

     * Also resets the table after deleting all values


