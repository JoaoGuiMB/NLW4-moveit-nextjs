import { useContext } from "react"
import { ChallengesContext } from "../../contexts/ChallengesContext"
import styles from "../../styles/components/CompletedChallenges.module.css"

export function CompltedChallenges() {
    const { challengesCompleted } = useContext(ChallengesContext)

    return (
        <div className={styles.computedChallengesContainer}>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </div>
    )
}