#!/usr/bin/python


'''
RutasToKml - Basic programs for representing xml routes kml format.
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


def getLineStringCoords(elem):
    # First coordinate
    coords = str(elem.find("coordenadas").get("latitud")) + "," + str(elem.find("coordenadas").get("longitud")) + "," + str(elem.find("coordenadas").get("altitud"))

    # Other coordinates
    for hito in elem.find("hitos"):
        coords += " "
        coords += str(hito.find("coordenadas").get("latitud")) + "," + str(hito.find("coordenadas").get("longitud")) + "," + str(hito.find("coordenadas").get("altitud"))

    # We return the coordinates
    return coords


def createKMLFile(root):
    kmlRoot = ET.Element("kml")
    kmlRoot.set("xmlns", "http://www.opengis.net/kml/2.2")
    kmlDoc = ET.SubElement(kmlRoot, "Document")
    docName = ET.SubElement(kmlDoc, "name")
    docName.text = "Rutas por Japón"
    for elem in root:
        # Placemark
        docPlacemark = ET.SubElement(kmlDoc, "Placemark")
        plmName = ET.SubElement(docPlacemark, "name")
        plmName.text = str(elem.find("nombre").text)

        # LineString
        lstr = ET.SubElement(docPlacemark, "LineString")
        lstrExtrude = ET.SubElement(lstr, "extrude")
        lstrExtrude.text = str(1)
        lstrTessellate = ET.SubElement(lstr, "tessellate")
        lstrTessellate.text = str(1)
        lstrCoord = ET.SubElement(lstr, "coordinates")
        lstrCoord.text = getLineStringCoords(elem)
        lstrAltMode = ET.SubElement(lstr, "altituteMode")
        lstrAltMode.text = "relativeToGround"
        

    # Writing KML document
    filename = "rutas.kml"
    ET.ElementTree(kmlRoot).write(filename, encoding="utf-8", xml_declaration=True)        



def main():
    # We parse the XML file
    root = parseXMLFile("rutas.xml")

    # We create the svg with the elevation profile of the routes
    createKMLFile(root)



if __name__ == "__main__":
    main()




