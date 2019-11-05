<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xsl:stylesheet version="1.0" 
				xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
				xmlns:svg="http://www.w3.org/2000/svg">
<xsl:output method="xml" encoding="UTF-8" standalone="yes"/>
<xsl:template match="/">
	<svg>
        <xsl:for-each select="rutas//ruta">
            <!-- This part below is wrong -->
			<xsl:variable name="inicioRuta" select="{distanciaHitoAnterior}, {coordenadas//@altitud}"/>	
			<xsl:for-each select="hitos//hito">					
			</xsl:for-each>
			<polygon points=""/>
		</xsl:for-each>
	</svg>
</xsl:template>
</xsl:stylesheet>
