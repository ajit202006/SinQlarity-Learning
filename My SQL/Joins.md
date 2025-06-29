-right join
select class_name,teacher_name
    from class cl
    right join teacher t
    on cl.teacher_id =t.id;

-left join
select class_name,teacher_name
    from class cl
    left join teacher t
    on cl.teacher_id =t.id;
    
-inner join
select class_name,teacher_name
    from class cl
    inner join teacher t
    on cl.teacher_id =t.id;