import { FC, useEffect, useState } from 'react'
import { ReactComponent as SandClock } from './img/sandClock.svg'
import styles from './Timer.module.scss'

interface ITimerProps {
  currentTimeActive: number
  setCurrentTimeActive: React.Dispatch<React.SetStateAction<number>>
}

export const Timer: FC<ITimerProps> = ({
  currentTimeActive,
  setCurrentTimeActive,
}): JSX.Element => {
  const [isCounting, setIsCounting] = useState(false)
  const [timeLeft, setTimeLeft] = useState(2 * 60)

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getPadTime = (time: any) => time.toString().padStart(2, '0')
  const minutes = getPadTime(Math.floor(timeLeft / 60))
  const seconds = getPadTime(timeLeft - minutes * 60)
  useEffect(() => {
    setIsCounting(true)
    const interval = setInterval(() => {
      isCounting && setTimeLeft((timeLeft) => (timeLeft >= 1 ? timeLeft - 1 : 0))
    }, 1000)
    if (timeLeft === 0) setCurrentTimeActive(currentTimeActive + 1)
    return () => {
      clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft, isCounting])

  return (
    <div className={styles.timerContainer}>
      <div className={styles.timer}>
        {minutes} : {seconds}
      </div>
      <div className={styles.timerLogo}>
        <SandClock />
      </div>
    </div>
  )
}
