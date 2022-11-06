-- MySQL dump 10.13  Distrib 8.0.30, for Win64 (x86_64)
--
-- Host: localhost    Database: management_meetings
-- ------------------------------------------------------
-- Server version	8.0.30

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
-- Table structure for table `meetings`
--

DROP TABLE IF EXISTS `meetings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meetings` (
  `id` int NOT NULL AUTO_INCREMENT,
  `meeting_code` int NOT NULL,
  `meeting_start_date` datetime DEFAULT NULL,
  `meeting_end_date` datetime DEFAULT NULL,
  `meeting_description` varchar(200) DEFAULT NULL,
  `meeting_room` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `meetings_vs_teams_idx` (`meeting_code`)
) ENGINE=InnoDB AUTO_INCREMENT=39 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meetings`
--

LOCK TABLES `meetings` WRITE;
/*!40000 ALTER TABLE `meetings` DISABLE KEYS */;
INSERT INTO `meetings` VALUES (4,4,'2022-10-15 07:03:42','2022-10-15 08:03:42','life1style meeting sec2','Holon1 room'),(5,4,'2022-10-15 07:03:42','2022-10-15 09:03:42','life1style meeting sec2','Holon1 room'),(6,1,'2022-10-15 07:03:42','2022-10-15 10:03:42','life1style meeting sec2','Holon1 room'),(7,1,'2022-10-15 07:03:42','2022-10-15 11:03:42','life1style meeting sec2','Holon1 room'),(8,1,'2022-10-15 07:03:42','2022-10-15 13:03:42','life1style meeting sec2','Holon1 room'),(9,3,'2022-10-15 07:03:42','2022-10-15 14:03:42','232133','23232'),(10,2,'2022-10-15 07:03:42','2022-10-15 15:03:42','232133','23232'),(11,1,'2022-10-15 07:03:42','2022-10-15 16:03:42','232133','23232'),(12,1,'2022-10-15 07:03:42','2022-10-15 17:03:42','life1style meeting sec2','Holon1 room'),(13,1,'2022-10-15 07:03:42','2022-10-15 18:03:42','life1style meeting sec2','Holon1 room'),(14,2,'2022-10-15 07:03:42','2022-10-15 19:03:42','life1style meeting sec2','Holon1 room'),(15,2,'2022-10-18 07:03:42','2022-10-18 20:03:42','life1style meeting sec7','roomIL'),(16,20,'2022-10-18 07:03:42','2022-10-18 22:03:42','life1style meeting sec7','roomIL'),(17,1,'2022-11-09 00:00:00','2022-11-24 00:00:00','wedwwdwd','TLV'),(18,2,'2022-11-16 00:00:00','2022-11-23 00:00:00','new','TLV'),(19,3,'2022-12-01 00:00:00','2023-11-29 00:00:00','Hello world','BeerSheva'),(20,2,'2022-11-03 14:40:00','2022-11-03 15:41:00','ewqe','eww'),(21,1,'2022-11-03 14:41:00','2022-11-05 18:57:00','33','3333'),(22,1,'2022-11-06 17:00:00','2022-11-09 19:13:00','eeeeeeeeee','eeeeeeee'),(23,4,'2022-11-03 17:06:00','2022-11-08 18:06:00','sdfsdfdsfd','fdfdsfdsf'),(24,5,'2022-11-03 17:07:00','2022-11-03 21:07:00','33333','33333'),(25,6,'2022-11-15 19:07:00','2022-12-01 20:07:00','gdfddgf','gdfgdfgdffg'),(26,7,'2023-01-11 19:07:00','2023-03-09 15:07:00','rrrrrr','rrrrrrrrrr'),(27,8,'2023-10-04 15:08:00','2024-12-17 15:08:00','rege','gege'),(28,9,'2022-11-21 15:08:00','2022-12-01 15:08:00','dfsdf','fsdfsd'),(29,10,'2022-11-18 15:08:00','2022-12-01 15:09:00','dssds','dfsdfsd'),(30,5,'2022-11-15 11:10:00','2022-11-16 12:12:00','dssdddddddd','dddddddd'),(31,4,'2022-11-06 11:12:00','2022-11-06 12:12:00','444','4444'),(32,1,'2022-11-13 12:00:00','2022-11-13 13:00:00','eeeeeeeeeeeeeee','eeeeeeeeeeeeeeee'),(33,4,'2022-11-06 11:24:00','2022-11-06 12:24:00','444','44'),(34,1,'2022-11-06 12:00:00','2022-11-06 13:30:00','333333','3333'),(35,20,'2030-11-06 07:03:42','2030-11-06 07:03:42','life1style meeting sec7','roomIL'),(36,1,'2033-01-06 12:14:00','2034-03-27 12:14:00','sdsdasd','sadad'),(37,1,'2040-04-10 12:24:00','2041-05-10 08:00:00','2312312','312312'),(38,1,'2055-10-06 13:10:00','2055-10-06 14:10:00','czczcz','zxczxczxc');
/*!40000 ALTER TABLE `meetings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teams`
--

DROP TABLE IF EXISTS `teams`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teams` (
  `id` int NOT NULL AUTO_INCREMENT,
  `team_name` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teams`
--

LOCK TABLES `teams` WRITE;
/*!40000 ALTER TABLE `teams` DISABLE KEYS */;
INSERT INTO `teams` VALUES (1,'UI Team'),(2,'Mobile Team'),(3,'React Team'),(4,'JS Team'),(5,'Python Team'),(6,'Angular Team'),(7,'Php Team'),(8,'BootStrap Team'),(9,'JQuery Team'),(10,'Html Team');
/*!40000 ALTER TABLE `teams` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-06 16:08:13
