"use client";

import { useState } from "react";
import Wordle from "./Wordle";
import DrawingGame from "./DrawingGame";
import "./games.css";

export default function Games() {
  const [activeGame, setActiveGame] = useState<string | null>(null);

  return (
    <div className="games-container">
      <h2 className="mb-4 font-titleFont text-2xl font-extrabold">
        offline games (because you're gonna need something to do)
      </h2>
      <p className="mb-6 leading-6">
        look, when the internet dies you're gonna get bored REAL quick.
        so here are some simple games that work completely offline.
        download this site and play as much as you want. no internet needed, no ads,
        no microtransactions, just you and classic games. as it should be.
      </p>

      <div className="games-grid">
        <button
          className={`game-selector ${activeGame === "wordle" ? "active" : ""}`}
          onClick={() => setActiveGame(activeGame === "wordle" ? null : "wordle")}
        >
          📝 Wordle
        </button>
        <button
          className={`game-selector ${activeGame === "drawing" ? "active" : ""}`}
          onClick={() => setActiveGame(activeGame === "drawing" ? null : "drawing")}
        >
          🎨 Paint
        </button>
        <button
          className={`game-selector ${activeGame === "tictactoe" ? "active" : ""}`}
          onClick={() => setActiveGame(activeGame === "tictactoe" ? null : "tictactoe")}
        >
          🎯 Tic-Tac-Toe
        </button>
        <button
          className={`game-selector ${activeGame === "snake" ? "active" : ""}`}
          onClick={() => setActiveGame(activeGame === "snake" ? null : "snake")}
        >
          🐍 Snake
        </button>
        <button
          className={`game-selector ${activeGame === "memory" ? "active" : ""}`}
          onClick={() => setActiveGame(activeGame === "memory" ? null : "memory")}
        >
          🧠 Memory Game
        </button>
        <button
          className={`game-selector ${activeGame === "breakout" ? "active" : ""}`}
          onClick={() => setActiveGame(activeGame === "breakout" ? null : "breakout")}
        >
          🧱 Breakout
        </button>
      </div>

      {activeGame === "wordle" && <Wordle />}
      {activeGame === "drawing" && <DrawingGame />}
      {activeGame === "tictactoe" && <TicTacToe />}
      {activeGame === "snake" && <Snake />}
      {activeGame === "memory" && <MemoryGame />}
      {activeGame === "breakout" && <Breakout />}
    </div>
  );
}

// JOGO DA VELHA
function TicTacToe() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [winner, setWinner] = useState<string | null>(null);

  const calculateWinner = (squares: (string | null)[]) => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    for (let line of lines) {
      const [a, b, c] = line;
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
    
    const gameWinner = calculateWinner(newBoard);
    if (gameWinner) setWinner(gameWinner);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setWinner(null);
  };

  const isBoardFull = board.every(cell => cell !== null);

  return (
    <div className="game-content">
      <div className="game-header">
        <h3 className="game-title">🎯 Tic-Tac-Toe</h3>
      </div>
      <div className="game-body">
        <p className="game-description">
          classic of classics. X vs O. first to get 3 in a row wins.
        </p>
        <div className="tictactoe-board">
        {board.map((cell, index) => (
          <button
            key={index}
            className="tictactoe-cell"
            onClick={() => handleClick(index)}
          >
            {cell}
          </button>
        ))}
        </div>
        <div className="game-status">
          {winner ? (
            <p className="winner-text">🎉 {winner} wins!</p>
          ) : isBoardFull ? (
            <p className="draw-text">Draw! 🤝</p>
          ) : (
            <p>Next player: {isXNext ? "X" : "O"}</p>
          )}
        </div>
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

// SNAKE
function Snake() {
  const [snake, setSnake] = useState([[5, 5]]);
  const [food, setFood] = useState([10, 10]);
  const [direction, setDirection] = useState("RIGHT");
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  const gridSize = 20;

  const generateFood = () => {
    const x = Math.floor(Math.random() * gridSize);
    const y = Math.floor(Math.random() * gridSize);
    return [x, y];
  };

  const moveSnake = () => {
    if (gameOver || !gameStarted) return;

    const head = [...snake[0]];
    
    switch (direction) {
      case "UP":
        head[1] -= 1;
        break;
      case "DOWN":
        head[1] += 1;
        break;
      case "LEFT":
        head[0] -= 1;
        break;
      case "RIGHT":
        head[0] += 1;
        break;
    }

    // Check collision with walls
    if (head[0] < 0 || head[0] >= gridSize || head[1] < 0 || head[1] >= gridSize) {
      setGameOver(true);
      return;
    }

    // Check collision with self
    if (snake.some(segment => segment[0] === head[0] && segment[1] === head[1])) {
      setGameOver(true);
      return;
    }

    const newSnake = [head, ...snake];

    // Check if food is eaten
    if (head[0] === food[0] && head[1] === food[1]) {
      setFood(generateFood());
      setScore(score + 10);
    } else {
      newSnake.pop();
    }

    setSnake(newSnake);
  };

  // Game loop
  useState(() => {
    const interval = setInterval(moveSnake, 150);
    return () => clearInterval(interval);
  });

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (!gameStarted) setGameStarted(true);
    
    switch (e.key) {
      case "ArrowUp":
        if (direction !== "DOWN") setDirection("UP");
        break;
      case "ArrowDown":
        if (direction !== "UP") setDirection("DOWN");
        break;
      case "ArrowLeft":
        if (direction !== "RIGHT") setDirection("LEFT");
        break;
      case "ArrowRight":
        if (direction !== "LEFT") setDirection("RIGHT");
        break;
    }
  };

  const resetGame = () => {
    setSnake([[5, 5]]);
    setFood([10, 10]);
    setDirection("RIGHT");
    setGameOver(false);
    setScore(0);
    setGameStarted(false);
  };

  return (
    <div className="game-content" onKeyDown={handleKeyPress} tabIndex={0}>
      <div className="game-header">
        <h3 className="game-title">🐍 Snake</h3>
      </div>
      <div className="game-body">
        <p className="game-description">
          use arrow keys to move. eat the food. don't hit the walls
          or yourself. simple right? (it's not)
        </p>
        <div className="snake-score">Score: {score}</div>
        <div className="snake-grid">
        {Array.from({ length: gridSize }).map((_, y) =>
          Array.from({ length: gridSize }).map((_, x) => {
            const isSnake = snake.some(segment => segment[0] === x && segment[1] === y);
            const isFood = food[0] === x && food[1] === y;
            return (
              <div
                key={`${x}-${y}`}
                className={`snake-cell ${isSnake ? "snake" : ""} ${isFood ? "food" : ""}`}
              />
            );
          })
        )}
      </div>
        {gameOver && (
          <div className="game-over">
            <p>Game Over! 💀</p>
            <p>Final Score: {score}</p>
          </div>
        )}
        {!gameStarted && !gameOver && (
          <p className="game-hint">Press any arrow key to start</p>
        )}
        <button className="reset-btn" onClick={resetGame}>
          Reset Game
        </button>
      </div>
    </div>
  );
}

// MEMORY GAME
function MemoryGame() {
  const emojis = ["🎮", "🎯", "🎲", "🎪", "🎨", "🎭", "🎪", "🎸"];
  const [cards, setCards] = useState<string[]>([]);
  const [flipped, setFlipped] = useState<number[]>([]);
  const [matched, setMatched] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [won, setWon] = useState(false);

  const initGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setWon(false);
  };

  useState(() => {
    initGame();
  });

  const handleCardClick = (index: number) => {
    if (flipped.length === 2 || flipped.includes(index) || matched.includes(index)) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      setMoves(moves + 1);
      
      if (cards[newFlipped[0]] === cards[newFlipped[1]]) {
        setMatched([...matched, ...newFlipped]);
        setFlipped([]);
        
        if (matched.length + 2 === cards.length) {
          setWon(true);
        }
      } else {
        setTimeout(() => setFlipped([]), 1000);
      }
    }
  };

  return (
    <div className="game-content">
      <div className="game-header">
        <h3 className="game-title">🧠 Memory Game</h3>
      </div>
      <div className="game-body">
        <p className="game-description">
          find the pairs. test your memory. try to do it in fewer moves.
        </p>
        <div className="memory-stats">Moves: {moves}</div>
        <div className="memory-grid">
        {cards.map((card, index) => (
          <button
            key={index}
            className={`memory-card ${
              flipped.includes(index) || matched.includes(index) ? "flipped" : ""
            }`}
            onClick={() => handleCardClick(index)}
          >
            {flipped.includes(index) || matched.includes(index) ? card : "❓"}
          </button>
        ))}
      </div>
        {won && (
          <div className="winner-message">
            <p>🎉 You won!</p>
            <p>Completed in {moves} moves</p>
          </div>
        )}
        <button className="reset-btn" onClick={initGame}>
          New Game
        </button>
      </div>
    </div>
  );
}

