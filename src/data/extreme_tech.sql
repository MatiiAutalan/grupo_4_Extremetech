CREATE DATABASE  IF NOT EXISTS `extreme_tech` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `extreme_tech`;
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
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'Logitech'),(2,'Asus'),(3,'HyperX'),(4,'Kingston'),(5,'Lg'),(6,'Samsung'),(7,'Sony'),(8,'Nisuta'),(9,'Redragon'),(10,'Vsg'),(11,'Trust'),(12,'Lenovo'),(13,'Cooler Master'),(14,'Intel'),(15,'Amd'),(16,'Gigabyte'),(17,'Nvidia'),(18,'Edifier'),(19,'Corsair'),(20,'Hp'),(21,'Top House'),(22,'Xiaomi'),(27,'ExtremeTech'),(28,'DeepCool'),(29,'Thermaltake'),(31,'Aerocool'),(32,'Cougar'),(33,'ViewSonic');
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
  CONSTRAINT `FK_75d0a37d-7e7a-48fb-accd-7f917f43e2b0` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=117 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `images_product`
--

LOCK TABLES `images_product` WRITE;
/*!40000 ALTER TABLE `images_product` DISABLE KEYS */;
INSERT INTO `images_product` VALUES (22,'D_NQ_NP_837013-MLA31043093050_062019-O.jpg',17),(23,'PBA015.jpg',19),(28,'1633026115706.jpg',22),(29,'1633026115708.jpg',22),(30,'1633026115708.jpg',22),(31,'1633026452179.jpg',23),(32,'1633026452180.jpg',23),(33,'1633026452181.jpg',23),(34,'1633028021588.jpg',24),(35,'1633028021589.jpg',24),(36,'1633028021590.jpg',24),(37,'1633028139781.jpg',25),(38,'1633028139782.jpg',25),(39,'1633028139782.jpg',25),(40,'1633028285170.jpg',26),(41,'1633028285171.jpg',26),(42,'1633028285171.jpg',26),(43,'1633028386876.jpg',27),(44,'1633028386877.jpg',27),(45,'1633028505476.jpg',28),(46,'1633028505476.jpg',28),(47,'1633028505477.jpg',28),(48,'1633028666043.jpg',29),(49,'1633028666044.jpg',29),(50,'1633028666044.jpg',29),(51,'1633028824230.jpg',30),(52,'1633028824231.jpg',30),(53,'1633028824232.jpg',30),(54,'1633102056849.jpg',31),(55,'1633102056850.jpg',31),(56,'1633102056851.jpg',31),(60,'1633104214493.jpg',20),(62,'1633119082645.jpg',32),(63,'1633119082646.jpg',32),(64,'1633119082647.jpg',32),(65,'1633119459644.jpg',33),(66,'1633119459644.jpg',33),(67,'1633119459645.jpg',33),(68,'1633120163244.jpg',34),(69,'1633120163245.jpg',34),(70,'1633120798228.jpg',35),(71,'1633120798229.jpg',35),(72,'1633120935659.jpg',36),(73,'1633121274886.jpg',37),(74,'1633121274886.jpg',37),(75,'1633121274887.jpg',37),(76,'1633121458961.jpg',38),(77,'1633121458962.jpg',38),(78,'1633121458963.jpg',38),(79,'1633121729193.jpg',41),(80,'1633121729194.jpg',41),(81,'1633121729195.jpg',41),(82,'1633121913729.jpg',42),(83,'1633121913730.jpg',42),(84,'1633121983214.jpg',43),(85,'1633122178043.jpg',44),(86,'1633122178044.jpg',44),(87,'1633122250716.jpg',45),(88,'1633122701964.jpg',46),(89,'1633122701965.jpg',46),(90,'1633122701966.jpg',46),(91,'1633122830407.jpg',47),(92,'1633122830407.jpg',47),(93,'1633122830408.jpg',47),(94,'1633122953672.jpg',48),(95,'1633122953673.jpg',48),(96,'1633122953674.jpg',48),(97,'1633123040705.jpg',49),(98,'1633123040706.jpg',49),(99,'1633123040707.jpg',49),(100,'1633123152018.jpg',50),(101,'1633123152018.jpg',50),(102,'1633123152019.jpg',50),(103,'1633123269719.jpg',51),(104,'1633123269720.jpg',51),(105,'1633123269721.jpg',51),(106,'1633123384629.jpg',52),(107,'1633123384630.jpg',52),(108,'1633123384630.jpg',52),(109,'1633123496892.jpg',53),(110,'1633123496893.jpg',53),(111,'1633123496894.jpg',53),(112,'1633123686844.jpg',54),(113,'1633123686846.png',54),(114,'1633123686846.png',54),(115,'1633123855838.jpg',55),(116,'1633123855839.jpg',55);
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
  `color` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_b0cd8467-b7ef-4002-9744-59555271368a` (`category_id`),
  KEY `FK_fa2bf439-6a52-48a3-8374-533f3b54f478` (`brand_id`),
  CONSTRAINT `FK_b0cd8467-b7ef-4002-9744-59555271368a` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `FK_fa2bf439-6a52-48a3-8374-533f3b54f478` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=56 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (17,43000,'PC Ideal para juegos, oficina y mucho más!\r\nPodes jugar juegos como Fortnite, Roblox, Minecraft, GTA, CsGo, Pubg, FIFA, PES y muchísimos más!\r\n\r\n\r\nESPECIFICACIONES\r\n\r\nMicroprocesador AMD Athlon 3000G Socket AM4 Con Vega 3 integrada\r\n\r\nMother A320 Asus / Gigabyte /MSI\r\n\r\nDisco 240Gb Ssd\r\n\r\nMemoria 8 Gb Ddr4\r\n\r\nGabinete Kit con Fuente de 500W\r\n\r\nTeclado , Mouse y parlantes de Regalo\r\n\r\nSistema Operativo Windows 10 Trial\r\n\r\nSi deseas realizar alguna modificación, consultanos y con gusto te asesoramos!',10,15,27,'Pc Gamer basica',NULL),(19,208000,'PC Gamer gama media\r\nPodes jugar juegos todos los juegos del mercado en una excelente calidad! \r\n\r\n\r\nESPECIFICACIONES\r\n\r\nMicroprocesador  I5 10400F\r\n\r\nGPU Nvidia GeForce RTX 3060\r\n\r\nMother H410 Asus / Gigabyte /MSI\r\n\r\nDisco 240Gb Ssd\r\n\r\nDisco 1tb hdd\r\n\r\nMemoria 16 Gb Ddr4\r\n\r\nGabinete gamer y fuente de 650w\r\n\r\nSistema Operativo Windows 10 \r\n\r\nSi deseas realizar alguna modificación, consultanos y con gusto te asesoramos!',10,15,27,'Pc Gamer media',NULL),(20,1000000,'PC Gamer gama ULTRA\r\n\r\nJuega todos los juegos del mercado a su maxima calidad , 4k a altos FPS\r\n\r\nESPECIFICACIONES\r\n\r\nMicroprocesador AMD Ryzen 9 5950X 4.9GHz Turbo AM4 \r\n\r\n Placa de Video Gigabyte GeForce RTX 3090 24GB GDDR6X VISION OC\r\n\r\n Mother ASUS ROG X570 CROSSHAIR VIII FORMULA AM4\r\n\r\nDisco Solido SSD M.2 WD 2TB Black SN850 7000MB/s NVMe PCIe Gen4\r\n\r\nMemoria OLOy DDR4 64GB (2x32GB) 3000MHz Warhawk Black RGB CL16\r\n\r\nGabinete ASUS TUF GT501 Vidrio Templado White 3x120mm ARGB\r\n\r\nFuente ASUS ROG STRIX 750G 80 Plus Gold 750W Full Modular\r\n\r\nSi deseas realizar alguna modificación, consultanos y con gusto te asesoramos!',5,15,27,'Pc Gamer ULTRA',NULL),(22,78390,'Marca Asus\r\n\r\nModelo F512J\r\n\r\nProcesador Intel core i3\r\n\r\nModelo del procesador Intel Core i3-1005G1\r\n\r\nMemora RAM 4 Gb\r\n\r\nPlaca de video Intel® UHD Graphics\r\n\r\nPantalla 15,6 Táctil\r\n\r\nResolución pantalla Full Hd (1920×1080)\r\n\r\nTipo de disco SSD\r\n\r\nTamaño de disco 128 GB\r\n\r\nSistema operativo Windows 10 Home\r\n\r\nTeclado Americano. No tiene la letra ñ pero viene configurado al español.',0,14,2,'ASUS Vivobook F512J','Gris Oscuro'),(23,2290,'G300S Mouse Óptico Para Juegos\r\nMás dominio. Más control. Más botín. Logitech® Gaming Mouse G300s ofrece nueve controles programables con los que asignar comandos del teclado a botones más accesibles. La memoria integrada permite almacenar hasta tres perfiles de juego o jugador en el ratón, para pasar de un ordenador a otro sin tener que volver a configurarlo todo cada vez. El software de tipo arrastrar y colocar facilita la personalización del ratón. El diseño ambidiestro contorneado se adapta a las dos manos. Y un sensor óptico para juegos sigue los movimientos lentos o rápidos en diversas superficies. Así se obtiene una respuesta coherente a los movimientos de la mano.',10,1,1,'Mouse Logitech G300S Gaming 2500dpi','Negro y celeste'),(24,1999,'Para trabajar desde casa con la computadora o aprovechar los momentos de ocio, necesitás comodidad y facilidad de movimiento. Con tu CoolerMaster Minos X2 encontrá eso que buscás en un solo aparato con la mejor tecnología.\r\n\r\nAdaptado a tus movimientos\r\nEl mouse de juego te ofrecerá la posibilidad de marcar la diferencia y sacar ventajas en tus partidas. Su conectividad y sensor suave ayudará a que te desplaces rápido por la pantalla.',15,1,13,'Mouse Cooler Master Minos X2','Negro'),(25,2280,'Diseño Mucho Más Pequeño, Las Mismas Teclas\r\nEl teclado compacto es un 36% más pequeño que nuestros teclados normales, pero conserva todas las teclas estándar por lo que hacer lo que le gusta resulta más fácil que nunca.\r\nTecnología Inalámbrica Avanzada De 2,4 GHz\r\nPara trabajar o jugar desde más lugares como si estuviese en el sofá: la conexión inalámbrica elimina casi por completo retrasos, interrupciones e interferencias y ofrece un alcance de hasta 10 metros.1',20,1,1,'Teclado Logitech Wireless K230','Negro'),(26,8250,'Disfrutá de tus partidas en otro nivel con Redragon, marca reconocida que se especializa en brindar la mejor experiencia de juego al público gamer desde hace más de 20 años. Sus teclados se adaptan a todo tipo de jugadores y esto los convierten en un fiel reflejo de la alta gama y calidad que la compañía ofrece.\r\n\r\nDistinción a todo color\r\nSu retroiluminación le da un toque diferente a tu equipo y resalta su composición cuando es utilizado en espacios poco iluminados.',10,1,9,'Teclado Mecanico Inalambrico Redragon Draconic K530W-RGB White','Blanco'),(27,1700,'Es tan fácil deslizar el mouse. Con tu Logitech G240 podrás llenar la pantalla de tu computadora de clicks. Su elaborada superficie le dará precisión y comodidad a tus movimientos.\r\n\r\nCalidad en su confección\r\nDiseñada con excelente materia prima, tu almohadilla te dará una agradable sensación al tacto y evitará un gran desgaste en la base de tu mouse. Su confección hará que tu mano vuele por la superficie ya que es compatible para funcionar con todo tipo de sensores, inclusive algunos más antiguos.',0,1,1,'Mouse Pad Logitech G240 Gaming','Negro'),(28,3500,'Mousepad Gamer Hyperx Fury Gaming Pro Speed Edition XL\r\nEl mousepad HyperX FURY Pro Gaming está confeccionado con una costura especial antidesgaste sin bordes para ofrecerte una superficie lisa y uniforme. Ya sea que prefieras velocidad o precisión, el tejido de alta densidad brinda una superficie que se siente suave al tacto y está optimizada para su preferencia. HyperX FURY S cuenta con una superficie de tela suave para mayor comodidad en la muñeca y con una parte inferior de caucho natural texturizado diseñado para el máximo agarre cuando la acción se vuelve frenética.\r\n',10,1,3,'Mouse Pad HyperX Fury S Pro Gaming Speed Edition XL',''),(29,5500,'Control preciso\r\nEste mando combina funciones revolucionarias mientras conserva precisión, comodidad y exactitud en cada movimiento. Gracias a su ergonomía especialmente pensada para la posición de tu mano, podés pasar horas jugando con total confort.\r\n\r\nMayor comodidad y realismo\r\nTe permite jugar sin necesidad de que haya cables de por medio. Está pensado no solamente para controlar mejor tus videojuegos, sino también para aumentar su realismo y experiencia.\r\n\r\nActivá el Bluetooth\r\nCuenta con conexión Bluetooth de alta tecnología para usarlo en cualquier ordenador o dispositivo; ya no necesitarás de aplicaciones de terceros ni cable USB. Además, posee gran capacidad antiinterferente, fácil manejo y señal de conexión estable.',20,1,27,'Joystick Marvo GT64 Inalambrico PS4 PC','Negro'),(30,8800,'CORSAIR K63 incluye interruptores mecánicos CHERRY® MX Red para ofrecer el rendimiento definitivo. La brillante retroiluminación LED roja mejora la experiencia gracias a su iluminación adaptable, dinámica y prácticamente ilimitada.\"Compatible con CORSAIR iCUE\r\n\r\nCONTROLES ESPECÍFICOS PARA EL VOLUMEN Y EL CONTENIDO MULTIMEDIA\r\nControl para ajustar el sonido sobre la marcha, sin interrumpir el juego.',10,1,19,'Teclado Corsair K63 Backlit Red Led Mecanico','Negro'),(31,8900,'FUENTE ATX DEEPCOOL DA500 80 PLUS BRONZE\r\nMarca de la fuente : Deepcool\r\nModelo de la fuente :	DA500\r\nPotencia de salida :	500 W',10,2,28,'Fuente Deepcool 500W DA500 80 Plus Bronze','Negro'),(32,14500,'Smart BX1 RGB 750W (230V)\r\nLa serie BX1 RGB presenta componentes de alta calidad, salida continua estable a 40C y 5 años de garantía, operación prácticamente silenciosa, fácil instalación y rendimiento confiable.\r\n\r\nCon la certificación 80 PLUS Bronze 230V EU, la serie Smart BX1 RGB está disponible en los modelos de 550W, 650W y 750W.\r\n\r\nEl ventilador preinstalado de 256 colores RGB de 10 LED RGB ofrece un excelente flujo de aire, 3 modos de iluminación, 7 opciones de color, LED apagado y memoria incorporada.',0,2,29,'Fuente Thermaltake Smart BX1 750W RGB 80 Plus Bronze','Negro'),(33,2500,'FUENTE ATX SEGOTEP SEGOTEP ATX-500W',20,2,27,'Fuente Segotep 500W ATX',''),(34,6768,'Considerado un dispositivo de alto rendimiento, la unidad en estado sólido A400 de Kingston está diseñada para las personas más exigentes. Mejora de forma notable la capacidad de respuesta de su sistema, ya que alcanza velocidades de lectura/escritura de hasta 500MB/seg y 450MB/seg. Por ende, es 10 veces más rápido que un disco duro tradicional.\r\nAl estar compuesta por una memoria flash es silenciosa y posee pocas probabilidades de tener fallas.',0,3,4,'Disco Sólido SSD Kingston 480GB A400 500MB/s2',''),(35,4110,'SSD CRUCIAL BX500 240GB\r\n\r\n* Mejorar el rendimiento. Arranca más rápido. Cargar archivos más rápido. Mejore la capacidad de respuesta general del sistema para todas sus necesidades informáticas. 300% más rápido que un disco duro típico.\r\n\r\n* Herramientas para una fácil instalación.',10,3,4,'Disco Sólido SSD Kingston 240GB BX500 540MB/s',''),(36,1699,'Logitech S150 ofrece un sonido natural, con una gran claridad y precisión, que se dispersa de manera uniforme. Un parlante que asegura potencia y calidad por igual en la reproducción de contenidos multimedia.',0,11,1,'Parlantes Logitech S150 Black USB','Negro'),(37,10999,'Altavoces Logitech Z407 Bluetooth con subwoofer para ordenador\r\nGran sonido y estilo con Z407 para tu escritorio',5,11,1,'Parlantes Logitech Z407 2.1 Bluetooth 200v',''),(38,5810,'Caja mid tower de alto rendimiento con un elegante diseño LED RGB en el panel frontal. Viene con un panel lateral de acrílico completo para mostrar el interior de su plataforma. El panel frontal de fibra de carbono brinda una apariencia futurista a su configuración de juego.',0,9,31,'Gabinete Aerocool Bolt Black RGB Ventana Acrilica ATX','Negro'),(41,24300,'Gabinete Cougar Blazer Aluminum Vidrio Templado',0,9,32,'Gabinete Cougar Blazer Aluminum Vidrio Templado',''),(42,3650,'Descripción\r\nMEMORIA RAM DDR4 DRAM CORSAIR VENGEANCE LPX 4GB 2400mhz C14\r\n\r\nLa memoria Vengeance LPX se ha diseñado para overclocking de alto rendimiento. El disipador de calor, fabricado en aluminio puro, permite una disipación térmica más rápida; la placa impresa de ocho capas administra el calor y proporciona una capacidad superior para incrementar el overclocking.',0,6,19,'Memoria Corsair DDR4 4GB 2400MHz Vengeance LPX BLACK',''),(43,4434,'Potenciá tu PC\r\nCon este módulo de tecnología DDR3, mejorará el desempeño de tu equipo, ya que alcanza velocidades de transferencia y de bus más altas. Además, funciona a niveles de bajo voltaje, lo que optimiza el rendimiento y disminuye el consumo eléctrico.',0,6,3,'Memoria Kingston DDR3 4GB 1866MHz HyperX Fury','Rojo'),(44,53500,'Clave en el rendimiento de tu computadora de escritorio, ya no tenés que pensar en cómo distribuir el tiempo y acciones porque ahora las tareas en simultáneo son posibles.\r\nAMD cuenta con un catálogo de productos que se adaptan a los requerimientos de todo tipo de usuarios: juegos en línea, edición a gran escala, contenido en múltiples plataformas y más',0,4,15,'Procesador AMD Ryzen 7 5800X 4.7GHz Turbo AM4 - No incluye Cooler',''),(45,37800,'Procesador de novena generación intel core i7 9700F con ocho núcleos\r\n\r\nCon la tecnología intel turbo boost max 4.70, la frecuencia máxima de turbo que este procesador puede alcanzar.\r\n\r\nTener 8 núcleos permite que el procesador ejecute varios programas simultáneamente sin ralentizar el sistema.\r\n',0,4,14,'Procesador Intel Core i7 9700 4.7GHz Turbo 1151 Coffee Lake',''),(46,28845,'Una experiencia visual de calidad\r\nEste monitor de 24\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido. Su tiempo de respuesta de 4 ms lo hace ideal para gamers y cinéfilos porque es capaz de mostrar imágenes en movimiento sin halos o bordes borrosos.',0,13,6,'Monitor Samsung 24\'\' Curvo F390',''),(47,64440,'Una experiencia visual de calidad\r\nEste monitor de 24\" te va a resultar cómodo para estudiar, trabajar o ver una película en tus tiempos de ocio. Asimismo, su resolución de 1920 x 1080 te permite disfrutar de momentos únicos gracias a una imagen de alta fidelidad. Una de sus virtudes es que posee pantalla antirreflejo, de esta manera no verás reflejado lo que está detrás de vos y vas a evitar forzar tu vista para enfocar el contenido.',5,13,33,'Monitor Gamer ViewSonic 24\" XG2405 144HZ Hdmi DP 1ms',''),(48,9750,'Características principales\r\nB450M DS3H WIFI(1.x)\r\nAMD B450 Ultra Durable Motherboard with Realtek® GbE LAN with cFosSpeed, PCIe Gen3 x4 M.2, RGB FUSION 2.0, Intel® Dual Band 802.11ac WIFI, CEC 2019 ready',0,5,16,'Mother Gigabyte B450M DS3H HDMI RGB Ready M.2 NVMe',''),(49,13760,'- Marca: MSI\r\n- Modelo: B360M MORTAR\r\n- Plataforma: Intel\r\n- Capacidad máxima soportada de la memoria RAM: 64 GB\r\n- Chipset: Intel® B360 Chipset\r\n- Socket: S1151\r\n- Con procesador: No\r\n- CPU: INTEL 9NA,PENTIUM,CELERON\r\n- Aplicaciones: PC INTEL\r\n- Tipo de memoria RAM: DDR4\r\n- PUERTOS USB 3.1 (FRONTALES) 1(Gen2, Tipo C), 2(Gen1, Tipo A)\r\n- PCI-EX16 2\r\n- PCI-E GEN Gen3\r\n- PCI-EX1 2\r\n- SATAIII 4\r\n- FORMATO Micro-ATX\r\n- SISTEMA OPERATIVO Windows® 10 64-bit',0,5,14,'Mother MSI B360M Mortar 1151 8va Gen',''),(50,58500,'Velocidad en cada lectura\r\nComo cuenta con 896 núcleos, los cálculos para el procesamiento de gráficos se realizarán de forma simultánea logrando un resultado óptimo del trabajo de la placa. Esto le permitirá ejecutar lecturas dispersas y rápidas de y hacia la GPU.\r\n',10,7,17,'Placa de Video MSI GeForce GTX 1650 4GB GDDR6 Ventus XS OC',''),(51,157500,'En el menor tiempo posible\r\nCon una velocidad de memoria de 7000 MHz los datos del procesador central se van a traducir en información comprensible en tan solo un abrir y cerrar de ojos; decodificará tantos ciclos por segundo que hará más efectiva la transmisión de datos a otros componentes. Con esta cualidad, el equipo ganará agilidad y eficiencia.\r\n',5,7,15,'Placa de Video Asrock RX 570 8GB Phantom Gaming D',''),(52,6048,'COOLER MASTER\r\n\r\nHYPER H410R RGB\r\n\r\nCON VENTILADOR RGB LED PWM\r\nFlujo de aire preciso\r\nTecnología de contacto directo\r\nVentilador XtraFlo PWM\r\nTamaño compacto\r\nSnap and Play',0,8,13,'Cooler CPU Cooler Master HYPER H410R LED Red Intel & AM4 Ready',''),(53,9893,'Compatibilidad: Intel LGA2066/2011/1366/1151/1150/1155/1156\r\nAMD TR4/AM4/FM2+/FM2/FM1/AM3+/AM3/AM2+/AM2\r\nTDP: 250W\r\nDimensión del radiador: 276×120×27mm\r\nMaterial del radiador: Aluminio',0,8,27,'Cooler CPU ID-Cooling FROSTFLOW X 240 CPU Intel 1151 & AMD AM4',''),(54,10000,'Adobe Photoshop es un editor de fotografías desarrollado por Adobe Systems Incorporated. Usado principalmente para el retoque de fotografías y gráficos',50,12,27,'Adobe Photoshop',''),(55,15000,'Linux sirve para hacer funcionar todo el hardware de un PC, ya que un ordenador no puede funcionar sin un sistema operativo y Linux es un sistema operativo gratuito. ... Este sistema operativo también es conocido por controlar superordenadores o servidores que es donde en realidad Linux toma importancia',5,12,27,'Linux','');
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
INSERT INTO `users` VALUES (1,'Jona','R','1155887788','asd@gmail.com','asd123',1,'user.jpg',333333,'Avenida siempre viva 123',1602,'buenos aires'),(2,'sess','as12312312dsadasd','12313','mail@mail.com','$2b$10$Qrkz7ks/gA3c5/GTmKkF8egrcOsAFAtEkiBjvQ3MTSzrUMXLqt3Vm',1,'1632714650153.png',123,'Asd direccionasa',1234,'Buenos Aires'),(5,'Gonza','Cometortitas','1144887755','mail1@mail.com','$2b$10$5tkjSYIJzKR/7dPL6GU09u0o/zF7p0exWrBRrqU8dlsLluleblp2e',0,'user.jpg',NULL,NULL,NULL,NULL),(43,'juan','topo','1127880088','kevin@mail.com','$2b$10$XIX16AnwsComerbpMu7B/e.TbWxmtHiUuRAKnYSkUekxDtEfjlGOq',0,'user.jpg',NULL,NULL,NULL,NULL),(44,' Gonza  ','pelozo','1155228877','kevin123@mail.com','$2b$10$WSpUjYKHmVav6Gc6ypBdEeUkOT2Q2ePK/OQr.zKiPJgOV..9hkuPW',0,'user.jpg',NULL,NULL,NULL,NULL),(46,' aaaa','asd','1127880088','proband11o@asd.com','$2b$10$SlUmQazAHSJrSbOMK7Q50OiWb7Qep8T/U88619Z1wdTFUZwV38duK',0,'user.jpg',NULL,NULL,NULL,NULL),(48,'asdasd','racedo','1155228877','keviniii@gmail.com','$2b$10$WmNlNEUwrSzMSs4/Kt45EOQJXJw265n.12GA91IHvbPNdop4PBuD2',0,'user.jpg',NULL,NULL,NULL,NULL),(49,'kevin','almada','1127885555','kevin10@gmail.com','$2b$10$czJd78qfNCstHzoYRU.SMOjIOCEkhU3St4SYhK7YRkIYJUnyGKps2',0,'user.jpg',NULL,NULL,NULL,NULL),(50,'asd','asd','1127885555','pruebanoadmin@gmail.com','$2b$10$sYyD0cWkliIxqFueaFYczewoEJLLDjqB0dqUbpbrXZhGMpTGFpU.S',1,'user.jpg',NULL,NULL,NULL,NULL);
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

-- Dump completed on 2021-10-11 17:40:48
