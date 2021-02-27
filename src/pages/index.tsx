import { CompltedChallenges } from "../components/CompletedChallenges";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import  Countdown  from '../components/Countdown'
import styles from '../styles/pages/Home.module.css'

import Head from 'next/head'
import { ChallengeBox } from "../components/ChallengeBox";

export default function Home() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title> Início | move.it </title>
        </Head>
        <ExperienceBar />
        <section>
        <div>
          <Profile />
          <CompltedChallenges />
          <Countdown />
        </div>
        <div>
          <ChallengeBox />
        </div>
      </section>
      </div>

    </>
  );
}
