import { useCallback, useEffect, useState } from "react";

import words from "./wordList.json";
import HangManDrawing from "./Compounets/HangManDrawing";
import HangManWord from "./Compounets/HangManWord";
import KeyBoard from "./Compounets/KeyBoard";
import styles from "./App.module.css";
const App = () => {
  const RandomWord = () => {
    const theRandomObject = words[Math.floor(Math.random() * words.length)];
    // console.log(theRandomObject.hint)
    return theRandomObject;
  };
  const [wordToGuess, setWordToGuess] = useState(RandomWord());

  //guessed Letters of the Random Word

  const [gussedLetters, SetGussedLetters] = useState<string[]>([]);

  const [showHint, setShowHint] = useState(false);

  const incorrectLetters = gussedLetters.filter(
    (el) => !wordToGuess.word.includes(el)
  );

  const isLosser = incorrectLetters.length >= 6;
  const isWinner = wordToGuess.word
    .split("")
    .every((letter) => gussedLetters.includes(letter));

  const addGussedLetters = useCallback(
    (Letter: string) => {
      if (gussedLetters.includes(Letter) || isLosser || isWinner) return;

      SetGussedLetters((currentLetters) => [...currentLetters, Letter]);
    },
    [gussedLetters, isLosser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGussedLetters(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [addGussedLetters, gussedLetters]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;

      e.preventDefault();
      SetGussedLetters([]);
      setWordToGuess(RandomWord());
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, []);

  return (
    <div
      style={{
        maxWidth: "800px",
        display: "flex",
        flexDirection: "column",
        gap: "15px",
        margin: "0 auto",
        alignItems: "center",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isLosser && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              width: "100%",
            }}
          >
            <div>"Nice try -- "</div>
            <button
              className={`${styles.btnrefresh}`}
              onClick={() => {
                SetGussedLetters([]);
                setWordToGuess(RandomWord());
              }}
            >
              refrech
            </button>
          </div>
        )}
        {isWinner && (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "15px",
              width: "100%",
            }}
          >
            <div>"Winner! --</div>
            <button
              className={`${styles.btnrefresh}`}
              onClick={() => {
                SetGussedLetters([]);
                setWordToGuess(RandomWord());
              }}
            >
              refrech
            </button>
          </div>
        )}
      </div>
      {isWinner || isLosser ? null : (
        <div style={{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"10px"}}>
          <button
            className={`${styles.btnrefresh}`}
            onClick={() => setShowHint(!showHint)}
          >
            {showHint ? "Hide" : "Show"} Hint
          </button>
          {showHint && (
            <div
              style={{ fontSize: "25px", fontWeight: "bold", color: "black" ,marginTop:"10px"}}
            >
              {wordToGuess.hint}
            </div>
          )}
        </div>
      )}
      <HangManDrawing numberOfGusses={incorrectLetters.length} />
      <HangManWord
        viewTheWord={isLosser}
        gussedLetters={gussedLetters}
        wordToguess={wordToGuess.word}
      />
      <div style={{ alignSelf: "stretch" }}>
        <KeyBoard
          disabled={isWinner || isLosser}
          activeLetters={gussedLetters.filter((letter) =>
            wordToGuess.word.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGussedLetters={addGussedLetters}
        />
      </div>
    </div>
  );
};

export default App;
