import { FC } from 'react'
import styles from './Header.module.scss'

export const Header: FC = (): JSX.Element => {
  return (
    <div className={styles.headerContainer}>
      <h1>
        Ход торгов <span>Тестовые торги на аппарат ЛОТОС №2033564 (09.11.2020 07:00)</span>
      </h1>
    </div>
  )
}