// BREAKOUT
function Breakout() {
  const canvasRef = useState<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);

  const initGame = (canvas: HTMLCanvasElement) => {
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const ball = {
      x: canvas.width / 2,
      y: canvas.height - 50,
      dx: 3,
      dy: -3,
      radius: 8,
    };

    const paddle = {
      width: 75,
      height: 10,
      x: (canvas.width - 75) / 2,
    };

    const bricks: any[] = [];
    const brickRowCount = 5;
    const brickColumnCount = 8;
    const brickWidth = 70;
    const brickHeight = 20;
    const brickPadding = 10;
    const brickOffsetTop = 30;
    const brickOffsetLeft = 35;

    for (let c = 0; c < brickColumnCount; c++) {
      bricks[c] = [];
      for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 };
      }
    }

    let rightPressed = false;
    let leftPressed = false;
    let currentScore = 0;
    let isGameOver = false;
    let isWon = false;

    const keyDownHandler = (e: KeyboardEvent) => {
      if (e.key === "Right" || e.key === "ArrowRight") rightPressed = true;
      if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = true;
    };

    const keyUpHandler = (e: KeyboardEvent) => {
      if (e.key === "Right" || e.key === "ArrowRight") rightPressed = false;
      if (e.key === "Left" || e.key === "ArrowLeft") leftPressed = false;
    };

    document.addEventListener("keydown", keyDownHandler);
    document.addEventListener("keyup", keyUpHandler);

    const drawBall = () => {
      ctx.beginPath();
      ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
      ctx.fillStyle = "#ffffff";
      ctx.fill();
      ctx.strokeStyle = "#00ff00";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    };

    const drawPaddle = () => {
      ctx.beginPath();
      ctx.rect(paddle.x, canvas.height - paddle.height - 10, paddle.width, paddle.height);
      ctx.fillStyle = "#00ff00";
      ctx.fill();
      ctx.strokeStyle = "#ffffff";
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.closePath();
    };

    const drawBricks = () => {
      const colors = ["#ff0000", "#ff8800", "#ffff00", "#00ff00", "#0088ff"];
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          if (bricks[c][r].status === 1) {
            const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
            const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
            bricks[c][r].x = brickX;
            bricks[c][r].y = brickY;
            ctx.beginPath();
            ctx.rect(brickX, brickY, brickWidth, brickHeight);
            ctx.fillStyle = colors[r % colors.length];
            ctx.fill();
            ctx.strokeStyle = "#ffffff";
            ctx.lineWidth = 1;
            ctx.stroke();
            ctx.closePath();
          }
        }
      }
    };

    const collisionDetection = () => {
      for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
          const b = bricks[c][r];
          if (b.status === 1) {
            if (
              ball.x > b.x &&
              ball.x < b.x + brickWidth &&
              ball.y > b.y &&
              ball.y < b.y + brickHeight
            ) {
              ball.dy = -ball.dy;
              b.status = 0;
              currentScore++;
              setScore(currentScore);
              
              if (currentScore === brickRowCount * brickColumnCount) {
                isWon = true;
                setGameWon(true);
              }
            }
          }
        }
      }
    };

    const draw = () => {
      if (isGameOver || isWon) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawBricks();
      drawBall();
      drawPaddle();
      collisionDetection();

      // Ball collision with walls
      if (ball.x + ball.dx > canvas.width - ball.radius || ball.x + ball.dx < ball.radius) {
        ball.dx = -ball.dx;
      }
      if (ball.y + ball.dy < ball.radius) {
        ball.dy = -ball.dy;
      } else if (ball.y + ball.dy > canvas.height - ball.radius - 10) {
        if (ball.x > paddle.x && ball.x < paddle.x + paddle.width) {
          ball.dy = -ball.dy;
        } else {
          isGameOver = true;
          setGameOver(true);
          document.removeEventListener("keydown", keyDownHandler);
          document.removeEventListener("keyup", keyUpHandler);
          return;
        }
      }

      // Paddle movement
      if (rightPressed && paddle.x < canvas.width - paddle.width) {
        paddle.x += 7;
      } else if (leftPressed && paddle.x > 0) {
        paddle.x -= 7;
      }

      ball.x += ball.dx;
      ball.y += ball.dy;

      requestAnimationFrame(draw);
    };

    draw();
  };

  const handleCanvasRef = (canvas: HTMLCanvasElement | null) => {
    if (canvas && !gameStarted) {
      canvasRef[1](canvas);
      setGameStarted(true);
      initGame(canvas);
    }
  };

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
    setGameWon(false);
    setGameStarted(false);
  };

  return (
    <div className="game-content">
      <div className="game-header">
        <h3 className="game-title">🧱 Breakout</h3>
      </div>
      <div className="game-body">
        <p className="game-description">
          use left/right arrow keys to move the paddle. break all the bricks.
          don't let the ball fall. old school vibes.
        </p>
        <div className="breakout-score">Score: {score}</div>
        <canvas
          ref={handleCanvasRef}
          width={640}
          height={400}
          className="breakout-canvas"
        />
        {gameOver && (
          <div className="game-over">
            <p>Game Over! 💀</p>
            <p>You broke {score} bricks</p>
          </div>
        )}
        {gameWon && (
          <div className="winner-message">
            <p>🎉 You won!</p>
            <p>All {score} bricks destroyed!</p>
          </div>
        )}
        <button className="reset-btn" onClick={resetGame}>
          New Game
        </button>
      </div>
    </div>
  );
}
