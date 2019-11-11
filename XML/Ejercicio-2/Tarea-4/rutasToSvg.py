#!/usr/bin/python


'''
RutasToSvg - Basic programs for representing the elevation profile of
certain routes in SVG.
Copyright (C) 2019  Hugo Fonseca Diaz

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
'''



import xml.etree.ElementTree as ET


def parseXMLFile(filename):
    try:
        tree = ET.parse(filename)
        return tree.getroot()
    except FileNotFoundError:
        print("Input filename does not exist: " + filename)
        sys.exit(2)


def getSVGHeight(elem):
    maxHeight = int(elem.find("coordenadas").get("altitud"))
    for hito in elem.find("hitos"):
        if int(hito.find("coordenadas").get("altitud")) > maxHeight:
            maxHeight = int(hito.find("coordenadas").get("altitud"))
    return maxHeight + 600


def getSVGWidth(elem):
    svgWidth = 0
    for hito in elem.find("hitos"):
        svgWidth += int(hito.find("distanciaHitoAnterior").text)
    return svgWidth + 600


def getPoints(elem, svgHeight):
    # First point
    elemPoints = "10," + str(svgHeight - int(elem.find("coordenadas").get("altitud")) - 400)

    # Intermediate points
    prevDistance = 0
    for hito in elem.find("hitos"):
        elemPoints += " "
        prevDistance = int(hito.find("distanciaHitoAnterior").text) + prevDistance
        altitude = svgHeight - int(hito.find("coordenadas").get("altitud")) - 400
        elemPoints += str(prevDistance) + "," + str(altitude)
        
    return elemPoints


def setSVGTextsForRoute(elem, svgHeight, elevProfile):
    # First point
    svgText = ET.SubElement(elevProfile, "text")
    svgText.set("x", str(10))
    svgText.set("y", str(svgHeight - 400))
    svgText.set("style", "writing-mode: tb; glyph-orientation-vertical: 0;")
    svgText.text = str(elem.find("direccion_inicio").text)

    # Intermediate points
    prevDistance = 0
    for hito in elem.find("hitos"):
        prevDistance = int(hito.find("distanciaHitoAnterior").text) + prevDistance
        svgText = ET.SubElement(elevProfile, "text")
        svgText.set("x", str(prevDistance))
        svgText.set("y", str(svgHeight - 400))
        svgText.set("style", "writing-mode: tb; glyph-orientation-vertical: 0;")
        svgText.text = str(hito.find("nombre").text)
    
    # Last point    
    svgText = ET.SubElement(elevProfile, "text")
    svgText.set("x", str(10))
    svgText.set("y", str(svgHeight - 400))
    svgText.set("style", "writing-mode: tb; glyph-orientation-vertical: 0;")
    svgText.text = str(elem.find("direccion_inicio").text)



def createSVGFiles(root):
    for elem in root:
        # SVG Height
        svgHeight = getSVGHeight(elem)

        # SVG Width
        svgWidth = getSVGWidth(elem)

        # SVG
        elevProfile = ET.Element("svg")
        elevProfile.set("version", "1.0")
        elevProfile.set("xmlns", "http://www.w3.org/2000/svg")
        elevProfile.set("height", str(svgHeight))
        elevProfile.set("width", str(svgWidth))
        
        # Polyline
        svgPolyline = ET.SubElement(elevProfile, "polyline")
        svgPolyline.set("style", "fill:white;stroke:red;stroke-width:4")
        elemPoints = getPoints(elem, svgHeight)
        svgPolyline.set("points", str(elemPoints))

        # Text
        setSVGTextsForRoute(elem, svgHeight, elevProfile)

        # Writing SVG document
        filename = str(elem.find("nombre").text) + ".svg"
        ET.ElementTree(elevProfile).write(filename, encoding="utf-8", xml_declaration=True)        



def main():
    # We parse the XML file
    root = parseXMLFile("rutas.xml")

    # We create the svg with the elevation profile of the routes
    createSVGFiles(root)



if __name__ == "__main__":
    main()



