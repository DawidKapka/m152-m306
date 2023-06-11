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

create table items(
    itemId int not null auto_increment,
    itemName varchar(255) not null,
    smallPrice float not null,
    largePrice float not null,
    primary key (itemId)
);

create table ingredients(
    ingredientId int not null auto_increment,
    ingredientName varchar(255) not null,
    primary key (ingredientId)
);

create table itemIngredients(
    itemIngredientsId int not null auto_increment,
    itemId int not null,
    ingredientId int not null,
    primary key (itemIngredientsId),
    foreign key (itemId) references items(itemId),
    foreign key (ingredientId) references ingredients(ingredientId)
);

create table orderItems(
    orderItemsId int not null auto_increment,
    orderId int not null,
    itemId int not null,
    size varchar(255) not null,
    primary key (orderItemsId),
    foreign key (orderId) references orders(orderId),
    foreign key (itemId) references items(itemId)
);

insert into items (itemName, smallPrice, largePrice)
values
  ('Pizza Margherita', 20.0, 24.0),
  ('Pizza Salami', 22.0, 26.0),
  ('Pizza Tonno', 22.0, 26.0),
  ('Pizza Vegetaria', 22.0, 26.0),
  ('Pizza Quattro Formaggi', 22.0, 26.0),
  ('Pizza Quattro Stagioni', 22.0, 26.0),
  ('Pizza Calzone', 22.0, 26.0),
  ('Pizza Diavolo', 22.0, 26.0),
  ('Pizza Prosciutto', 22.0, 26.0);


insert into ingredients (ingredientName)
values
  ('Cheese'),
  ('Tomato Sauce'),
  ('Salami'),
  ('Ham'),
  ('Tuna'),
  ('Mushrooms'),
  ('Peppers'),
  ('Onions'),
  ('Olives'),
  ('Artichokes'),
  ('Anchovies'),
  ('Egg'),
  ('Bacon'),
  ('Spinach'),
  ('Garlic'),
  ('Chili');

insert into itemIngredients (itemId, ingredientId)
values
  (1, 1),
  (1, 2),
  (2, 1),
  (2, 2),
  (2, 3),
  (3, 1),
  (3, 2),
  (3, 4),
  (4, 1),
  (4, 2),
  (4, 5),
  (4, 6),
  (4, 7),
  (4, 8),
  (5, 1),
  (5, 2),
  (5, 9),
  (5, 10),
  (5, 11),
  (6, 1),
  (6, 2),
  (6, 4),
  (6, 6),
  (6, 7),
  (6, 8),
  (7, 1),
  (7, 2),
  (7, 4),
  (7, 6),
  (7, 7),
  (7, 8),
  (8, 1),
  (8, 2),
  (8, 3),
  (8, 16),
  (9, 1),
  (9, 2),
  (9, 4);

