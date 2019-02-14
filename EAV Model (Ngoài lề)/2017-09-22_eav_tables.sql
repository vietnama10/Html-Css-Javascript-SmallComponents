/*
SQLyog Ultimate v12.3.2 (64 bit)
MySQL - 10.1.21-MariaDB : Database - ci3wf
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
USE `ci3wf`;

/*Table structure for table `catalog_product` */

DROP TABLE IF EXISTS `catalog_product`;

CREATE TABLE `catalog_product` (
  `id` int(9) NOT NULL AUTO_INCREMENT,
  `sku` varchar(255) DEFAULT NULL,
  `type_id` varchar(255) DEFAULT NULL,
  `is_active` tinyint(5) DEFAULT '1',
  `sort_order` tinyint(5) DEFAULT '0',
  `visibility` tinyint(5) DEFAULT '1',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

/*Data for the table `catalog_product` */

insert  into `catalog_product`(`id`,`sku`,`type_id`,`is_active`,`sort_order`,`visibility`,`created_at`,`updated_at`) values 
(1,'sku001','simple',1,0,0,'2017-09-22 11:53:07','2017-09-22 11:53:07'),
(2,'sku002','simple',1,0,0,'2017-09-22 11:53:14','2017-09-22 11:53:14'),
(3,'sku003','configurable',1,0,1,'2017-09-22 11:53:46','2017-09-22 11:53:46');

/*Table structure for table `catalog_product_decimal` */

DROP TABLE IF EXISTS `catalog_product_decimal`;

CREATE TABLE `catalog_product_decimal` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `entity_id` int(11) DEFAULT NULL,
  `value` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `catalog_product_decimal` */

insert  into `catalog_product_decimal`(`id`,`attribute_id`,`store_id`,`entity_id`,`value`) values 
(1,3,1,1,100),
(2,3,1,2,200);

/*Table structure for table `catalog_product_int` */

DROP TABLE IF EXISTS `catalog_product_int`;

CREATE TABLE `catalog_product_int` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `entity_id` int(11) DEFAULT NULL,
  `value` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `catalog_product_int` */

/*Table structure for table `catalog_product_link` */

DROP TABLE IF EXISTS `catalog_product_link`;

CREATE TABLE `catalog_product_link` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `product_id` int(11) DEFAULT NULL,
  `linked_product_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `catalog_product_link` */

insert  into `catalog_product_link`(`id`,`product_id`,`linked_product_id`) values 
(1,3,1),
(2,3,2);

/*Table structure for table `catalog_product_text` */

DROP TABLE IF EXISTS `catalog_product_text`;

CREATE TABLE `catalog_product_text` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `entity_id` int(11) DEFAULT NULL,
  `value` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `catalog_product_text` */

insert  into `catalog_product_text`(`id`,`attribute_id`,`store_id`,`entity_id`,`value`) values 
(1,2,1,1,'Bột bánh mềm, bên trong chứa mì tôm sống ăn giòn tan…');

/*Table structure for table `catalog_product_varchar` */

DROP TABLE IF EXISTS `catalog_product_varchar`;

CREATE TABLE `catalog_product_varchar` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `attribute_id` int(11) DEFAULT NULL,
  `store_id` int(11) DEFAULT NULL,
  `entity_id` int(11) DEFAULT NULL,
  `value` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `catalog_product_varchar` */

insert  into `catalog_product_varchar`(`id`,`attribute_id`,`store_id`,`entity_id`,`value`) values 
(1,1,1,1,'Bánh Trung Thu nhân mì tôm'),
(2,1,2,1,'Noodle Mooncake'),
(3,1,1,2,'Bánh Trung Thu nhân mì tôm (lớn)'),
(4,5,1,1,'S'),
(5,5,1,2,'L');

/*Table structure for table `eav_attribute` */

DROP TABLE IF EXISTS `eav_attribute`;

CREATE TABLE `eav_attribute` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `label` varchar(255) DEFAULT NULL,
  `type` varchar(255) DEFAULT NULL,
  `is_required` tinyint(5) DEFAULT '0',
  `is_unique` tinyint(5) DEFAULT '0',
  `note` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `eav_attribute` */

insert  into `eav_attribute`(`id`,`code`,`label`,`type`,`is_required`,`is_unique`,`note`) values 
(1,'name','Name','varchar',1,0,NULL),
(2,'description','Description','text',0,0,NULL),
(3,'price','Price','decimal',1,0,NULL),
(4,'image','Image','varchar',0,0,NULL),
(5,'size','Size','varchar',0,0,NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
