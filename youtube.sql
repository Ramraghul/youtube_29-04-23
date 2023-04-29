-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 29, 2023 at 08:43 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `youtube`
--

-- --------------------------------------------------------

--
-- Table structure for table `url_master`
--

CREATE TABLE `url_master` (
  `ID` int(150) NOT NULL,
  `USER_ID` int(150) NOT NULL,
  `TITLE` text NOT NULL,
  `URL` longtext NOT NULL,
  `CREATED_ON` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `url_master`
--

INSERT INTO `url_master` (`ID`, `USER_ID`, `TITLE`, `URL`, `CREATED_ON`) VALUES
(12, 28, 'Peter Fight', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/ioeoCbDiMvE?controls=0&autoplay=1&loop=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>', '2023-04-28 08:29:14'),
(13, 28, 'Justin Bieber', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/kffacxfA7G4?controls=0&autoplay=1&loop=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>', '2023-04-28 08:30:39'),
(37, 30, 'Pacific Rim', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/fRKviUgMP4o?autoplay=1&loop=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>', '2023-04-29 09:50:04'),
(38, 30, 'Workout', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/blgwRBtWqbA?autoplay=1&loop=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>', '2023-04-29 09:51:15'),
(39, 30, 'Car', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/Rs_5y9xYb6o?autoplay=1&loop=1&hd=1\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>', '2023-04-29 09:53:02'),
(43, 30, 'FF', '<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/aDTO2TDTz5E\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" allowfullscreen></iframe>', '2023-04-29 12:09:25');

-- --------------------------------------------------------

--
-- Table structure for table `user_master`
--

CREATE TABLE `user_master` (
  `ID` int(10) NOT NULL,
  `USER_NAME` varchar(150) NOT NULL,
  `EMAIL` varchar(255) NOT NULL,
  `PASSWORD` varchar(255) NOT NULL,
  `CREATED_ON` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `user_master`
--

INSERT INTO `user_master` (`ID`, `USER_NAME`, `EMAIL`, `PASSWORD`, `CREATED_ON`) VALUES
(28, 'Raghul', 'User@gmail.com', '$2b$10$an4RVgAOPgSP.fJ76KE6MeYtGYiFFqSaX8MPQ43PBRT630zfOej1W', '2023-04-28 08:28:23'),
(29, 'Ram Charan', 'User1@gmail.com', '$2b$10$i1i08wwZgmtgHnlXomBlYeyEtuH/sZR1wHUIdZb8lx0LnQs8S3p76', '2023-04-28 08:31:39'),
(30, 'New User', 'test@gmail.com', '$2b$10$eCeCdPFw5A2Af8cx9e/mhekddjFrQsQmno4LI493DAhblby28O5lq', '2023-04-28 17:12:36');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `url_master`
--
ALTER TABLE `url_master`
  ADD PRIMARY KEY (`ID`);

--
-- Indexes for table `user_master`
--
ALTER TABLE `user_master`
  ADD PRIMARY KEY (`ID`) USING BTREE,
  ADD UNIQUE KEY `EMAIL` (`EMAIL`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `url_master`
--
ALTER TABLE `url_master`
  MODIFY `ID` int(150) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=44;

--
-- AUTO_INCREMENT for table `user_master`
--
ALTER TABLE `user_master`
  MODIFY `ID` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
