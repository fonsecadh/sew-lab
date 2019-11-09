#!/usr/bin/python

import sys, getopt
import xml.etree.ElementTree as ET


def parseLogsFile(filename):
    try:
        tree = ET.parse(filename)
        return tree.getRoot()
    except FileNotFoundError:
        print("Input filename does not exist: " + filename)
        sys.exit(2)


def printTypes(rootInput):
    print("Select log type: ")

    counter = 0
    aux = set()
    for elem in rootInput:
        for subelem in elem:
            if (subelem.attrib == "tipo"):
                aux.add(subelem.text)
    # Iterate unique types
    for e in aux:
        print(counter + " " + e)
        counter = counter + 1
    return counter


def printDates(rootInput):
    print("Select log date: ")

    counter = 0
    aux = set()
    for elem in rootInput:
        for subelem in elem:
            if (subelem.attrib == "fecha"):
                aux.add(subelem.text)
    # Iterate unique dates
    for e in aux:
        print(counter + " " + e)
        counter = counter + 1
    return counter


def filterType():
    # Ask the user for filtering method
    userInputFilterType = input("Please select the filtering operation:\n\t0: By type\n\t1: By date")
    inputFilterInt = int(userInputFilterType)
    while inputFilterInt != 0 and inputFilterInt != 1:
        userInputFilterType = input("Not a valid filtering operation!\nPlease select the filtering operation:\n\t0: By type\n\t1: By date")
        inputFilterInt = int(userInputFilterType)
    
    # Return the selected type
    return inputFilterInt


def filterFactor(filterType, rootInput):
    if filterType == 0: # Filtering by type
        # Print the types
        numTypes = printTypes(rootInput)
        # Ask the user for the filtering factor
        userInputFactor = input("Please write the type of the logs to be filtered: ")
        nRes = getNumberOfFilteredLogs(filterType, userInputFactor)
        while nRes == 0:
            userInputFactor = input("No logs with that type!\nPlease write the type of the logs to be filtered: ")
            nRes = getNumberOfFilteredLogs(filterType, userInputFactor)
        # Print number of logs with selected type
        print(nRes + " logs with that type!")
        return userInputFactor 
    else: # Filtering by date
        # Print the dates
        numDates = printDates(rootInput)
        # Ask the user for the filtering factor
        userInputFactor = input("Please write the date of the logs to be filtered: ")
        nRes = getNumberOfFilteredLogs(filterType, userInputFactor)
        while nRes == 0:
            userInputFactor = input("No logs with that type!\nPlease write the date of the logs to be filtered: ")
            nRes = getNumberOfFilteredLogs(filterType, userInputFactor)
        # Print number of logs with selected date
        print(nRes + " logs with that date!")
        return userInputFactor 

        


def main(argv):
    inputfile = ''
    outputfile = ''
    
    # We check that the input arguments are valid
    try:
        opts, args = getopt.getopt(argv, "hi:o:",["ifile=","ofile="])
    except getopt.GetoptError:
        print("logfilter.py -i <inputfile> -o <outputfile>")
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print("logfilter.py -i <inputfile> -o <outputfile>")
            sys.exit()
        elif opt in ("-i", "--ifile"):
            inputfile = arg
        elif opt in ("-o", "--ofile"):
            outputfile = arg

    # We parse the input XML file
    rootInput = parseLogsFile(inputfile)

    # We ask the user for their desired filtering method
    filtertype = filterType()

    # We ask the user for their desired filtering factor
    filterFactor = filterFactor(filterType, rootInput)



if __name__ == "__main__":
    main(sys.argv[1:])


