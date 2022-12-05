import { Header, Main } from './components'
import { FC } from 'react'
import styles from './Bidding.module.scss'

export const Bidding: FC = (): JSX.Element => {
  return (
    <div className={styles.biddingContainer}>
      <Header />
      <Main />
    </div>
  )
}
