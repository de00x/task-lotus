import { TradeParticipants } from '../../../../../../TradeParticipants'
import { ReactComponent as Person } from '../img/person.svg'
import { ITradeParticipants } from '../../Main.types'
import { Timer } from '../../../Timer'
import { FC, useState } from 'react'
import styles from './MiddleTPartic.module.scss'

export const MiddleTParticipants: FC = (): JSX.Element => {
  const [currentTimeActive, setCurrentTimeActive] = useState(1)
  return (
    <div className={styles.middleTParticContainer}>
      <div className={styles.middleTParticText}>ПАРАМЕТРЫ И ТРЕБОВАНИЯ</div>
      {TradeParticipants.map((participant: ITradeParticipants, i) => (
        <div key={i} className={styles.middleTParticipants}>
          {currentTimeActive === i + 1 ? (
            <Timer
              currentTimeActive={currentTimeActive}
              setCurrentTimeActive={setCurrentTimeActive}
            />
          ) : null}
          <div>Участник № {i + 1}</div>
          <div>
            <Person /> {participant.name}
          </div>
        </div>
      ))}
    </div>
  )
}
