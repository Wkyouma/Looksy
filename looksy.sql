-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: pinterest
-- ------------------------------------------------------
-- Server version	8.0.41

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `imagens`
--

DROP TABLE IF EXISTS `imagens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagens` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(100) DEFAULT NULL,
  `descricao` text,
  `imagem_url` text NOT NULL,
  `data_upload` datetime DEFAULT CURRENT_TIMESTAMP,
  `caminho` varchar(500) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=109 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens`
--

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
INSERT INTO `imagens` VALUES (6,'asd','','https://i.pinimg.com/474x/af/14/85/af14858940bd2650cf683cba29de63ff.jpg','2025-04-14 16:22:26','0'),(7,' matheuspassole','','https://i.pinimg.com/474x/64/9c/93/649c93d09d1f5d1978959d362cfb75cf.jpg','2025-04-14 16:33:36','0'),(8,'Clube','','https://i.pinimg.com/236x/87/bf/91/87bf9140e45b84cc9e043a70f5169a3f.jpg','2025-04-14 16:33:59','0'),(9,'Eva','','https://i.pinimg.com/236x/56/b7/34/56b734afb44921343093465b996a3640.jpg','2025-04-14 16:34:06','0'),(12,'Draw','','https://i.pinimg.com/236x/e6/8d/10/e68d10e542b2e6b445149eb377476846.jpg','2025-04-14 16:34:53','0'),(13,'Ilusão','','https://i.pinimg.com/474x/c6/7c/f5/c67cf5c64746dc26079f850f5a284f12.jpg','2025-04-14 16:35:09',''),(14,'psycho','','https://i.pinimg.com/236x/ab/72/b1/ab72b1b0a23aa41c6b7aeb50abcd26f0.jpg','2025-04-14 16:35:25','0'),(15,'Taxi','','https://i.pinimg.com/236x/1a/98/37/1a98374189d0385fce391c88c61c2bce.jpg','2025-04-14 16:35:59',''),(16,'Taxi','','https://i.pinimg.com/236x/f6/27/de/f627de6f0e433cb385ccc1a812563ddd.jpg','2025-04-14 16:36:10',' '),(17,'OverCore','','https://i.pinimg.com/236x/f2/48/4e/f2484e63f7e580ba1140b9e389c994da.jpg','2025-04-14 16:36:24',' '),(18,'Star','','https://i.pinimg.com/236x/d4/80/29/d480297fab38203e8521318d43b2324d.jpg','2025-04-14 16:36:41',''),(20,'Anjo','','https://i.pinimg.com/236x/25/6a/f4/256af4faa5dd86bb26ce3c33df9516c6.jpg','2025-04-14 16:38:39',''),(21,'Mr.White','','https://i.pinimg.com/236x/d8/4f/c5/d84fc51213b9e5246da67f04937cb5a5.jpg','2025-04-14 16:39:01',''),(22,'Rdr2','','https://i.pinimg.com/236x/f0/29/b8/f029b87ee4ca69702ae86c965373efd5.jpg','2025-04-14 16:39:13',''),(23,'Guts','','https://i.pinimg.com/236x/3c/12/24/3c1224455c25fb195654a48d944bb02d.jpg','2025-04-14 16:39:22',''),(24,'A dream','','https://i.pinimg.com/474x/21/61/c9/2161c9babeabc08071d9f78eecd0765a.jpg','2025-04-14 16:39:40',''),(25,'Chainwsaw','','https://i.pinimg.com/236x/7c/ef/13/7cef13bab4c79117a050bc321759b29a.jpg','2025-04-14 16:40:13',''),(26,'Shinji','','https://i.pinimg.com/236x/a6/34/59/a63459d10a500cd6bce42890e932a02f.jpg','2025-04-14 16:40:39',''),(27,'Evas64','','https://i.pinimg.com/236x/01/cf/34/01cf34d629092ad27bbcb596713c0837.jpg','2025-04-14 16:40:54',''),(28,'Happy','','https://i.pinimg.com/236x/80/df/52/80df52ad63c7c565c4b52da4525eaf21.jpg','2025-04-14 16:41:10',''),(29,'Ps2','','https://i.pinimg.com/236x/26/d4/be/26d4be156fe4c2fb06def0321e4e0eff.jpg','2025-04-14 16:41:20',''),(30,'Anime','','https://i.pinimg.com/236x/8d/7d/55/8d7d55fd65a34d5d7fe8bc5dfc77c118.jpg','2025-04-14 16:41:37',''),(32,'RadioHead','','https://i.pinimg.com/236x/b1/42/5e/b1425ed13526d1ae4c6c8d89493505f3.jpg','2025-04-14 16:42:30',''),(33,'Placa','','https://i.pinimg.com/236x/97/f9/67/97f967874f3e834ed2047231aee54bf9.jpg','2025-04-14 16:42:39','0'),(34,'Lula','','https://i.pinimg.com/236x/61/cc/5e/61cc5e991ed292fffcf723a7f1e20b35.jpg','2025-04-14 16:42:48',' '),(35,'Cyber','','https://i.pinimg.com/236x/13/c2/bb/13c2bba4d80ad6fb254942e58fb18602.jpg','2025-04-14 16:43:12',' '),(36,'Akira','','https://i.pinimg.com/236x/02/5c/24/025c247c38febf967308dddc11dcae3e.jpg','2025-04-14 16:43:27',''),(37,'Alien','','https://i.pinimg.com/236x/f5/79/11/f57911317df7b03de8b873ffae39c520.jpg','2025-04-14 16:43:39',''),(38,'Dark','','https://i.pinimg.com/474x/51/60/06/51600600243babd506bc4cc1cceabfcb.jpg','2025-04-14 16:43:57',''),(40,'Piece>','','https://i.pinimg.com/236x/e5/ba/44/e5ba44bb1ebf39b76163523269a749ff.jpg','2025-04-14 16:44:16',' '),(41,'','','https://i.pinimg.com/474x/f3/ec/65/f3ec65f9a3742c81f5b11b4e9f27b42e.jpg','2025-04-14 16:44:48',''),(42,'','','https://i.pinimg.com/236x/dc/2f/29/dc2f2990cbb487e294f16ab0fd9eaab3.jpg','2025-04-14 16:44:54',''),(43,'','','https://i.pinimg.com/236x/8c/55/fa/8c55fa26a81bf7e58e211f513f6861ae.jpg','2025-04-14 16:44:59',''),(44,'','','https://i.pinimg.com/236x/8c/b2/83/8cb28348512a82ed6ac8cc6c8a7a0e8f.jpg','2025-04-14 16:45:09',''),(45,'','','https://i.pinimg.com/236x/e4/c9/7e/e4c97e12e89e088220fc96a87a8358a0.jpg','2025-04-14 16:47:05',''),(46,'','','https://i.pinimg.com/236x/4d/f5/eb/4df5ebbb11c25d24a5b597300ddf7ba5.jpg','2025-04-14 16:47:10','0'),(47,'','','https://i.pinimg.com/236x/8a/c2/bf/8ac2bf9377f7aa99df99a549d12e8c8e.jpg','2025-04-14 16:47:41','0'),(48,'','','https://i.pinimg.com/236x/28/86/00/2886005f38f38800cd24dbefabe2f5b8.jpg','2025-04-14 16:47:47','0'),(49,'','','https://i.pinimg.com/474x/cd/28/70/cd2870ab9b1587bfa0fd7e92958c282c.jpg','2025-04-14 22:49:07',''),(50,'HELLO','','https://i.pinimg.com/236x/1c/eb/94/1ceb9454cb13efc1e2a43325af83c7f7.jpg','2025-04-14 22:49:41',' '),(52,'','','https://i.pinimg.com/236x/5e/b8/27/5eb82772c8275881ecb2c73f60f87eaf.jpg','2025-04-14 22:52:29',''),(54,'Pinguim','','https://i.pinimg.com/236x/86/db/20/86db2087d10f3947a462ea61bec49fb7.jpg','2025-04-14 22:54:27',''),(55,'fofo','','https://i.pinimg.com/236x/bd/f9/f5/bdf9f50e27bd454b9e8dacee676d83ea.jpg','2025-04-14 22:55:08',''),(56,'DOENTE','','https://i.pinimg.com/474x/7c/11/e9/7c11e902635709769034e9025bb21ed7.jpg','2025-04-14 22:55:51','0'),(57,'HEHE','','https://i.pinimg.com/236x/dc/e4/0f/dce40f0988828952b80d956ffcc69f69.jpg','2025-04-15 18:48:05',''),(58,'vibes','','https://i.pinimg.com/236x/7c/27/cb/7c27cb27838e5f33c59b5beeb0887d4e.jpg','2025-04-15 18:48:17',''),(59,'Aoi Aoi','','https://i.pinimg.com/236x/0d/85/e2/0d85e2173f0a4d7a21642a1fbb335339.jpg','2025-04-15 18:48:33',''),(60,'Eye','','https://i.pinimg.com/236x/cf/6a/f1/cf6af1db6eba31e98ec3054d3fc9e819.jpg','2025-04-17 22:49:59','0'),(61,'','','https://i.pinimg.com/236x/11/28/f3/1128f3e69923291ac4dcad66005aac15.jpg','2025-04-17 22:50:12',''),(62,'','','https://i.pinimg.com/236x/f2/a0/e2/f2a0e2abaa5b3853f9cdfec4ec07cb8b.jpg','2025-04-17 22:50:19',''),(63,'','','https://i.pinimg.com/474x/e1/da/2f/e1da2f61e0c58aba787d670ce7246306.jpg','2025-04-17 22:50:33',''),(64,'','','https://i.pinimg.com/236x/8d/b9/af/8db9af1e1548c72ddaa3101d869e79c9.jpg','2025-04-17 22:50:42',''),(65,'','','https://i.pinimg.com/236x/f8/7b/0a/f87b0a9bfb86ac4dcb4a5ca451d05ef4.jpg','2025-04-17 22:50:49',''),(66,'','','https://i.pinimg.com/236x/37/48/63/374863400a00703305fa6cfa5c68ed6a.jpg','2025-04-17 22:51:01',''),(67,'','','https://i.pinimg.com/474x/1c/36/08/1c360807bf0bf7edb4e8b2c3ce446ede.jpg','2025-04-17 22:51:06',''),(68,'','','https://i.pinimg.com/236x/f3/22/f1/f322f13d906ff888f670148f6047143f.jpg','2025-04-17 22:51:16',''),(69,'','','https://i.pinimg.com/236x/80/65/77/8065775deaeaf48edc6e8340742161ea.jpg','2025-04-17 22:51:29',''),(70,'','','https://i.pinimg.com/236x/e9/60/ee/e960ee12f76358b83ef5ebcf81f12e5a.jpg','2025-04-17 22:51:44',''),(71,'','','https://i.pinimg.com/474x/1a/71/20/1a7120f2865decd221d6b3abba2485fd.jpg','2025-04-17 22:52:02',''),(72,'','','https://i.pinimg.com/236x/80/89/eb/8089eb4ef034ef508990a0c2b636962c.jpg','2025-04-17 22:52:14',''),(73,'Interstellar','','https://i.pinimg.com/236x/f5/0d/7c/f50d7cd2bd573c3d1be063f4eb8daf5f.jpg','2025-04-17 22:52:25',''),(74,'','','https://i.pinimg.com/474x/23/48/e3/2348e33d0706174f89bdbd35e42642b0.jpg','2025-04-17 22:52:35',''),(75,'','','https://i.pinimg.com/236x/a6/ab/45/a6ab459d33e447637cd44218a3bfde11.jpg','2025-04-17 22:52:47',''),(76,'','','https://i.pinimg.com/236x/91/0a/44/910a44d0d7f4aec58934d46ef4935ffa.jpg','2025-04-17 22:53:58',''),(77,'','','https://i.pinimg.com/236x/1d/46/21/1d4621118704e2c672a2251e87d5e728.jpg','2025-04-17 22:54:06',''),(78,'','','https://i.pinimg.com/236x/3d/de/7a/3dde7a8b37aad61ee62d603139efe379.jpg','2025-04-17 22:54:38',''),(79,'','','https://i.pinimg.com/236x/40/33/9c/40339c02e4b9be6ee63447ec786185ed.jpg','2025-04-17 22:55:01',''),(80,'asda','','https://i.pinimg.com/474x/5e/c2/76/5ec276d0828e6f2b3a07a01a06d59d68.jpg','2025-04-18 22:42:28','5'),(81,'','','https://i.pinimg.com/474x/fd/8d/fe/fd8dfe811a559f05d81dfc370fdc53d2.jpg','2025-04-18 22:53:23',''),(83,'','','https://i.pinimg.com/236x/1f/b7/09/1fb70986806fdb27d68e036d4a713a24.jpg','2025-04-18 22:53:40','0'),(84,'','','https://i.pinimg.com/474x/8d/03/2a/8d032a5d425cf59849184a85506c4bb2.jpg','2025-04-18 22:53:50',''),(85,'','','https://i.pinimg.com/236x/dc/10/42/dc1042dbc14a25a0219ac1fbfb7aa26c.jpg','2025-04-18 22:53:59','9'),(86,'','','https://i.pinimg.com/236x/12/9c/2c/129c2c568ffda8f2c5f43770bfa9b9d4.jpg','2025-04-18 22:54:47',''),(87,'','','https://i.pinimg.com/474x/2d/3f/bf/2d3fbfebcf6269ddb784576efb74c566.jpg','2025-04-18 22:54:57',''),(88,'','','https://i.pinimg.com/236x/3d/b9/d7/3db9d7ac9cc523b6c2e9632eaf514c6a.jpg','2025-04-18 22:55:05',''),(89,'','','https://i.pinimg.com/236x/59/a9/16/59a916db295c8921f10fc3de8c7bc0d6.jpg','2025-04-18 22:55:14',''),(90,'','','https://i.pinimg.com/236x/cc/62/63/cc6263b2b10fcf2883214e3d4aeb7ff1.jpg','2025-04-18 22:55:23',''),(91,'','','https://i.pinimg.com/236x/2e/f8/8d/2ef88dc573848cc54aebf5b24f0b069f.jpg','2025-04-18 22:55:29',''),(92,'','','https://i.pinimg.com/474x/10/85/51/108551f63c6648e87561d58335c786bf.jpg','2025-04-18 22:55:42',''),(94,'asdwdsasd','asd','https://i.pinimg.com/236x/d1/9a/b8/d19ab80dedf79fbf2464fedf0f758e7f.jpg','2025-04-19 12:35:08',''),(95,'','https://i.pinimg.com/236x/5e/66/69/5e6669bbfae08bc7b99ba896720afdda.jpghttps://i.pinimg.com/236x/5e/66/69/5e6669bbfae08bc7b99ba896720afdda.jpghttps://i.pinimg.com/236x/5e/66/69/5e6669bbfae08bc7b99ba896720afdda.jpghttps://i.pinimg.com/236x/5e/66/69/5e6669bbfae08bc7b99ba896720afdda.jpghttps://i.pinimg.com/236x/5e/66/69/5e6669bbfae08bc7b99ba896720afdda.jpghttps://i.pinimg.com/236x/5e/66/69/5e6669bbfae08bc7b99ba896720afdda.jpg','https://i.pinimg.com/236x/5e/66/69/5e6669bbfae08bc7b99ba896720afdda.jpg','2025-04-19 12:35:29',''),(97,'','','https://i.pinimg.com/236x/0f/4b/56/0f4b568fe146f1b7381cd890449fbc35.jpg','2025-04-19 13:31:12',''),(98,'','','https://i.pinimg.com/236x/14/78/4a/14784a7462fcaf23cf9c33802bd28634.jpg','2025-04-19 13:31:19',''),(99,'','','https://i.pinimg.com/236x/eb/d7/91/ebd7919965166e1e434bf6bef3c7bf80.jpg','2025-04-19 13:31:23',''),(100,'','','https://i.pinimg.com/736x/1a/e6/13/1ae613fb35d02fca81a524eff61d9d60.jpg','2025-04-19 13:31:28',''),(102,'','','https://i.pinimg.com/474x/07/3e/b0/073eb0895d5c4e8a38083697be23acb5.jpg','2025-04-19 13:32:31',''),(103,'','','https://i.pinimg.com/474x/25/ac/32/25ac32b4ad46014caec5d88ff62c0f3d.jpg','2025-04-19 13:32:43',''),(104,'','','https://i.pinimg.com/474x/8a/88/83/8a88837dff37e31ae9bf3f3611b49927.jpg','2025-04-19 13:32:55',''),(106,'','','https://i.pinimg.com/236x/37/6e/69/376e693399ca0be6afeeffacd30782e4.jpg','2025-04-22 18:31:20',''),(107,'','','https://i.pinimg.com/236x/32/4c/93/324c9328a4f2d769e0bb6578cc30ed05.jpg','2025-04-22 18:38:35',''),(108,'No future','','https://i.pinimg.com/236x/0f/0b/fb/0f0bfb1a858184afc201994a0c8f1547.jpg','2025-04-22 18:45:03','');
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `imagens_pastas`
--

DROP TABLE IF EXISTS `imagens_pastas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `imagens_pastas` (
  `imagem_id` int NOT NULL,
  `pasta_id` int NOT NULL,
  PRIMARY KEY (`imagem_id`,`pasta_id`),
  KEY `pasta_id` (`pasta_id`),
  CONSTRAINT `imagens_pastas_ibfk_1` FOREIGN KEY (`imagem_id`) REFERENCES `imagens` (`id`),
  CONSTRAINT `imagens_pastas_ibfk_2` FOREIGN KEY (`pasta_id`) REFERENCES `pastas` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens_pastas`
--

LOCK TABLES `imagens_pastas` WRITE;
/*!40000 ALTER TABLE `imagens_pastas` DISABLE KEYS */;
/*!40000 ALTER TABLE `imagens_pastas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `pastas`
--

DROP TABLE IF EXISTS `pastas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `pastas` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(255) NOT NULL,
  `parent_id` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `parent_id` (`parent_id`),
  CONSTRAINT `pastas_ibfk_1` FOREIGN KEY (`parent_id`) REFERENCES `pastas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `pastas`
--

LOCK TABLES `pastas` WRITE;
/*!40000 ALTER TABLE `pastas` DISABLE KEYS */;
/*!40000 ALTER TABLE `pastas` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-23 22:14:54
