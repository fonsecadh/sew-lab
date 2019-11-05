<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xsl:stylesheet version="1.0" 
				xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
				xmlns:kml="http://www.opengis.net/kml/2.2">
<xsl:output method="xml" encoding="UTF-8" standalone="yes"/>
<xsl:template match="/">
	<kml>
		<Document>
			<xsl:for-each select="rutas/ruta">
				<Placemark>
					<name>
						<xsl:value-of select="nombre"/>
					</name>
					<LineString>
						<extrude>1</extrude>
						<tessellate>1</tessellate>
						<coordinates>
							<xsl:value-of select="coordenadas//@longitud"/>
							<xsl:text>,</xsl:text>
							<xsl:value-of select="coordenadas//@latitud"/>
							<xsl:text>,</xsl:text>
							<xsl:value-of select="coordenadas//@altitud"/>
							<xsl:for-each select="hitos/hito">
								<xsl:value-of select="coordenadas//@longitud"/>
								<xsl:text>,</xsl:text>
								<xsl:value-of select="coordenadas//@latitud"/>
								<xsl:text>,</xsl:text>
								<xsl:value-of select="coordenadas//@altitud"/>
							</xsl:for-each>
						</coordinates>
						<altitudeMode>relativeToGround</altitudeMode>
					</LineString>
					<Style>
						<LineStyle>
							<color>#FF0006</color>
							<width>6</width>
						</LineStyle>
					</Style>
				</Placemark>
			</xsl:for-each>
		</Document>
	</kml>
</xsl:template>
</xsl:stylesheet>
