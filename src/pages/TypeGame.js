import React from "react";
import "../css/typeGame.css";
import useWordGame from "../hooks/useWordGame";

function TypeGame() {
  const {
    changeVal,
    text,
    timeRemaining,
    startGame,
    wordCount,
    isTrue,
    textBoxRef
  } = useWordGame(10);
  return (
    <div>
      <h1 className="typegame_text">How Fast Can You Type?</h1>
      <textarea
        onChange={changeVal}
        value={text}
        disabled={!isTrue}
        ref={textBoxRef}
      />
      <h4 className="typegame_text">Time Remaining: {timeRemaining}</h4>
      {wordCount > 0 ? (
        <button className="btn-start" onClick={startGame} disabled={isTrue}>
          Play Again
        </button>
      ) : (
        <button className="btn-start" onClick={startGame} disabled={isTrue}>
          Start
        </button>
      )}
      {wordCount ? (
        <h4 className="typegame_text">Word Count: {wordCount}</h4>
      ) : null}
    </div>
  );
}

export default TypeGame;
