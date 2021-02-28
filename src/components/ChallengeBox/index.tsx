import { useContext } from "react";
import { ChallengesContext } from "../../contexts/ChallengesContext";
import { CountdownContext } from "../../contexts/CountdownContext";
import styles from "../../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeCompleted() {
    completeChallenge()
    resetCountdown()
  }

  function handleChallengeFailed() {
    resetChallenge()
    resetCountdown()
  }

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallenge ? (
        <>
          <div className={styles.challengeActive}>
            <header>Ganhe {activeChallenge.amount}xp</header>
            <main>
                <img src={`icons/${activeChallenge.type}.svg`}/>
                <strong>Novo Desafio</strong>
                <p>{activeChallenge.description}</p> 
            </main>
            <footer>
                    <button className={styles.challegedFailed} type="button" onClick={handleChallengeFailed}>Falhei</button>
                    <button className={styles.challegedSuccessed} type="button" onClick={handleChallengeCompleted}>Completei</button>
                </footer>
          </div>
        </>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>
            Inicie um ciclo para receber desafios a serem completados
          </strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de nível completando desafios
          </p>
        </div>
      )}
    </div>
  );
}
