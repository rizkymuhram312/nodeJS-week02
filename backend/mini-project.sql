Create table Province(
	prov_id SERIAL PRIMARY KEY,
	prov_name VARCHAR (100)
);

Create table Users(
	user_id serial PRIMARY KEY,
	user_name varchar(55),
	user_email varchar(55),
	user_password varchar(255)
);

Create table City (
	city_id SERIAL PRIMARY KEY,
	city_name VARCHAR (100),
	city_prov_id INTEGER NOT NULL,
	foreign key (city_prov_id) references Province (prov_id) on update cascade on delete cascade
);

Create table Address(
	addr_id serial primary Key,
	addr_email varchar (55),
	addr_fullname varchar (55),
	addr_phone_number varchar (18),
	addr_is_default boolean,
	addr_zipcode varchar(15),
	addr_street1 varchar(255),
	addr_street2 varchar (255),
	addr_city_id integer,
	add_city_id INTEGER NOT NULL,
	add_user_id INTEGER NOT NULL,
	foreign key (add_user_id) references City (city_id) on update cascade on delete cascade,
	foreign key (add_city_id) references Users (user_id) on update cascade on delete cascade
);

create table Orders (
	order_name varchar(55) primary key,
	order_create_on timestamp,
	order_is_closed boolean,
	order_total integer,
	order_user_id INTEGER NOT NULL,
	foreign key (order_user_id) references Users (user_id) on update cascade on delete cascade
);

create table Cart (
	cart_id serial primary key,
	cart_created_on timestamp,
	cart_is_closed boolean,
	cart_total integer,
	cart_user_id INTEGER NOT NULL,
	foreign key (cart_user_id) references Users (user_id) on update cascade on delete cascade
);

create table order_detail(
	ordi_quantity integer,
	ordi_price integer,
	ordi_cart_id INTEGER NOT NULL,
	ordi_prod_id INTEGER NOT NULL,
	ordi_order_name VARCHAR NOT NULL,
	foreign key (ordi_cart_id) references Cart (cart_id) on update cascade on delete cascade,
	foreign key (ordi_prod_id) references Product (prod_id) on update cascade on delete cascade,
	foreign key (ordi_order_name) references Orders (order_name) on update cascade on delete cascade 
);

create table Product (
	prod_id serial primary key,
	prod_title varchar(25),
	prod_description varchar(255),
	prod_stock integer,
	prod_price integer,
	prod_manufacture varchar(15),
	prod_image varchar(100),
	prod_cate_id INTEGER NOT NULL,
	foreign key (prod_cate_id) references Category (cate_id) on update cascade on delete cascade
);

create table Product_Images (
	prim_id uuid primary key,
	prim_file_name varchar(255),
	prim_path varchar(255),
	prim_prod_id INTEGER NOT NULL,
	foreign key (prim_prod_id) references Product (prod_id) on update cascade on delete cascade
);

create table Category (
	cate_id serial primary key,
	cate_name varchar(25)
);

create table User_Roles (
	user_id INTEGER NOT NULL,
	role_id INTEGER NOT NULL,
	foreign key (user_id) references Users (user_id) on update cascade on delete cascade,
	foreign key (role_id) references Roles (role_id) on update cascade on delete cascade
);

create table Roles(
	role_id serial primary key,
	role_name varchar(25)
);

CREATE EXTENSION "pgcrypto";

insert into Province(prov_name) values ('Lampung'),('Jakarta'),('Jawa Barat');
insert into City(city_name,city_prov_id) values ('Metro',1),('Cengkareng',2),('Sentul',3);
insert into Address(addr_email,addr_fullname,addr_phone_number,addr_is_default,addr_zipcode,addr_street1,addr_street2,add_city_id,add_user_id) 
values ('fahmiagas@gmail.com','Fahmi Agas', '08123', true, '34884', 'jl.lintas liwa','',1,1), ('amarganteng@gmail.com','Amar Ganteng', '08321', false, '09876', 'jl. gunung sahari','',2,2),('aliftamvan@gmail.com','Alif Tamvan', '08989', false, '12345', 'jl. raya bogor','',3,3)
insert into Users(user_name,user_email,user_password) values('fahmi','fahmiagas@gmail.com','password'),('amar','amarganteng@gmail.com','password'),('alif','aliftamvan@gmail.com','password')
insert into Category(cate_name) values ('Gadget'),('Clothes'),('Sport');
insert into Product(prod_title,prod_description,prod_stock,prod_price,prod_manufacture,prod_image,prod_cate_id)
values ('laptop','buat ngoding',10,3000000,'dell','xyxy',1),('jaket','buat naik gunung',20,200000,'consina','yzyz',2),('sepatu','buat jogging',5,300000,'adidas','zxzx',3)
insert into Product_Images VALUES(gen_random_uuid(),'laptop dell','C://Document/xyxy.jpg',1),(gen_random_uuid(),'jaket consina','C://Document/yzyz.jpg',2), (gen_random_uuid(),'sepatu adidas','C://Document/xzxz.jpg',3)
insert into Cart(cart_created_on,cart_is_closed,cart_total,cart_user_id)
values ('2016-06-22 19:10:25-07',true,1,1),('2016-07-22 19:10:25-07',true,2,2),('2016-07-23 19:10:25-07',true,2,2),('2016-08-22 19:10:25-07',true,2,3),('2016-08-22 20:10:25-07',true,2,3)
insert into Orders values ('ORD-22062016-1','2016-06-22 19:11:25-07',true,1,1),('ORD-22072016-2','2016-07-22 19:10:25-07',true,2,2),('ORD-22072016-3','2016-07-23 19:10:25-07',true,2,2),('ORD-22082016-4','2016-08-22 19:10:25-07',true,2,3),('ORD-22082016-1','2016-08-22 20:10:25-07',true,2,3)
insert into Order_Detail values (1,3000000,1,1,'ORD-22062016-1'),(2,400000,2,2,'ORD-22072016-2'),(1,200000,3,2,'ORD-22072016-3'),(1,300000,4,3,'ORD-22082016-1'),(3,900000,5,3,'ORD-22082016-1')
insert into Roles(role_name) values ('admin'),('user'),('guest');
insert into User_Roles values (1,2),(2,2),(3,2);

select b.cate_name as "CategoryName",a.prod_stock as "TotalProduct"
from Product a inner join Category b
on a.prod_cate_id = b.cate_id
order by a.prod_stock

select a.prod_title as "ProductName", b.ordi_quantity as Qty, b.ordi_order_name as "Order_Name"
from Product a inner join Order_Detail b
on a.prod_id = b.ordi_prod_id
order by b.ordi_order_name

select a.prod_title as "ProductName", sum(b.ordi_quantity) as "Buyed"
from Product a inner join Order_Detail b
on a.prod_id = b.ordi_prod_id
group by a.prod_title

select a.prod_title as "ProductName", count(b.ordi_prod_id) as "TotalOrder"
from Product a inner join Order_Detail b
on a.prod_id = b.ordi_prod_id
group by a.prod_title

select a.user_name,a.user_email, count(b.order_user_id) as "TotalOrder"
from Users a inner join Orders b 
on a.user_id = b.order_user_id
group by a.user_name,a.user_email

select to_char(order_create_on,'Mon') as "Bulan",
count(order_user_id) as "TotalOrder"
from Orders group by 1

select to_char(a.order_create_on,'Mon') as "Bulan",
sum(b.ordi_price) as "TotalRevenue"
from Orders a inner join Order_Detail
on a.order_name = b.ordi_order_name
group by 1