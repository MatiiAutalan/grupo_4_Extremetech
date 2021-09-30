-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: extreme_tech
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.20-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Logitech'),(2,'Asus'),(3,'HyperX'),(4,'Kingston'),(5,'Lg'),(6,'Samsung'),(7,'Sony'),(8,'Nisuta'),(9,'Redragon'),(10,'Vsg'),(11,'Trust'),(12,'Lenovo'),(13,'Cooler Master'),(14,'Intel'),(15,'Amd'),(16,'Gigabyte'),(17,'Nvidia'),(18,'Edifier'),(19,'Corsair'),(20,'Hp'),(21,'Top House'),(22,'Xiaomi'),(27,'ExtremeTech');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (1,'Perifericos'),(2,'Alimentacion'),(3,'Almacenamiento'),(4,'Microprocesadores'),(5,'Motherboards'),(6,'Memorias'),(7,'Placas de Video'),(8,'Refrigeracion'),(9,'Gabinetes'),(11,'Audio'),(12,'Software'),(13,'Monitores'),(14,'Notebooks'),(15,'pcArmadas');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `images_product`
--

DROP TABLE IF EXISTS `images_product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `images_product` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_75d0a37d-7e7a-48fb-accd-7f917f43e2b0` (`product_id`),
  CONSTRAINT `FK_75d0a37d-7e7a-48fb-accd-7f917f43e2b0` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_product`
--

LOCK TABLES `images_product` WRITE;
/*!40000 ALTER TABLE `images_product` DISABLE KEYS */;
INSERT INTO `images_product` VALUES (15,'1632840731436.png',13),(16,'1632840731438.png',13),(17,'1632840731447.jpg',13),(18,'1632842305759.png',14),(19,'1632842305761.png',20),(20,'1632842305772.jpg',14),(21,'1632846064423.png',15),(22,'1632846064425.png',17),(23,'1632846064435.jpg',19),(24,'default.png',16);
/*!40000 ALTER TABLE `images_product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `price` int(11) NOT NULL,
  `description` text NOT NULL,
  `discount` int(11) DEFAULT NULL,
  `category_id` int(11) NOT NULL,
  `brand_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b0cd8467-b7ef-4002-9744-59555271368a` (`category_id`),
  KEY `FK_fa2bf439-6a52-48a3-8374-533f3b54f478` (`brand_id`),
  CONSTRAINT `FK_b0cd8467-b7ef-4002-9744-59555271368a` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`),
  CONSTRAINT `FK_fa2bf439-6a52-48a3-8374-533f3b54f478` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (13,100,'asdasdsa',50,3,3,'pepe'),(14,100,'qaaaaa',50,1,2,'Jona'),(15,100,'aaaaaa',50,3,3,'Cafetera del niño kevin'),(16,100,'Notebook super wow',10,14,2,'Hp'),(17,43000,'PC Ideal para juegos, oficina y mucho más!\r\nPodes jugar juegos como Fortnite, Roblox, Minecraft, GTA, CsGo, Pubg, FIFA, PES y muchísimos más!\r\n\r\n\r\nESPECIFICACIONES\r\n\r\nMicroprocesador AMD Athlon 3000G Socket AM4 Con Vega 3 integrada\r\n\r\nMother A320 Asus / Gigabyte /MSI\r\n\r\nDisco 240Gb Ssd\r\n\r\nMemoria 8 Gb Ddr4\r\n\r\nGabinete Kit con Fuente de 500W\r\n\r\nTeclado , Mouse y parlantes de Regalo\r\n\r\nSistema Operativo Windows 10 Trial\r\n\r\nSi deseas realizar alguna modificación, consultanos y con gusto te asesoramos!',10,15,27,'Pc Gamer basica'),(19,208000,'PC Gamer gama media\r\nPodes jugar juegos todos los juegos del mercado en una excelente calidad! \r\n\r\n\r\nESPECIFICACIONES\r\n\r\nMicroprocesador  I5 10400F\r\n\r\nGPU Nvidia GeForce RTX 3060\r\n\r\nMother H410 Asus / Gigabyte /MSI\r\n\r\nDisco 240Gb Ssd\r\n\r\nDisco 1tb hdd\r\n\r\nMemoria 16 Gb Ddr4\r\n\r\nGabinete gamer y fuente de 650w\r\n\r\nSistema Operativo Windows 10 \r\n\r\nSi deseas realizar alguna modificación, consultanos y con gusto te asesoramos!',10,15,27,'Pc Gamer media'),(20,1000000,'PC Gamer gama ULTRA\r\n\r\nJuega todos los juegos del mercado a su maxima calidad , 4k a altos FPS\r\n\r\nESPECIFICACIONES\r\n\r\nMicroprocesador AMD Ryzen 9 5950X 4.9GHz Turbo AM4 \r\n\r\n Placa de Video Gigabyte GeForce RTX 3090 24GB GDDR6X VISION OC\r\n\r\n Mother ASUS ROG X570 CROSSHAIR VIII FORMULA AM4\r\n\r\nDisco Solido SSD M.2 WD 2TB Black SN850 7000MB/s NVMe PCIe Gen4\r\n\r\nMemoria OLOy DDR4 64GB (2x32GB) 3000MHz Warhawk Black RGB CL16\r\n\r\nGabinete ASUS TUF GT501 Vidrio Templado White 3x120mm ARGB\r\n\r\nFuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular\r\n\r\nSi deseas realizar alguna modificación, consultanos y con gusto te asesoramos!',5,15,27,'Pc Gamer ULTRA');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(70) NOT NULL,
  `rol_user` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `document` int(11) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `pc` int(11) DEFAULT NULL,
  `province` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_un` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Jona','R','1155887788','asd@gmail.com','asd123',1,'user.jpg',333333,'Avenida siempre viva 123',1602,'buenos aires'),(2,'session muere1','as12312312dsadasd','12313','mail@mail.com','$2b$10$Qrkz7ks/gA3c5/GTmKkF8egrcOsAFAtEkiBjvQ3MTSzrUMXLqt3Vm',1,'1632714650153.png',123,'Asd direccionasa',1234,'Buenos Aires'),(5,'Gonza','Cometortitas','1144887755','mail1@mail.com','$2b$10$5tkjSYIJzKR/7dPL6GU09u0o/zF7p0exWrBRrqU8dlsLluleblp2e',0,'user.jpg',NULL,NULL,NULL,NULL),(43,'juan','topo','1127880088','kevin@mail.com','$2b$10$XIX16AnwsComerbpMu7B/e.TbWxmtHiUuRAKnYSkUekxDtEfjlGOq',0,'user.jpg',NULL,NULL,NULL,NULL),(44,' Gonza  ','pelozo','1155228877','kevin123@mail.com','$2b$10$WSpUjYKHmVav6Gc6ypBdEeUkOT2Q2ePK/OQr.zKiPJgOV..9hkuPW',0,'user.jpg',NULL,NULL,NULL,NULL),(46,' aaaa','asd','1127880088','proband11o@asd.com','$2b$10$SlUmQazAHSJrSbOMK7Q50OiWb7Qep8T/U88619Z1wdTFUZwV38duK',0,'user.jpg',NULL,NULL,NULL,NULL),(48,'asdasd','racedo','1155228877','keviniii@gmail.com','$2b$10$WmNlNEUwrSzMSs4/Kt45EOQJXJw265n.12GA91IHvbPNdop4PBuD2',0,'user.jpg',NULL,NULL,NULL,NULL),(49,'kevin','almada','1127885555','kevin10@gmail.com','$2b$10$czJd78qfNCstHzoYRU.SMOjIOCEkhU3St4SYhK7YRkIYJUnyGKps2',0,'user.jpg',NULL,NULL,NULL,NULL),(50,'asd','asd','1127885555','pruebanoadmin@gmail.com','$2b$10$sYyD0cWkliIxqFueaFYczewoEJLLDjqB0dqUbpbrXZhGMpTGFpU.S',1,'user.jpg',NULL,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'extreme_tech'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-09-30 14:03:11
