import { TradeParticipants } from '../../../../../../TradeParticipants'
import { ITradeParticipants } from '../../Main.types'
import { FC } from 'react'
import styles from './MiddleBidding.module.scss'

export const MiddleBidding: FC = (): JSX.Element => {
  return (
    <div className={styles.middleBiddingContainer}>
      <div className={styles.biddingRowHeaderContainer}>
        <div className={styles.biddingRowHeader}>
          Наличие комплекса мероприятий, повышающих стандарты качества изготовления
        </div>
        <div className={styles.biddingRowHeader}>Срок изготовления лота, дней</div>
        <div className={styles.biddingRowHeader}>Гарантийные обязательства, мес</div>
        <div className={styles.biddingRowHeader}>Условия оплаты</div>
        <div className={styles.biddingRowHeader}>Стоимость изготовления лота, руб. (без НДС)</div>
        <div className={styles.biddingRowHeader}>Действия:</div>
      </div>
      {TradeParticipants.map((participant: ITradeParticipants, i) => (
        <div key={i} className={styles.biddingParametersContainer}>
          <div className={styles.biddingRow1}>{participant.biddingRow1}</div>
          <div className={styles.biddingRow2}>{participant.biddingRow2}</div>
          <div className={styles.biddingRow3}>{participant.biddingRow3}</div>
          <div className={styles.biddingRow4}>{participant.biddingRow4}</div>
          <div className={styles.biddingRow5}>
            <div>{participant.biddingRow5} руб.</div>
            <div>-25,000 руб.</div>
            <div>2,475,000 руб.</div>
          </div>
        </div>
      ))}
    </div>
  )
}
