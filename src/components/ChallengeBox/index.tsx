import styles from "../../styles/components/ChallengeBox.module.css";

export function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <>
          <div className={styles.challengeActive}>
            <header>Ganhe 400xp</header>
            <main>
                <img src="icons/body.svg"/>
                <strong>Novo Desafio</strong>
                <p>Levante e faça uma caminhada de 3 minutos</p> 
            </main>
            <footer>
                    <button className={styles.challegedFailed} type="button">Falhei</button>
                    <button className={styles.challegedSuccessed} type="button">Completei</button>
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
