# flappy-bird-typescript
Make Flappy Bird with Phaser 3

# 🐦 Flappy Bird TypeScript

A modern recreation of the classic **Flappy Bird** game built with **Phaser 3**, **TypeScript**, and **Vite**.

This project was created for learning and practicing game development concepts such as scene management, physics simulation, object pooling, and TypeScript architecture.

---

## 🎮 Gameplay

Control the bird and navigate through an endless series of pipes.

### Controls

| Action  | Input                    |
| ------- | ------------------------ |
| Jump    | `Space`                  |
| Jump    | `Left Mouse Click / Tap` |
| Restart | `Space` or Click         |

### Objective

* Avoid pipes and the ground.
* Survive as long as possible.
* Beat your highest score.

---

## ✨ Features

* Built with Phaser 3
* Written in TypeScript
* Powered by Vite
* Arcade Physics integration
* Infinite procedural pipe spawning
* Object Pooling for better performance
* Scene-based architecture
* Responsive game loop
* Clean and maintainable code structure

---

## 📸 Preview

> Add gameplay screenshots or GIFs here.

```md
![Gameplay](./docs/gameplay.gif)
```

---

## 🏗️ Project Structure

```text
src/
├── objects/
├── scenes/
├── main.ts
└── vite-env.d.ts

public/
└── assets/

vite/
├── config.dev.mjs
└── config.prod.mjs
```

---

## 🚀 Getting Started

### Prerequisites

* Node.js 18+
* npm

### Installation

Clone the repository:

```bash
git clone https://github.com/minhcaoo24/flappy-bird-typescript.git
cd flappy-bird-typescript
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:8080
```

---

## 📦 Production Build

Build the project:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---

## 🧠 Technical Highlights

### Object Pooling

Pipes are reused through Phaser Groups instead of being continuously created and destroyed.

Benefits:

* Reduced memory allocations
* Less garbage collection
* Better runtime performance

### Scene Management

| Scene     | Purpose         |
| --------- | --------------- |
| Boot      | Initial setup   |
| Preloader | Asset loading   |
| OpenScene | Main menu       |
| PlayScene | Gameplay        |
| GameOver  | End game screen |

### Physics

The game uses Phaser Arcade Physics for:

* Gravity simulation
* Collision detection
* Velocity-based movement
* Pipe interactions

---

## 🛠️ Tech Stack

* TypeScript
* Phaser 3
* Vite
* HTML5 Canvas

---

## 🙏 Credits

### Original Game

Flappy Bird was originally created by **Dong Nguyen** and published by **.GEARS Studio**.

### Game Assets

The graphics and audio assets used in this project are sourced from:

https://github.com/samuelcust/flappy-bird-assets

Special thanks to Samuel Cust for providing the open asset collection used for educational and development purposes.

---

## 🎯 Future Improvements

* High score saving
* Mobile optimization
* Sound settings
* Difficulty progression
* Pause system
* Leaderboard integration
* Achievement system

---

## 📄 License

The source code in this repository is licensed under the **Unlicense**.

See the LICENSE file for details.

### Third-Party Assets

Game assets are not created by the repository owner and remain subject to their respective licenses and attribution requirements.

---

## 👨‍💻 Author

**Minh Cao**

GitHub: https://github.com/minhcaoo24

If you enjoyed this project, consider giving it a ⭐ on GitHub.
