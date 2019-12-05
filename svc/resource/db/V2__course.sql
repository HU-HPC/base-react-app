alter table course add instructor_id int;
alter table course add constraint instructor_id foreign key (instructor_id) references instructor (id) on delete cascade ;