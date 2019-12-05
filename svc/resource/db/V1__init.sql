create table course (
    id bigserial primary key ,
    name text,
    code text,
    instructor_id int,
    deleted boolean default false,
    foreign key (instructor_id) references instructor (id)
);

create type term as enum('FALL', 'SPRING', 'SUMMER', 'LATE_FALL', 'LATE_SPRING', 'LATE_SUMMER');

create table semester (
    id bigserial primary key,
    year int,
    semester term
);

create table instructor (
    id bigserial primary key,
    first_name text,
    last_name text,
    email text
);

create table location ( --NOT IN USE
    id bigserial primary key,
    name text
);

create table course_prerequisite (
    course_id bigserial,
    prerequisite_id bigserial,
    foreign key (course_id) references course (id),
    foreign key (prerequisite_id) references course (id)
);

create table course_assessment ( --NOT IN USE
    id bigserial primary key,
    peo_id bigserial --FK to peo table?
);

create table assignments (
    id bigserial primary key,
    course_id bigserial ,
    semester_id bigserial,
    name text,
    rubric bytea,
    foreign key (course_id) references course (id),
    foreign key (semester_id) references semester (id)

);

create table performance_indicators(
    id bigserial primary key,
    code text,
    description text
);

create table course_semester_pi(
    course_id bigserial,
    semester_id bigserial,
    pi_id bigserial,
    foreign key (course_id) references course (id),
    foreign key (semester_id) references semester (id),
    foreign key (pi_id) references performance_indicators (id)
);

create table course_schedule(
    course_id bigserial,
    semester_id bigserial,
    week text,
    content text,
    deliverable text, --this may point to assignment table someday?
    foreign key (course_id) references course (id),
    foreign key (semester_id) references semester (id)
);

create table class(
    course_id bigserial ,
    semester_id bigserial ,
    instructor_id bigserial,
--     location_id bigserial, use this later but for now just store as text
    location text,
    room_number int,
    start_date date,
    end_date date,
    start_time time,
    end_time time,
    catalog_data text,
    expected_knowledge text,
    program_educational_objectives text, --this will go away
    assessment_method text,
    performance_indicators text, --this will go away
    assignments text, --this will go away
    rubric bytea, --this will go away
    resources text, --this may go away?
    schedule_text text,
    grading_description text,
    foreign key (course_id) references course (id),
    foreign key (semester_id) references semester (id),
    foreign key (instructor_id) references instructor (id)
);