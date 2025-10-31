"use client";

import { useState, useEffect } from "react";
import { getRandomWord } from "./wordlist";
import "./wordle.css";

export default function Wordle() {
  const [targetWord, setTargetWord] = useState("");
  const [guesses, setGuesses] = useState<string[]>([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameOver, setGameOver] = useState(false);
  const [won, setWon] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    resetGame();
  }, []);

  const resetGame = () => {
    const newWord = getRandomWord();
    setTargetWord(newWord);
    setGuesses([]);
    setCurrentGuess("");
    setGameOver(false);
    setWon(false);
    setMessage("");
  };

  const handleKeyPress = (key: string) => {
    if (gameOver) return;

    if (key === "ENTER") {
      if (currentGuess.length !== 5) {
        setMessage("Word must be 5 letters!");
        setTimeout(() => setMessage(""), 2000);
        return;
      }

      const newGuesses = [...guesses, currentGuess];
      setGuesses(newGuesses);

      if (currentGuess === targetWord) {
        setWon(true);
        setGameOver(true);
        setMessage("You won! 🎉");
      } else if (newGuesses.length >= 6) {
        setGameOver(true);
        setMessage(`Game Over! Word was: ${targetWord}`);
      }

      setCurrentGuess("");
    } else if (key === "BACK") {
      setCurrentGuess(currentGuess.slice(0, -1));
    } else if (currentGuess.length < 5 && /^[A-Z]$/.test(key)) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const getLetterColor = (letter: string, index: number, guess: string) => {
    if (!targetWord) return "";
    
    if (guess[index] === targetWord[index]) {
      return "correct"; // Green - correct position
    } else if (targetWord.includes(letter)) {
      return "present"; // Yellow - wrong position
    } else {
      return "absent"; // Gray - not in word
    }
  };

  const renderGrid = () => {
    const rows = [];
    
    // Render completed guesses
    for (let i = 0; i < guesses.length; i++) {
      const guess = guesses[i];
      rows.push(
        <div key={i} className="wordle-row">
          {guess.split("").map((letter, idx) => (
            <div
              key={idx}
              className={`wordle-cell filled ${getLetterColor(letter, idx, guess)}`}
            >
              {letter}
            </div>
          ))}
        </div>
      );
    }

    // Render current guess row
    if (!gameOver && guesses.length < 6) {
      rows.push(
        <div key="current" className="wordle-row">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div
              key={idx}
              className={`wordle-cell ${currentGuess[idx] ? "filled" : ""}`}
            >
              {currentGuess[idx] || ""}
            </div>
          ))}
        </div>
      );
    }

    // Render empty rows
    const emptyRows = 6 - rows.length;
    for (let i = 0; i < emptyRows; i++) {
      rows.push(
        <div key={`empty-${i}`} className="wordle-row">
          {Array.from({ length: 5 }).map((_, idx) => (
            <div key={idx} className="wordle-cell"></div>
          ))}
        </div>
      );
    }

    return rows;
  };

  const keyboard = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "BACK"],
  ];

  const getKeyColor = (key: string) => {
    if (key === "ENTER" || key === "BACK") return "";

    for (const guess of guesses) {
      for (let i = 0; i < guess.length; i++) {
        if (guess[i] === key) {
          if (targetWord[i] === key) {
            return "correct";
          } else if (targetWord.includes(key)) {
            return "present";
          } else {
            return "absent";
          }
        }
      }
    }
    return "";
  };

  return (
    <div className="wordle-container">
      <div className="wordle-header">
        <h3 className="wordle-title">📝 WORDLE</h3>
      </div>
      <div className="wordle-body">
        <p className="wordle-description">
          guess the 5-letter word in 6 tries. after each guess, the color of the tiles
          will change to show how close you were. green = correct letter & position.
          yellow = correct letter, wrong position. gray = letter not in word.
        </p>

        {message && (
          <div className={`wordle-message ${won ? "win" : "lose"}`}>
            {message}
          </div>
        )}

        <div className="wordle-grid">{renderGrid()}</div>

        <div className="wordle-keyboard">
          {keyboard.map((row, rowIdx) => (
            <div key={rowIdx} className="keyboard-row">
              {row.map((key) => (
                <button
                  key={key}
                  className={`keyboard-key ${getKeyColor(key)} ${
                    key === "ENTER" || key === "BACK" ? "special" : ""
                  }`}
                  onClick={() => handleKeyPress(key)}
                >
                  {key === "BACK" ? "⌫" : key}
                </button>
              ))}
            </div>
          ))}
        </div>

        <button className="wordle-reset-btn" onClick={resetGame}>
          New Game
        </button>
      </div>
    </div>
  );
}
