CREATE TABLE `products` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   `price` INT NOT NULL,
   `description` VARCHAR(255) NOT NULL,
   `discount` INT,
   `category_id` INT NOT NULL,
   `brand_id` INT NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `categories` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `brands` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255) NOT NULL,
   PRIMARY KEY (`id`)
);

CREATE TABLE `users` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `first_name` VARCHAR(50) NOT NULL,
   `last_name` VARCHAR(50),
   `phone` VARCHAR(20),
   `email` VARCHAR(100) NOT NULL,
   `password` VARCHAR(70) NOT NULL,
   `rol_user` INT NOT NULL,
   `image` VARCHAR(255) NOT NULL,
   `document` INT,
   `address` VARCHAR(255),
   `pc` INT,
   `province` VARCHAR(255),
   PRIMARY KEY (`id`)
);

CREATE TABLE `images_product` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `name` VARCHAR(255),
   `product_id` INT,
   PRIMARY KEY (`id`)
);


ALTER TABLE `products` ADD CONSTRAINT `FK_fa2bf439-6a52-48a3-8374-533f3b54f478` FOREIGN KEY (`brand_id`) REFERENCES `brands`(`id`);

ALTER TABLE `products` ADD CONSTRAINT `FK_b0cd8467-b7ef-4002-9744-59555271368a` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`);

ALTER TABLE `images_product` ADD CONSTRAINT `FK_75d0a37d-7e7a-48fb-accd-7f917f43e2b0` FOREIGN KEY (`product_id`) REFERENCES `products`(`id`);
