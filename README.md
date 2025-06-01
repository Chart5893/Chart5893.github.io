# Grocery Item Frequency Tracker

## Overview

This Python program reads a text file containing a list of grocery items (one item per line), calculates how frequently each item appears, and provides both terminal and GUI-based (Tkinter) interaction for users to search and visualize the data. The application also writes item frequencies to an output file for further use.

This project was developed as part of the CS-499 Capstone course at Southern New Hampshire University.

---

## Features

- ✅ **Reads Input File**: Parses a text file and tallies item frequencies.
- ✅ **Case-Insensitive Search**: Users can search for items regardless of capitalization.
- ✅ **Histogram Output**: Visual representation of item frequencies.
- ✅ **GUI (Tkinter)**: Simple and user-friendly graphical interface.
- ✅ **Data Export**: Frequencies are saved to a `frequency.dat` file.

---

## How to Run

### Prerequisites

- Python 3.7 or higher
- Tkinter (included by default with standard Python installation)

### Files

- `main_gui.py` – Main application file with the Tkinter interface
- `logic.py` – Contains shared core functions for file reading and data processing
- `CS210_Project_Three_Input_File.txt` – Sample input file
- `frequency.dat` – Auto-generated output file of item frequencies

### Instructions

1. Place `CS210_Project_Three_Input_File.txt` in the same directory as the code.
2. Run the program:
   ```bash
   python main_gui.py
