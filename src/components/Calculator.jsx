import './Calculator.css'

import React, { useState } from "react";

import { Box } from '@mui/system';
import { Container } from '@mui/material';

export default function Calculator() {
    const[num, setNum]=useState(0);
    const[oldNum, setOldNum]=useState(0);
    const[operator, setOperator]=useState();

    function inputNum(e) {
        if(num===0){
            setNum(e.target.value);    
        } else {
            setNum(num + e.target.value);
        }
    }

    function clear() {
        setNum(0);
    }

    function percentage() {
        setNum(num/100);
    }

    function changeSign() {
        setNum(num * -1);
        }

    function operatorHandler(e) {
        var opInput = e.target.value;
        setOperator(opInput);
        setOldNum(num);
        setNum(0);
    }

    function calculate(){
        if (operator === "÷") {
            setNum(parseFloat(oldNum) / parseFloat(num))
        } else if (operator === "X") {
            setNum(parseFloat(oldNum) * parseFloat(num))
        } else if (operator === "-") {
            setNum(parseFloat(oldNum) - parseFloat(num))
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
    }

    function backspace(){
        setNum(num.slice(0, num.length - 1));
        }

    return (
        <div>
        <Box m={5}/>    
        <Container maxWidth="xs">
            <div className='wrapper'>
            <Box m={12}/> 
                <div className='result'>{num}</div>
                <button className='lighter-gray' onClick={clear}>AC</button>
                <button className='lighter-gray' onClick={backspace}>←</button>
                <button className='lighter-gray' onClick={percentage}>%</button>
                <button className='orange' onClick={operatorHandler} value="÷">÷</button>
                <button className='gray' onClick={inputNum} value={7}>7</button>
                <button className='gray' onClick={inputNum} value={8}>8</button>
                <button className='gray' onClick={inputNum} value={9}>9</button>
                <button className='orange' onClick={operatorHandler} value="X">X</button>
                <button className='gray' onClick={inputNum} value={4}>4</button>
                <button className='gray' onClick={inputNum} value={5}>5</button>
                <button className='gray' onClick={inputNum} value={6}>6</button>
                <button className='orange' onClick={operatorHandler} value="-">-</button>
                <button className='gray' onClick={inputNum} value={1}>1</button>
                <button className='gray' onClick={inputNum} value={2}>2</button>
                <button className='gray' onClick={inputNum} value={3}>3</button>
                <button className='orange' onClick={operatorHandler} value="+">+</button>
                <button className='gray' onClick={changeSign}>+/-</button>
                <button className='gray' onClick={inputNum} value={0}>0</button>
                <button className='gray' onClick={inputNum} value={"."}>,</button>
                <button className='orange' onClick={calculate}>=</button>
            </div>
        </Container>
        </div>
    )
}