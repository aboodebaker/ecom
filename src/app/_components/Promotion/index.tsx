'use client'
import React, { useEffect } from 'react'

import classes from './index.module.scss'

const Promotion = () => {

    const [time, setTime] = React.useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 8); // add 8 days
  
    useEffect(() => {
      const timerInterval = setInterval(() => {
        const currentTime = new Date();
        const timeDifference = Math.max(targetDate.getTime() - currentTime.getTime(), 0); // use getTime()
  
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);
  
        setTime({ days, hours, minutes, seconds });
  
        if (timeDifference === 0) {
          clearInterval(timerInterval);
        }
      }, 1000);
  
      return () => clearInterval(timerInterval);
    }, []);

  return (
    <section className={classes.promotion}>
        <div className={classes.textbox}>
            <h3 className={classes.title}>Deals of the Month</h3>
            <p>
                Get ready to save big on your favorite products!
                Our exclusive deals are designed to help you make the most of your shopping experience.
                Don't miss out on these limited-time offers!
            </p>
            <ul className={classes.stats}>
                <StatBox label='Days' value={time.days} />
                <StatBox label='Hours' value={time.hours} />
                <StatBox label='Minutes' value={time.minutes} />
                <StatBox label='Seconds' value={time.seconds} />
            </ul>
        </div>
    </section>
  )
}

const StatBox = ({ label, value }: {label: string, value: number}) => (
    <li className={classes.statBox}>
                    <h4>{value}</h4>
                    <p>{label}</p>
                </li>
)
export default Promotion