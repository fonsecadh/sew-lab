<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="html" version="5.0" encoding="utf-8" indent="yes"/>
<xsl:template match="rutas">
<html>
	<head>
		<title>Ejercicio 2 Tarea 1</title>
		<meta name="description" content="Ejercicio 2 Tarea 1" />
		<meta name="author" content="UO258318" />				
		<!-- <link rel="stylesheet" type="text/css" href="rutas.css"/> -->
	</head>
	<body>
		<header>
			<h1>Rutas por Japón</h1>
		</header>
		<main>
			<xsl:for-each select="ruta">
				<section class="ruta">
					<h2>
						<xsl:value-of select="nombre"/>
					</h2>
					<p>
						Tipo de ruta: <xsl:value-of select="tipo"/>
					</p>
					<p>
						Transporte: <xsl:value-of select="transporte"/>
					</p>
					<p>
						Fecha de inicio de la ruta: <xsl:value-of select="fecha_inicio"/>
					</p>
					<p>
						Hora de inicio de la ruta: <xsl:value-of select="hora_inicio"/>
					</p>
					<p>
						Duración: <xsl:value-of select="duracion"/>
					</p>
					<p>
						Agencia: <xsl:value-of select="agencia"/>
					</p>
					<p>
						Descripción: <xsl:value-of select="descripcion"/>
					</p>
					<p>
						Personas adecuadas: <xsl:value-of select="personas_adecuadas"/>
					</p>
					<p>
						Lugar de inicio de la ruta: <xsl:value-of select="lugar_inicio"/>
					</p>
					<p>
						Dirección de inicio de la ruta: <xsl:value-of select="direccion_inicio"/>
					</p>
					<p>
						Coordenadas:						
					</p>
					<ul>
						<li>Longitud: <xsl:value-of select="coordenadas//@longitud"/></li>
						<li>Latitud: <xsl:value-of select="coordenadas//@latitud"/></li>
						<li>Altitud: <xsl:value-of select="coordenadas//@altitud"/></li>
					</ul>
					<p>
						Referencias:
					</p>
					<ul class="referencias">
						<xsl:for-each select="referencias//referencia">
                            <li>
                                <a>
                                    <xsl:attribute name="href">
                                        <xsl:value-of select="@url"/>
                                    </xsl:attribute>
                                    <xsl:value-of select="."/>
                                </a>                                
							</li>
						</xsl:for-each>
					</ul>
					<p>
						Recomendación: <xsl:value-of select="recomendacion"/>
					</p>
					<xsl:for-each select="hitos//hito">
						<section class="hito">
							<h3>
								<xsl:value-of select="nombre"/>
							</h3>
							<p>
								Descripción: <xsl:value-of select="descripcion"/>
							</p>							
							<p>
								Coordenadas:						
							</p>
							<ul>
								<li>Longitud: <xsl:value-of select="coordenadas//@longitud"/></li>
								<li>Latitud: <xsl:value-of select="coordenadas//@latitud"/></li>
								<li>Altitud: <xsl:value-of select="coordenadas//@altitud"/></li>
							</ul>
							<p>
								Distancia respecto al hito anterior: <xsl:value-of select="distanciaHitoAnterior"/>
							</p>
							<p>
								Fotografías: 
							</p>
							<ul class="fotografias">
								<xsl:for-each select="fotografias//fotografia">									
									<li>
										<img>											
                                            <xsl:attribute name="src">
                                                <xsl:value-of select="@src"/>
                                            </xsl:attribute>
                                            <xsl:value-of select="@titulo"/>                                        
										</img>
									</li>
								</xsl:for-each>
							</ul>
							<p>
								Vídeos: 
							</p>
							<ul class="videos">
								<xsl:for-each select="videos//video">									
									<li>
								        <a>
                                            <xsl:attribute name="href">
                                                <xsl:value-of select="@src"/>
                                            </xsl:attribute>
                                            <xsl:value-of select="@titulo"/>
                                        </a>
                                    </li>
								</xsl:for-each>
							</ul>	
						</section>
					</xsl:for-each>
				</section>
			</xsl:for-each>
		</main>
	</body>
</html>
</xsl:template>
</xsl:stylesheet>
