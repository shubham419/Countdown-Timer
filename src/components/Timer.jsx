import React, { useEffect, useState } from "react";
import styles from "./Timer.module.css";
import NumberCard from "./NumberCard";

function Timer() {
  const [start, setStart] = useState(false);
  const [date, setDate] = React.useState(null);
  const [day, setDay] = React.useState(null);
  const [hour, setHour] = React.useState(0);
  const [minute, setMinute] = React.useState(0);
  const [second, setSecond] = React.useState(0);
  const [time, setTime] = React.useState(0);
  const [message, setMessage] = useState(null);

  useEffect(() => {
    if(date){
      const currentDate = new Date();
      const newDate = new Date(date);
      setStart(false);
      setTime((newDate.getTime() - currentDate.getTime()) / 1000);
    }
  }, [date]);



  useEffect(() => {
    const days = Math.floor(time / (3600 * 24));
    const hours = Math.floor((time % (3600 * 24)) / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = Math.floor(time % 60);
    setDay(days);
    setHour(hours);
    setMinute(minutes);
    setSecond(seconds);
    if(day == 0 && hours == 0 && minutes == 0 && seconds == 0){
      setStart(false);
      setMessage("congratulation :) It's now happning")
    }
  }, [time]);

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setTime(time - 1);
      }, 1000);
      // return clearTimeout(id);
    }
  }, [start, time]);

  return (
    <>
      <div className={styles.wrapper}>
        <h1>
          Countdown <span>Timer</span>
        </h1>
        <input
          type="datetime-local"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button
          className={styles.timerButton}
          onClick={() => {
            if(day < 100 && day >= 0 && date){
              setMessage(null);
              setStart(!start);
            }
            else {
              setMessage("Please select correct date");
              setStart(false);
            }
          }}
        >
          {start ? "Cancle" : "Start Timer"}
        </button>
        {message ?  message :
        <div className={styles.countDown}>
          <NumberCard number={day} title="days" />
          <NumberCard number={hour} title="Hours" />
          <NumberCard number={minute} title="Minutes" />
          <NumberCard number={second} title="Seconds" />
        </div> 
        }
      </div>
    </>
  );
}

export default Timer;
