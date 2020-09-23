-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 23, 2020 at 05:03 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bikes-api`
--

-- --------------------------------------------------------

--
-- Table structure for table `bikes`
--

CREATE TABLE `bikes` (
  `id` int(11) NOT NULL,
  `bike_name` varchar(50) DEFAULT NULL,
  `bike_type` varchar(255) DEFAULT NULL,
  `bike_owner` varchar(255) DEFAULT NULL,
  `bike_garage` varchar(255) DEFAULT NULL,
  `bike_image` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `bikes`
--

INSERT INTO `bikes` (`id`, `bike_name`, `bike_type`, `bike_owner`, `bike_garage`, `bike_image`) VALUES
(1, 'Vespa PTS 100', 'Vespa', 'Father Josh', 'Lapak Vespa', 'pts100.png'),
(2, 'Vespa VBB 1980', 'Vespa', 'Gery Santoso', 'Hawari 64', 'vbb80.jpg'),
(3, 'Chopper Fatbob', 'Harley Davidson', 'Ucup Danang', 'Harley Brother XXX', 'fatbob.png'),
(5, 'Thruxton 900', 'Triumph', 'Dadang Roster', 'Thruxton Family', 'thruxton900.png'),
(6, 'Royal Enfield Bobber 500', 'Boober', 'Dadang Roster', 'Royal Enfield Family', 'ry_bobber500.png'),
(7, 'Royal Enfield Himalayan', 'Adventure', 'Sekuyy', 'Royal Enfield Family', 'ry_himalayan.png'),
(8, 'Harley Sportster 48', 'Harley Davidson', 'Gery Santoso', 'Harley Family XXX', 'sportster48.jpg'),
(9, 'Vespa Super 1990', 'Vespa', 'Gery Santoso', 'Lapak Vespa', 'vespasuper90.jpg'),
(10, 'Vespa PX2000', 'Vespa', 'Hanif Prananda', 'Scootplerrr', 'px2000.jpg'),
(11, 'Vespa Excel 200', 'Vespa', 'Father Josh', 'Scootplerrr', 'excel200.jpg'),
(12, 'Californian Chopper', 'Chopper', 'Alan Max', 'Custom Chopper Garage', 'calfchopper.jpg');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `bikes`
--
ALTER TABLE `bikes`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `bikes`
--
ALTER TABLE `bikes`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
