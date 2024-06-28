-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Hôte : localhost:3306
-- Généré le : ven. 28 juin 2024 à 20:04
-- Version du serveur : 8.0.30
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `testdb`
--

-- --------------------------------------------------------

--
-- Structure de la table `habitant`
--

CREATE TABLE `habitant` (
  `id` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `lastname` varchar(100) NOT NULL,
  `age` int NOT NULL,
  `sexe` varchar(100) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `quartier` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Déchargement des données de la table `habitant`
--

INSERT INTO `habitant` (`id`, `name`, `lastname`, `age`, `sexe`, `ville`, `quartier`) VALUES
(1, 'A', 'a', 12, 'Homme', 'Brazzaville', 'Bacongo'),
(2, 'A', 'B', 15, 'Femme', 'Brazzaville', 'Moungali'),
(3, 'jk', 'kl', 11, 'Femme', 'Brazzaville', 'Filou'),
(4, 'ol', 'lk', 14, 'Femme', 'Pointe-noire', 'Co'),
(5, 'lkhlk', 'mlkhl', 20, 'Homme', 'Brazzaville', 'irèièrr'),
(6, 'uugj', 'yu', 30, 'Homme', 'lmlk', 'gugjug');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `habitant`
--
ALTER TABLE `habitant`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `habitant`
--
ALTER TABLE `habitant`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
