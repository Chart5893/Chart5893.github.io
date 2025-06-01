import tkinter as tk
from tkinter import messagebox, scrolledtext
from CS499_Histogram_logic import read_input_file, get_name_counts_str, get_histogram_str, get_frequency

class NameFrequencyApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Name Frequency GUI")
        self.root.geometry("500x400")

        # Load data
        try:
            self.name_counts = read_input_file("CS210_Project_Three_Input_File.txt")
        except FileNotFoundError as e:
            messagebox.showerror("File Error", str(e))
            root.destroy()
            return

        # Widgets
        self.label = tk.Label(root, text="Enter item name to search:")
        self.label.pack(pady=5)

        self.entry = tk.Entry(root, width=40)
        self.entry.pack(pady=5)

        self.search_button = tk.Button(root, text="Search Frequency", command=self.search_item)
        self.search_button.pack(pady=5)

        self.result_label = tk.Label(root, text="")
        self.result_label.pack(pady=5)

        self.freq_list_button = tk.Button(root, text="Show Frequencies", command=self.show_frequencies)
        self.freq_list_button.pack(pady=5)

        self.histogram_button = tk.Button(root, text="Show Histogram", command=self.show_histogram)
        self.histogram_button.pack(pady=5)

        self.text_area = scrolledtext.ScrolledText(root, width=60, height=15)
        self.text_area.pack(pady=10)

    def search_item(self):
        name = self.entry.get().strip()
        if not name:
            messagebox.showwarning("Input Error", "Please enter an item name.")
            return
        freq = get_frequency(self.name_counts, name)
        self.result_label.config(text=f"Frequency of '{name}': {freq}")
        self.text_area.delete("1.0", tk.END)  # Clear text area

    def show_frequencies(self):
        self.result_label.config(text="Item Frequencies:")
        freq_str = get_name_counts_str(self.name_counts)
        self.text_area.delete("1.0", tk.END)
        self.text_area.insert(tk.END, freq_str)

    def show_histogram(self):
        self.result_label.config(text="Histogram:")
        hist_str = get_histogram_str(self.name_counts)
        self.text_area.delete("1.0", tk.END)
        self.text_area.insert(tk.END, hist_str)

if __name__ == "__main__":
    root = tk.Tk()
    app = NameFrequencyApp(root)
    root.mainloop()
