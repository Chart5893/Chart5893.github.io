from CS499_Histogram_logic import read_input_file, get_name_counts_str, get_histogram_str, get_frequency
import sys

def display_menu():
    print("\nPlease select an option:")
    print("1. Search for an item")
    print("2. Print the list of items and their frequencies")
    print("3. Print histogram of item frequencies")
    print("4. Exit program")

def main():
    file_name = "CS210_Project_Three_Input_File.txt"
    try:
        name_counts = read_input_file(file_name)
    except FileNotFoundError as e:
        print(e)
        sys.exit(1)

    while True:
        display_menu()
        choice = input("Enter your choice (1-4): ").strip()

        if choice == '1':
            name = input("Enter the name of the item to search for: ").strip()
            freq = get_frequency(name_counts, name)
            print(f"Frequency of '{name}': {freq}")
        elif choice == '2':
            print("\nItem Frequencies:")
            print(get_name_counts_str(name_counts))
        elif choice == '3':
            print("\nHistogram:")
            print(get_histogram_str(name_counts))
        elif choice == '4':
            print("Exiting program.")
            break
        else:
            print("Invalid option selected. Please try again.")

if __name__ == "__main__":
    main()
