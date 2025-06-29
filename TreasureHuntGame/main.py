import matplotlib.pyplot as plt
import numpy as np
from maze_generator import generate_maze
from TreasureMaze import TreasureMaze
from GameExperience import GameExperience
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Dense 
from tensorflow.keras.optimizers import Adam

# === Init dummy env to get input shape ===
dummy_maze = generate_maze(6, 10)
dummy_env = TreasureMaze(dummy_maze)
input_shape = dummy_env.observe().shape[1]

# === Build Model ===
model = Sequential()
model.add(Dense(24, input_shape=(input_shape,), activation='relu'))
model.add(Dense(24, activation='relu'))
model.add(Dense(4, activation='linear'))  # 4 actions
model.compile(optimizer=Adam(learning_rate=0.001), loss='mse')

# === Experience ===
experience = GameExperience(model, max_memory=1000, discount=0.95)

# === Training Parameters ===
episodes = 200
epsilon = 1.0
epsilon_min = 0.1
epsilon_decay = 0.995
max_steps = 100

for episode in range(episodes):
    maze_layout = generate_maze(6, 10)
    env = TreasureMaze(maze_layout)
    state = env.observe()
    total_reward = 0

    for step in range(max_steps):
        if np.random.rand() < epsilon:
            action = np.random.choice(env.valid_actions())
        else:
            q_values = model.predict(state, verbose=0)[0]
            valid_q = [(i, q) for i, q in enumerate(q_values) if i in env.valid_actions()]
            action = max(valid_q, key=lambda x: x[1])[0]

        next_state, reward, status = env.act(action)
        done = status != 'not_over'
        experience.remember([state, action, reward, next_state, done])
        state = next_state
        total_reward += reward

        if done:
            break

    inputs, targets = experience.get_data(batch_size=32)
    model.train_on_batch(inputs, targets)

    if epsilon > epsilon_min:
        epsilon *= epsilon_decay

    print(f"Episode {episode+1}/{episodes} - Total Reward: {total_reward:.2f} - Epsilon: {epsilon:.3f}")

print("Training complete!")

# === Visualization ===
def plot_maze(maze, path):
    maze = np.array(maze)
    fig, ax = plt.subplots()
    ax.imshow(maze, cmap='gray_r')

    y, x = zip(*path)
    ax.plot(x, y, marker='o', color='blue', linewidth=2, markersize=5, label='Path')
    ax.plot(x[0], y[0], marker='s', color='green', markersize=10, label='Start')
    ax.plot(x[-1], y[-1], marker='*', color='gold', markersize=15, label='Treasure')

    ax.set_title("Pirate Path Through the Maze")
    ax.set_xticks([])
    ax.set_yticks([])
    ax.legend()
    plt.savefig("pirate_path.png", dpi=300)
    plt.show()

# === Run Test ===
test_maze = generate_maze(6, 10)
env = TreasureMaze(test_maze)
state = env.observe()
path = []

for _ in range(100):
    path.append(env.agent_pos)
    q_values = model.predict(state, verbose=0)[0]
    valid_q = [(i, q) for i, q in enumerate(q_values) if i in env.valid_actions()]
    action = max(valid_q, key=lambda x: x[1])[0]
    state, reward, status = env.act(action)
    if status == 'win':
        print("Treasure Found!")
        break

# === Visualize final maze ===
plot_maze(test_maze, path)
