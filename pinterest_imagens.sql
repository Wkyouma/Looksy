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
) ENGINE=InnoDB AUTO_INCREMENT=60 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `imagens`
--

LOCK TABLES `imagens` WRITE;
/*!40000 ALTER TABLE `imagens` DISABLE KEYS */;
INSERT INTO `imagens` VALUES (6,'asd','','https://i.pinimg.com/474x/af/14/85/af14858940bd2650cf683cba29de63ff.jpg','2025-04-14 16:22:26',''),(7,' matheuspassole','','https://i.pinimg.com/474x/64/9c/93/649c93d09d1f5d1978959d362cfb75cf.jpg','2025-04-14 16:33:36',' '),(8,'Clube','','https://i.pinimg.com/236x/87/bf/91/87bf9140e45b84cc9e043a70f5169a3f.jpg','2025-04-14 16:33:59',' '),(9,'Eva','','https://i.pinimg.com/236x/56/b7/34/56b734afb44921343093465b996a3640.jpg','2025-04-14 16:34:06',' '),(10,'Better call saul','','https://i.pinimg.com/236x/f6/ad/70/f6ad703991f2e6e841abcf5803149410.jpg','2025-04-14 16:34:15',' '),(12,'Draw','','https://i.pinimg.com/236x/e6/8d/10/e68d10e542b2e6b445149eb377476846.jpg','2025-04-14 16:34:53',''),(13,'Ilusão','','https://i.pinimg.com/474x/c6/7c/f5/c67cf5c64746dc26079f850f5a284f12.jpg','2025-04-14 16:35:09',''),(14,'psycho','','https://i.pinimg.com/236x/ab/72/b1/ab72b1b0a23aa41c6b7aeb50abcd26f0.jpg','2025-04-14 16:35:25','1'),(15,'Taxi','','https://i.pinimg.com/236x/1a/98/37/1a98374189d0385fce391c88c61c2bce.jpg','2025-04-14 16:35:59',''),(16,'Taxi','','https://i.pinimg.com/236x/f6/27/de/f627de6f0e433cb385ccc1a812563ddd.jpg','2025-04-14 16:36:10',' '),(17,'OverCore','','https://i.pinimg.com/236x/f2/48/4e/f2484e63f7e580ba1140b9e389c994da.jpg','2025-04-14 16:36:24',''),(18,'Star','','https://i.pinimg.com/236x/d4/80/29/d480297fab38203e8521318d43b2324d.jpg','2025-04-14 16:36:41',''),(20,'Anjo','','https://i.pinimg.com/236x/25/6a/f4/256af4faa5dd86bb26ce3c33df9516c6.jpg','2025-04-14 16:38:39',''),(21,'Mr.White','','https://i.pinimg.com/236x/d8/4f/c5/d84fc51213b9e5246da67f04937cb5a5.jpg','2025-04-14 16:39:01',''),(22,'Rdr2','','https://i.pinimg.com/236x/f0/29/b8/f029b87ee4ca69702ae86c965373efd5.jpg','2025-04-14 16:39:13',''),(23,'Guts','','https://i.pinimg.com/236x/3c/12/24/3c1224455c25fb195654a48d944bb02d.jpg','2025-04-14 16:39:22',''),(24,'A dream','','https://i.pinimg.com/474x/21/61/c9/2161c9babeabc08071d9f78eecd0765a.jpg','2025-04-14 16:39:40',''),(25,'Chainwsaw','','https://i.pinimg.com/236x/7c/ef/13/7cef13bab4c79117a050bc321759b29a.jpg','2025-04-14 16:40:13',''),(26,'Shinji','','https://i.pinimg.com/236x/a6/34/59/a63459d10a500cd6bce42890e932a02f.jpg','2025-04-14 16:40:39',''),(27,'Evas64','','https://i.pinimg.com/236x/01/cf/34/01cf34d629092ad27bbcb596713c0837.jpg','2025-04-14 16:40:54',''),(28,'Happy','','https://i.pinimg.com/236x/80/df/52/80df52ad63c7c565c4b52da4525eaf21.jpg','2025-04-14 16:41:10',''),(29,'Ps2','','https://i.pinimg.com/236x/26/d4/be/26d4be156fe4c2fb06def0321e4e0eff.jpg','2025-04-14 16:41:20',''),(30,'Anime','','https://i.pinimg.com/236x/8d/7d/55/8d7d55fd65a34d5d7fe8bc5dfc77c118.jpg','2025-04-14 16:41:37',''),(31,'Sla','','https://i.pinimg.com/236x/8f/9e/1f/8f9e1f18b1e13dc3e68f00d73ad04fdd.jpg','2025-04-14 16:41:55',''),(32,'RadioHead','','https://i.pinimg.com/236x/b1/42/5e/b1425ed13526d1ae4c6c8d89493505f3.jpg','2025-04-14 16:42:30',''),(33,'Placa','','https://i.pinimg.com/236x/97/f9/67/97f967874f3e834ed2047231aee54bf9.jpg','2025-04-14 16:42:39',''),(34,'Lula','','https://i.pinimg.com/236x/61/cc/5e/61cc5e991ed292fffcf723a7f1e20b35.jpg','2025-04-14 16:42:48',' '),(35,'Cyber','','https://i.pinimg.com/236x/13/c2/bb/13c2bba4d80ad6fb254942e58fb18602.jpg','2025-04-14 16:43:12','1'),(36,'Akira','','https://i.pinimg.com/236x/02/5c/24/025c247c38febf967308dddc11dcae3e.jpg','2025-04-14 16:43:27',''),(37,'Alien','','https://i.pinimg.com/236x/f5/79/11/f57911317df7b03de8b873ffae39c520.jpg','2025-04-14 16:43:39',''),(38,'Dark','','https://i.pinimg.com/474x/51/60/06/51600600243babd506bc4cc1cceabfcb.jpg','2025-04-14 16:43:57',''),(39,'Donnie','','https://i.pinimg.com/736x/da/be/5a/dabe5a55be0067346f64072b0708fcbf.jpg','2025-04-14 16:44:07',''),(40,'Piece>','','https://i.pinimg.com/236x/e5/ba/44/e5ba44bb1ebf39b76163523269a749ff.jpg','2025-04-14 16:44:16',''),(41,'','','https://i.pinimg.com/474x/f3/ec/65/f3ec65f9a3742c81f5b11b4e9f27b42e.jpg','2025-04-14 16:44:48',''),(42,'','','https://i.pinimg.com/236x/dc/2f/29/dc2f2990cbb487e294f16ab0fd9eaab3.jpg','2025-04-14 16:44:54',''),(43,'','','https://i.pinimg.com/236x/8c/55/fa/8c55fa26a81bf7e58e211f513f6861ae.jpg','2025-04-14 16:44:59',''),(44,'','','https://i.pinimg.com/236x/8c/b2/83/8cb28348512a82ed6ac8cc6c8a7a0e8f.jpg','2025-04-14 16:45:09',''),(45,'','','https://i.pinimg.com/236x/e4/c9/7e/e4c97e12e89e088220fc96a87a8358a0.jpg','2025-04-14 16:47:05',''),(46,'','','https://i.pinimg.com/236x/4d/f5/eb/4df5ebbb11c25d24a5b597300ddf7ba5.jpg','2025-04-14 16:47:10','0'),(47,'','','https://i.pinimg.com/236x/8a/c2/bf/8ac2bf9377f7aa99df99a549d12e8c8e.jpg','2025-04-14 16:47:41','0'),(48,'','','https://i.pinimg.com/236x/28/86/00/2886005f38f38800cd24dbefabe2f5b8.jpg','2025-04-14 16:47:47','1'),(49,'','','https://i.pinimg.com/474x/cd/28/70/cd2870ab9b1587bfa0fd7e92958c282c.jpg','2025-04-14 22:49:07',''),(50,'HELLO','','https://i.pinimg.com/236x/1c/eb/94/1ceb9454cb13efc1e2a43325af83c7f7.jpg','2025-04-14 22:49:41',' '),(51,'MR.robot','','https://i.pinimg.com/236x/ce/e0/58/cee0584f6c5e14c47b1378eb1a37e8e3.jpg','2025-04-14 22:52:11',''),(52,'','','https://i.pinimg.com/236x/5e/b8/27/5eb82772c8275881ecb2c73f60f87eaf.jpg','2025-04-14 22:52:29',''),(54,'Pinguim','','https://i.pinimg.com/236x/86/db/20/86db2087d10f3947a462ea61bec49fb7.jpg','2025-04-14 22:54:27',''),(55,'fofo','','https://i.pinimg.com/236x/bd/f9/f5/bdf9f50e27bd454b9e8dacee676d83ea.jpg','2025-04-14 22:55:08',''),(56,'DOENTE','','https://i.pinimg.com/474x/7c/11/e9/7c11e902635709769034e9025bb21ed7.jpg','2025-04-14 22:55:51','1'),(57,'HEHE','','https://i.pinimg.com/236x/dc/e4/0f/dce40f0988828952b80d956ffcc69f69.jpg','2025-04-15 18:48:05',''),(58,'vibes','','https://i.pinimg.com/236x/7c/27/cb/7c27cb27838e5f33c59b5beeb0887d4e.jpg','2025-04-15 18:48:17',''),(59,'Aoi Aoi','','https://i.pinimg.com/236x/0d/85/e2/0d85e2173f0a4d7a21642a1fbb335339.jpg','2025-04-15 18:48:33','');
/*!40000 ALTER TABLE `imagens` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-15 23:16:29
