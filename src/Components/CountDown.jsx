import React, { useEffect, useState } from 'react';
import './CountDown.css';

function CountDown() {
    const [targetTime, setTargetTime] = useState(null);
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [intervalId, setIntervalId] = useState(null);

    useEffect(() => {
        if (!targetTime) return;
        
        // Clear any existing interval
        if (intervalId) {
            clearInterval(intervalId);
        }

        // Start a new interval
        const id = setInterval(() => {
            const now = new Date();
            const difference = targetTime - now;

            if (difference <= 0) {
                clearInterval(id);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
                return;
            }

            setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
            setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
            setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
        }, 1000);

        setIntervalId(id);

        return () => clearInterval(id); // Cleanup on component unmount
    }, [targetTime]); // Run only when targetTime changes

    return (
        <div>
            <h1>CountDown Timer App</h1>
            <div id='countdown'>
                <input
                    type='datetime-local'
                    id='count-input'
                    onChange={(e) => {
                        setTargetTime(new Date(e.target.value));
                    }}
                />
                <button id='submit' onClick={() => console.log(targetTime)}>Start</button>
            </div>
            <div id='display'>
                <ul>
                    <li>
                        <span id='days'>Days</span>
                        <span className='value'>{days}</span>
                    </li>
                    <li>
                        <span id='hours'>Hours</span>
                        <span className='value'>{hours}</span>
                    </li>
                    <li>
                        <span id='minutes'>Minutes</span>
                        <span className='value'>{minutes}</span>
                    </li>
                    <li>
                        <span id='seconds'>Seconds</span>
                        <span className='value'>{seconds}</span>
                    </li>
                </ul>
            </div>
            <button id='reset' onClick={() => {
                clearInterval(intervalId);
                setTargetTime(null);
                setDays(0);
                setHours(0);
                setMinutes(0);
                setSeconds(0);
            }}>Reset</button>
        </div>
    );
}

export default CountDown;
