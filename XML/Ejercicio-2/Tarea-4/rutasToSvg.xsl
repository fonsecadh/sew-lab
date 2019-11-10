<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<xsl:stylesheet version="1.0" 
    xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
    xmlns:svg="http://www.w3.org/2000/svg">
<xsl:output method="xml" encoding="UTF-8" standalone="yes"/>
<xsl:template match="/">
    <svg height="1000">

        <polyline style="fill:white;stroke:red;stroke-width:4">
            <xsl:attribute name="points">                
                <!-- Ruta con índice específico -->
                <xsl:variable name="selRuta" select="rutas/ruta[1]"/>
                <xsl:text>0,</xsl:text>
                <xsl:value-of select="$selRuta/coordenadas/@altitud"/>
                <xsl:text> </xsl:text>
                <xsl:for-each select="$selRuta/hitos/hito">
                    <xsl:value-of select="distanciaHitoAnterior"/>
                    <xsl:text>,</xsl:text>
                    <xsl:value-of select="coordenadas/@altitud"/>
                    <xsl:text> </xsl:text>
                </xsl:for-each>
                <xsl:text>0,</xsl:text>
                <xsl:value-of select="$selRuta/coordenadas/@altitud"/>
                <xsl:text> </xsl:text>
            </xsl:attribute>
        </polyline>

        <xsl:variable name="current" select="rutas/ruta[1]"/>
        <text x="0" y="500" style="writing-mode: tb; glyph-orientation-vertical: 0;">
            <xsl:value-of select="$current/direccion_inicio"/>
        </text>
        <xsl:for-each select="$current/hitos/hito">
            <text y="500" style="writing-mode: tb; glyph-orientation-vertical: 0;">
                <xsl:attribute name="x">
                    <xsl:value-of select="distanciaHitoAnterior"/>
                </xsl:attribute>
                <xsl:value-of select="nombre"/>
            </text>
        </xsl:for-each>

    </svg>
</xsl:template>
</xsl:stylesheet>
