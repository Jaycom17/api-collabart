create database collabart;

use collabart;

create table users (
    id int primary key auto_increment,
    username varchar(255) not null,
    password varchar(255) not null,
    email varchar(255) not null
);

create table projects (
    id int primary key auto_increment,
    name varchar(255) not null,
    user_id int not null,
    foreign key (user_id) references users(id)
);