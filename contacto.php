<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<title>HTML5</title>
	<meta name="theme-color" content="#c77324" />
	<meta http-equiv="cleartype" content="on">
    <meta name="MobileOptimized" content="320">
    <meta name="HandheldFriendly" content="True">
    <meta name="apple-mobile-web-app-capable" content="yes">
	<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
<script src="http://maps.google.com/maps/api/js?sensor=true"></script>
<link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/themes/smoothness/jquery-ui.css" />
<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.3/jquery-ui.min.js"></script>
	<script src="scroll.js"></script>
	
	<script src="gmap3.min.js"></script>	 
  <script src="mapa.js"></script>
	<link rel="stylesheet" href="normalize.css">
	<link rel="stylesheet" href="estilo.css">
	<link rel="stylesheet" href="style.css">
	<link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
	<link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
	
	
</head>
<body >
	<?php
	include("menu.php");
	?>
	

	 <article id="map_canvas"></article>
	 			<div class="llegar2" id="llegar2">
				<p id="llegar1">Deseas saber como llegar da clic en el boton de abajo</p>
				<input type="button" value="Como llegar" id="llegar"></div>
	 			
	<section id="seccion1">
			<article>
				<form action="">
				<label for="" class="datos">Nombre</label >
				<input type="text" placeholder="Nombre">
				<label for="" class="datos">Teléfono</label>
				<input type="text" placeholder="Teléfono">
				<label for="" class="datos">Correo Electrónico</label>
				<input type="text" placeholder="Correo">
				<label for="" class="datos">Comentarios</label>
				<textarea name="text" placeholder="Escribe aqui los comentarios"class="datos"id="" cols="30" rows="10"></textarea>
				<button>Enviar</button>
				
				</form>
				
			</article>
		
			
	
	 </section>
	
<footer>
		<div>
			&copy; Derechos Reservados
		</div>
	</footer>
	


	</body>
	</html>
