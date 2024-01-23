-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 23, 2024 at 01:44 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `perfecto`
--

-- --------------------------------------------------------

--
-- Table structure for table `admintable`
--

CREATE TABLE `admintable` (
  `AdminID` varchar(4) NOT NULL,
  `FirstName` text NOT NULL,
  `LastName` text NOT NULL,
  `Username` text NOT NULL,
  `Password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `producttable`
--

CREATE TABLE `producttable` (
  `ProductRef` int(11) NOT NULL,
  `ProductName` text NOT NULL,
  `Description` text NOT NULL,
  `Category` text NOT NULL,
  `Price` float NOT NULL,
  `ProductImg` text NOT NULL,
  `SupplierID` varchar(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `producttable`
--

INSERT INTO `producttable` (`ProductRef`, `ProductName`, `Description`, `Category`, `Price`, `ProductImg`, `SupplierID`) VALUES
(1, 'Horse', 'Glass Horse', 'Interior', 24.95, 'images/sculpt/image.jpg', 'S001'),
(2, 'Elephant', 'Bronze Elephant', 'Exterior', 639.95, 'images/sculpt/image1.jpg', 'S002'),
(3, 'Dolphins', 'Glass Dolphins', 'Interior', 125, 'images/scult/image2.jpg', 'S001'),
(4, 'Tiger', 'Stone Tiger', 'Exterior', 229.95, 'images/sculpt/image3.jpg', 'S002'),
(5, 'Eagle', 'Wooden Eagle', 'Exterior', 139.95, 'images/sculpt/image4.jpg', 'S002'),
(6, 'Giraffe', 'Glass Giraffe', 'Interior', 39.95, 'images/sculpt/image5.jpg', 'S001'),
(7, 'Panda', 'Glass Panda', 'Interior', 29.95, 'images/sculpt/image6.jpg', 'S001'),
(8, 'Polar Bear', 'Bronze Polar Bear', 'Interior', 38, 'images/sculpt/image7.jpg', 'S001'),
(9, 'Bee', 'Bronze Bee', 'Interior', 28, 'images/sculpt/image8.jpg', 'S001'),
(10, 'Lioness', 'Stone Lioness', 'Exterior', 48, 'images/sculpt/image9.jpg', 'S002');

-- --------------------------------------------------------

--
-- Table structure for table `suppliertable`
--

CREATE TABLE `suppliertable` (
  `SupplierID` varchar(4) NOT NULL,
  `SupplierName` text NOT NULL,
  `PhoneNum` varchar(11) NOT NULL,
  `Email` text NOT NULL,
  `Website` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `suppliertable`
--

INSERT INTO `suppliertable` (`SupplierID`, `SupplierName`, `PhoneNum`, `Email`, `Website`) VALUES
('S001', 'Indoor Sculptures LTD', '0121012111', 'orders@indoorsculptures.com', 'indoorsculptures.com'),
('S002', 'Outdoor Ornaments Ltd', '0321322110', 'orders@outdoorornaments.com', 'outdoorornaments.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admintable`
--
ALTER TABLE `admintable`
  ADD PRIMARY KEY (`AdminID`);

--
-- Indexes for table `producttable`
--
ALTER TABLE `producttable`
  ADD PRIMARY KEY (`ProductRef`),
  ADD KEY `SupplierID` (`SupplierID`);

--
-- Indexes for table `suppliertable`
--
ALTER TABLE `suppliertable`
  ADD PRIMARY KEY (`SupplierID`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
