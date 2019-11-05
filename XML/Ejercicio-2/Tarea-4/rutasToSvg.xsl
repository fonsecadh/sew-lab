<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:svg="http://www.w3.org/2000/svg">
<xsl:output method="xml" encoding="UTF-8" standalone="yes"/>
<xsl:template match="/">
    <svg>

        <polygon>
            <xsl:attribute name="points">                
                <!-- Ruta con índice específico -->
                <xsl:variable name="selRuta" select="rutas/ruta[1]"/>
                <xsl:value-of select="$selRuta/direccion_inicio"/>
                <xsl:text>,</xsl:text>
                <xsl:value-of select="$selRuta/coordernadas//@altitud"/>
                <xsl:text> </xsl:text>
                <xsl:for-each select="$selRuta/hitos/hito">
                    <xsl:value-of select="distanciaHitoAnterior"/>
                    <xsl:text>,</xsl:text>
                    <xsl:value-of select="coordernadas//@altitud"/>
                    <xsl:text> </xsl:text>
                </xsl:for-each>

            </xsl:attribute>
        </polygon>

    </svg>
</xsl:template>
</xsl:stylesheet>
