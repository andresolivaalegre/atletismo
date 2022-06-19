-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 19-06-2022 a las 20:15:18
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.5

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tfgAtletismo`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listado_atletas`
--

CREATE TABLE `listado_atletas` (
  `id_grupo` int(11) NOT NULL,
  `id_entrenador` int(11) NOT NULL,
  `id_atleta` int(11) NOT NULL,
  `nombre` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `listado_atletas`
--

INSERT INTO `listado_atletas` (`id_grupo`, `id_entrenador`, `id_atleta`, `nombre`) VALUES
(16, 1, 44, 'Paula Ruiz'),
(17, 1, 45, 'Sandra Carmona'),
(18, 1, 46, 'Rafael Nadal'),
(19, 1, 47, 'Pau Gasol'),
(20, 1, 48, 'Iker Casillas'),
(21, 1, 49, 'Marc Márquez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `listado_entrenamientosp`
--

CREATE TABLE `listado_entrenamientosp` (
  `id_entrenamiento` int(11) NOT NULL,
  `id_usuario` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `rodaje` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`rodaje`)),
  `pista` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`pista`)),
  `gimnasio` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`gimnasio`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `listado_entrenamientosp`
--

INSERT INTO `listado_entrenamientosp` (`id_entrenamiento`, `id_usuario`, `fecha`, `rodaje`, `pista`, `gimnasio`) VALUES
(5446, 44, '2022-06-22', '{\"km\":\"3\",\"tiempo\":\"10\",\"comentarios\":\"Cansada\"}', '{\"series\":{\"numero\":\"5\",\"distancia\":\"300\",\"tiempo\":\"500\",\"descanso\":\"2\"},\"multisalto\":{\"segundosTriple\":\"20\",\"numero\":\"5\",\"descanso\":\"1\"},\"comentarios\":\"Entrenamiento duro pero buenas sensaciones\"}', '{\"tipo\":{\"pectoral\":{\"repeticiones\":\"4x8\",\"kg\":\"20\",\"descanso\":\"1\"},\"biceps\":{\"repeticiones\":\"4x10\",\"kg\":\"5\",\"descanso\":\"1.5\"},\"cuadriceps\":{\"repeticiones\":\"4x6\",\"kg\":\"60\",\"descanso\":\"1\"}},\"comentarios\":\"Pocos kilos en pectoral\"}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` varchar(150) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `entrenador` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `password`, `email`, `entrenador`) VALUES
(1, 'Jaime Sanchez ', 'jaime123', 'jaimeSanchez@gmail.com', 1),
(41, 'Pedro Jimenez', 'pedro123', 'pedrojimenez@gmail.com', 1),
(42, 'Andrés Oliva', 'andres123', 'andresoliva@gmail.com', 1),
(43, 'Julia Rodriguez', 'julia123', 'juliarodriguez@gmail.com', 1),
(44, 'Paula Ruiz', 'paula123', 'paularuiz@gmail.com', 0),
(45, 'Sandra Carmona', 'sandra', 'sandracarmona@gmail.com', 0),
(46, 'Rafael Nadal', 'rafa123', 'rafanadal@gmail.com', 0),
(47, 'Pau Gasol', 'pau123', 'paugasol@gmail.com', 0),
(48, 'Iker Casillas', 'iker123', 'ikercasillas@gmail.com', 0),
(49, 'Marc Márquez', 'marc123', 'marcmarquez@gmail.com', 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `listado_atletas`
--
ALTER TABLE `listado_atletas`
  ADD PRIMARY KEY (`id_grupo`),
  ADD KEY `id_entrenador` (`id_entrenador`),
  ADD KEY `id_atleta` (`id_atleta`);

--
-- Indices de la tabla `listado_entrenamientosp`
--
ALTER TABLE `listado_entrenamientosp`
  ADD PRIMARY KEY (`id_entrenamiento`),
  ADD KEY `id_usuario` (`id_usuario`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `listado_atletas`
--
ALTER TABLE `listado_atletas`
  MODIFY `id_grupo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `listado_entrenamientosp`
--
ALTER TABLE `listado_entrenamientosp`
  MODIFY `id_entrenamiento` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5447;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=50;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `listado_atletas`
--
ALTER TABLE `listado_atletas`
  ADD CONSTRAINT `listado_atletas_ibfk_1` FOREIGN KEY (`id_entrenador`) REFERENCES `users` (`id`) ON UPDATE CASCADE,
  ADD CONSTRAINT `listado_atletas_ibfk_2` FOREIGN KEY (`id_atleta`) REFERENCES `users` (`id`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `listado_entrenamientosp`
--
ALTER TABLE `listado_entrenamientosp`
  ADD CONSTRAINT `listado_entrenamientosp_ibfk_2` FOREIGN KEY (`id_usuario`) REFERENCES `users` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
