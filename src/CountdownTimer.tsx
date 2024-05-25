import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: string;
  headerText: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate, headerText }) => {
  const colors = ['#7AB8BF', '#C4EEF2', '#9FC131', '#DBF227', '#D6D58E', '#FFCB9A', '#F2E7DC', '#EDAA25'];

  const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
  };

  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
  const [bgColor, ] = useState(getRandomColor());

  useEffect(() => {
    const timerId = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timerId);
  }, [timeLeft]);

  const styles = {
    container: {
      textAlign: 'center' as 'center',
      backgroundColor: bgColor,
      padding: '1px',
      borderRadius: '10px',
      margin: '10px',
    },
  };

  return (
    <div style={styles.container}>
      <h2>{headerText}</h2>
      <h1>{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</h1>
    </div>
  );
};

export default CountdownTimer;
