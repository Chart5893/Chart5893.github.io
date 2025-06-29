import random 

def generate_maze (rows, cols) : 
    maze = [[0 for _ in range(cols)] for _ in range(rows)]

    def neighbors(r,c):
        # returns valid neighbors for maze carving in 2-step increments
        dirs = [(2.0), (-2,0), (0,2), (0,-2)]
        result = []
        for dr, dc in dirs:
            nr, nc =r +dr, c + dc
            if 0 <= nr < rows and 0 <= nc < cols:
                result.append((nr, nc))
        return result
    def carve_passages_from(r,c):
        maze[r][c] =1 #mark current cell as passage
        nbs = neighbors(r, c)
        random.shuffle(nbs)
        for nr, nc in nbs:
            if maze[nr][nc]==0:
            # if not carved 
            #carve passage between current and neighbor
                maze[(r+nr)//2][(c+nc)//2] = 1
                carve_passages_from(nr, nc)

    # Start carving from the top-left corner(0,0) or (1.1) if even dims
    start_r = 0 if rows %2 == 1 else 1
    start_c = 0 if cols %2 == 1 else 1
    carve_passages_from(start_r, start_c)

    # Ensure start and end cells are open 
    maze[0][0] = 1
    maze[rows-1][cols-1] = 1

    return maze