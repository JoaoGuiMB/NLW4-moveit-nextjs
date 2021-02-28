import { useState, useEffect, useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "../../styles/components/Countdown.module.css";

export default function Coutdown() {
  const {
    minutes,
    seconds,
    startCountdown,
    hasFinished,
    isActive,
    resetCountdown,
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, "0").split("");
  const [secondLeft, secondRight] = String(seconds).padStart(2, "0").split("");

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </div>
      {hasFinished ? (
        <button
          disabled
          className={`${styles.countdownButton}`}
          onClick={resetCountdown}
        >
          Ciclo encerrado
        </button>
      ) : (
        <>
          {!isActive ? (
            <button
              type="button"
              className={styles.countdownButton}
              onClick={startCountdown}
            >
              Iniciar ciclo
            </button>
          ) : (
            <button
              type="button"
              className={`${styles.countdownButton} ${styles.countdownButtonActive}`}
              onClick={resetCountdown}
            >
              Abandonar Clico
            </button>
          )}
        </>
      )}
    </div>
  );
}
