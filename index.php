<!DOCTYPE html>
<html lang="es">
<head>

	<meta charset="UTF-8">
	<title>HTML5</title>
    <meta rel="canonical" href="http://www.carpinteriaprueba.esy.es">
    <meta name="theme-color" content="#c77324" />
    <meta http-equiv="cleartype" content="on">
    <meta name="MobileOptimized" content="320">
    <meta name="HandheldFriendly" content="True">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
    
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
	<link rel="stylesheet" href="normalize.css">
	<link rel="stylesheet" href="estilo.css">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<script src="bjqs.min.js"></script>
    <link rel="stylesheet" href="style.css">
        <script src="script.js"></script>
        <script src="scroll.js"></script>
</head>
<body>
	<?php
	include("menu.php");
	?>
	<div id="slider">
        <ul class="bjqs">
            <li>
                <img class="img2" src="img/uno.png" alt="" title="El mejor equipo para un trabajo de calidad" />
            </li>
            <li>
                <img class="img2" src="img/dos.jpg" alt="" title="Contamos con personal altamente capacitado" />
            </li>
            <li>
                <img class="img2" src="img/tres.jpg" alt="" title="Los mejores diseños y productos de calidad" />
            </li>
        </ul>
    </div>
    
    <section id="secvideo">
        <article id="artvideo">
            <div id="video"><iframe src="https://www.youtube.com/embed/Cj5trlcTi-Y" frameborder="0" allowfullscreen></iframe></div>
        </article>
    </section>
<footer>
        <div>
            &copy; Derechos Reservados
        </div>
    </footer>
</body>
</html>