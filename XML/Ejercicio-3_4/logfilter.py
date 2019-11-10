#!/usr/bin/python


'''
LogFilter - Basic programs for filtering logs in XML by their type or date.
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



import sys, getopt
import xml.etree.ElementTree as ET


def parseLogsFile(filename):
    try:
        tree = ET.parse(filename)
        return tree.getroot()
    except FileNotFoundError:
        print("Input filename does not exist: " + filename)
        sys.exit(2)


def printTypes(rootInput):
    print("Select log type: ")

    counter = 0
    aux = set()
    for elem in rootInput:
        for subelem in elem:
            if (subelem.tag == "tipo"):
                aux.add(subelem.text)
    # Iterate unique types
    for e in aux:
        print("\t- " + e)
        counter = counter + 1
    return counter


def printDates(rootInput):
    print("Select log date: ")

    counter = 0
    aux = set()
    for elem in rootInput:
        for subelem in elem:
            if (subelem.tag == "fecha"):
                aux.add(subelem.text)
    # Iterate unique dates
    for e in aux:
        print("\t- " + e)
        counter = counter + 1
    return counter


def filterType():
    # Ask the user for filtering method
    userInputFilterType = input("Please select the filtering operation:\n\t0: By type\n\t1: By date\n")
    inputFilterInt = int(userInputFilterType)
    while inputFilterInt != 0 and inputFilterInt != 1:
        userInputFilterType = input("Not a valid filtering operation!\nPlease select the filtering operation:\n\t0: By type\n\t1: By date\n")
        inputFilterInt = int(userInputFilterType)

    # Return the selected type
    return inputFilterInt


def getNumberOfFilteredLogs(ftype, uifactor, rootInput):
    counter = 0
    for elem in rootInput:
        for subelem in elem:
            if (subelem.tag == ftype):
                if (subelem.text == uifactor):
                    counter = counter + 1
    return counter



def filterFactor(filterType, rootInput):
    if filterType == 0: # Filtering by type
        # Print the types
        numTypes = printTypes(rootInput)
        # Ask the user for the filtering factor
        userInputFactor = input("Please write the type of the logs to be filtered: ")
        nRes = getNumberOfFilteredLogs("tipo", userInputFactor, rootInput)
        while nRes == 0:
            userInputFactor = input("No logs with that type!\nPlease write the type of the logs to be filtered: ")
            nRes = getNumberOfFilteredLogs("tipo", userInputFactor, rootInput)
        # Print number of logs with selected type
        print(str(nRes) + " logs with that type!")
        return userInputFactor 
    else: # Filtering by date
        # Print the dates
        numDates = printDates(rootInput)
        # Ask the user for the filtering factor
        userInputFactor = input("Please write the date of the logs to be filtered: ")
        nRes = getNumberOfFilteredLogs("fecha", userInputFactor, rootInput)
        while nRes == 0:
            userInputFactor = input("No logs with that type!\nPlease write the date of the logs to be filtered: ")
            nRes = getNumberOfFilteredLogs("fecha", userInputFactor, rootInput)
        # Print number of logs with selected date
        print(str(nRes) + " logs with that date!")
        return userInputFactor 


def createFilteredXML(ftype, ffactor, rootInput, filename):
    logs = ET.Element('logs')
    valid = 0
    for elem in rootInput:
        for subelem in elem:
            if (subelem.tag == ftype):
                if (subelem.text == ffactor):
                    valid = 1
        if valid == 1:
            log = ET.SubElement(logs, 'log')
            for subelem in elem:
                logTag = ET.SubElement(log, subelem.tag)
                logTag.text = subelem.text
        valid = 0
    ET.ElementTree(logs).write(filename)


def showLicense():
    print("LogFilter - Basic programs for filtering logs in XML by their type or date.")
    print("Copyright (C) 2019  Hugo Fonseca Diaz\n")
    print("This program is free software: you can redistribute it and/or modify)")
    print("it under the terms of the GNU General Public License as published by")
    print("the Free Software Foundation, either version 3 of the License, or ")
    print("(at your option) any later version.\n")
    print("This program is distributed in the hope that it will be useful,")
    print("but WITHOUT ANY WARRANTY; without even the implied warranty of")
    print("MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the")
    print("GNU General Public License for more details.\n")
    print("You should have received a copy of the GNU General Public License")
    print("along with this program.  If not, see <https://www.gnu.org/licenses/>.")
    

def showHelp():
    print("LogFilter  Copyright (C) 2019  Hugo Fonseca Díaz")
    print("This program comes with ABSOLUTELY NO WARRANTY;")
    print("This is free software, and you are welcome to redistribute it")
    print("under certain conditions;")
    
    print("\nOverview:")
    print("Normally 'LogFilter' is invoked like this:")
    print("\tlogfilter.py -i INPUTFILE -o OUTPUTFILE")
    print("\nCommand-Line Options:")
    print("The full format for invoking 'LogFilter' is:")
    print("\tlogfilter.py OPTIONS")
    print("\tlogfilter.py -i INPUTFILE -o OUTPUTFILE")
    print("\n'-h'\n'--help'\n\tShow help")
    print("\n'-l'\n'--license'\n\tShow license")
    print("\n'-i'\n'--ifile'\n\tInput filename")
    print("\n'-o'\n'--ofile'\n\tOutput filename")



def main(argv):
    inputfile = ''
    outputfile = ''

    # We check that the input arguments are valid
    try:
        opts, args = getopt.getopt(argv, "hli:o:",["help", "license","ifile=","ofile="])
    except getopt.GetoptError:
        showHelp()
        sys.exit(2)
    for opt, arg in opts:
        if opt in ("-h", "--help"):
            showHelp()
            sys.exit()
        elif opt in ("-i", "--ifile"):
            inputfile = arg
        elif opt in ("-o", "--ofile"):
            outputfile = arg
        elif opt in ("-l", "--license"):
            showLicense()
            sys.exit()

    # Argument validation
    if (inputfile == "" or outputfile == ""):
        showHelp()
        sys.exit()

    # We parse the input XML file
    rootInput = parseLogsFile(inputfile)

    # We ask the user for their desired filtering method
    filtertype = filterType()

    # We ask the user for their desired filtering factor
    filterfactor = filterFactor(filtertype, rootInput)

    # We create the new xml with the filtered logs
    filterTypeString = ""
    if (filtertype == 0):
        filterTypeString = "tipo"
    else:
        filterTypeString = "fecha"
    createFilteredXML(filterTypeString, filterfactor, rootInput, outputfile)



if __name__ == "__main__":
    main(sys.argv[1:])


