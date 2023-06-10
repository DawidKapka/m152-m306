drop database if exists antonios;
create database antonios;
use antonios;

create table orders(
    orderId int not null auto_increment,
    firstname varchar(255) not null,
    lastname varchar(255) not null,
    streetNumber varchar(255) not null,
    city varchar(255) not null,
    zip int not null,
    phone varchar(255) not null,
    primary key (orderId)
);
