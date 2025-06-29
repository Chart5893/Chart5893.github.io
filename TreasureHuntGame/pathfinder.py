import heapq

LEFT = 0
UP = 1
RIGHT = 2
DOWN = 3

class Pathfinder:
    def __init__(self,env):
        self.env = env # expects a TreasureMaze object

    def heuristic(self, a, b):
        return abs(a[0] - b[0]) + abs(a[1] - b[1]) # Manhattan distance
    
    def neighbors(self, cell):
        row, col = cell
        potential_moves = [(row-1, col), (row+1, col), (row, col-1), (row, col+1)]
        return [p for p in potential_moves
                if 0 <=p[0] < self.env.maze.shape[0] and
                0 <=p[1] < self.env.maze.shape[1] and 
                self.env.maze[p] == 1.0]
    
    def find_path(self, start, goal):
        open_set = []
        heapq.heappush(open_set, (0, start))
        came_from = {}
        g_score = {start: 0}
        f_score = {start: self.heuristic(start, goal)}
        visited = set()

        while open_set:
            _, current = heapq.heappop(open_set)
            if current == goal:
                path = []
                while current in came_from:
                    path.append(current)
                    current = came_from[current]
                path.append(start)
                path.reverse()
                return path
            visited.add(current)

            for neighbor in self.neighbors(current):
                if neighbor in visited:
                    continue
                tentative_g = g_score[current] + 1
                if neighbor not in g_score or tentative_g < g_score[neighbor]:
                    came_from[neighbor] = current
                    g_score[neighbor] = tentative_g
                    f_score[neighbor] = tentative_g + self.heuristic(neighbor,goal)
                    heapq.heappush(open_set, (f_score[neighbor], neighbor))
        return None
    
    def get_next_action(self, path):
        if not path or len(path) < 2:
            return None
        start, next_pos = path[0], path[1]
        dx = next_pos[0] - start[0]
        dy = next_pos[1] - start[1]
        if dx == -1: return UP
        if dx == 1 : return DOWN
        if dy == -1: return LEFT
        if dy == 1: return RIGHT
        return None
    
    def get_direction(self, current, next_pos):
        crow, ccol = current
        nrow, ncol = next_pos
        if crow == nrow:
            if ncol < ccol:
                return LEFT
            elif ncol > ccol:
                return RIGHT
        elif ccol == ncol:
            if nrow < crow: 
                return UP
            elif nrow > crow: 
                return DOWN
        raise ValueError(f"Invalid movement from {current} to {next_pos}")