import random

def generate_maze(rows, cols):
    # Ensure rows and cols are odd to simplify carving
    if rows % 2 == 0:
        rows += 1
    if cols % 2 == 0:
        cols += 1

    # Create a grid full of walls (0)
    maze = [[0 for _ in range(cols)] for _ in range(rows)]

    def neighbors(r, c):
        dirs = [(2, 0), (-2, 0), (0, 2), (0, -2)]
        result = []
        for dr, dc in dirs:
            nr, nc = r + dr, c + dc
            if 0 < nr < rows and 0 < nc < cols:
                result.append((nr, nc))
        return result

    def carve_passages_from(r, c):
        maze[r][c] = 1  # current cell becomes path
        nbs = neighbors(r, c)
        random.shuffle(nbs)
        for nr, nc in nbs:
            if maze[nr][nc] == 0:
                maze[(r + nr) // 2][(c + nc) // 2] = 1  # open wall between
                carve_passages_from(nr, nc)

    # Always start in a safe spot
    start_r, start_c = 1, 1
    carve_passages_from(start_r, start_c)

    # Force opening at top-left and bottom-right corners
    maze[0][0] = 1
    if maze[1][0] == 0 and maze[0][1] == 0:
        maze[1][0] = 1  # ensure at least one move from [0][0]

    maze[rows - 1][cols - 1] = 1
    if maze[rows - 2][cols - 1] == 0 and maze[rows - 1][cols - 2] == 0:
        maze[rows - 2][cols - 1] = 1  # ensure one entry to goal

    return maze
