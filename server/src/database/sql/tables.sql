drop table if exists Users;
create table Users (
	id int not null auto_increment primary key,
    username varchar(255) not null,
    avatar text
);

drop table if exists Chirps;
create table Chirps (
	id int not null auto_increment primary key,
    userid int not null,
    message varchar(280) not null
);