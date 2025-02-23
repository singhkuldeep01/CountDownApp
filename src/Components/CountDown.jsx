import React, { useEffect, useState } from 'react'
import './CountDown.css'
function CountDown() {
    const[tartgetTime, setTargetTime] = useState(0);

    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [diff, setDiff] = useState(0);


    useEffect(()=>{
        setDiff(tartgetTime - new Date());
    } , [tartgetTime]);

  return (
    <div>
    {diff}
        <h1>CountDown Timer App</h1>
        <div id='countdown'>
            <input type='datetime-local' id='count-input' onChange={(e)=>{
                setTargetTime(new Date(e.target.value));
            }}></input>
            <button id='submit' onClick={()=>{
                console.log(tartgetTime);
            }}>Start</button>
        </div>
        <div id='display'>
            <ul>
                <li>
                    <span id='days'>Days</span>
                    <span className='value'>0</span>
                </li>
                {/* <span>:</span> */}
                <li>
                    <span id='hours'>Hours</span>
                    <span className='value'>0</span>
                </li>
                <li>
                    <span id='minutes'>Minutes</span>
                    <span className='value'>0</span>
                </li>
                <li>
                    <span id='seconds'>Seconds</span>
                    <span className='value'>0</span>
                </li>
            </ul>
        </div>
        <button id='reset'>Reset</button>
    </div>
  )
}

export default CountDown