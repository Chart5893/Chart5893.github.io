def read_input_file(file_name):
    name_counts = {}
    try:
        with open(file_name, 'r') as file:
            for line in file:
                name = line.strip()
                if name:
                    name_counts[name] = name_counts.get(name, 0) + 1
    except FileNotFoundError:
        raise FileNotFoundError(f"Error: The file '{file_name}' was not found.")

    # write frequency.dat
    with open("frequency.dat", "w") as output_file:
        for name, count in name_counts.items():
            output_file.write(f"{name} {count}\n")

    return name_counts

def get_name_counts_str(name_counts):
    return "\n".join(f"{name}: {count}" for name, count in name_counts.items())

def get_histogram_str(name_counts):
    lines = []
    for name, count in name_counts.items():
        lines.append(f"{name:<12} {'*' * count}")
    return "\n".join(lines)

def get_frequency(name_counts, name_input):
    for name in name_counts:
        if name.lower() == name_input.lower():
            return name_counts[name]
    return 0