import { MiddleBidding, MiddleTParticipants } from './components'
import { FC } from 'react'
import styles from './Main.module.scss'

export const Main: FC = (): JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.mainHeader}>
        <h3>
          Уважаемые участники, во время вашего хода вы можете изменить параметры торгов, указанных в
          таблице:
        </h3>
      </div>
      <div className={styles.middleContainer}>
        <div className={styles.motionText}>ХОД</div>
        <MiddleTParticipants />
        <MiddleBidding />
      </div>
    </div>
  )
}
