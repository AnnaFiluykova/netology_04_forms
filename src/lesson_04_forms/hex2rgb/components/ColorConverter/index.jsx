import React, { useState } from 'react';
import './style.css';

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result
    ? `RGB(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
    : null;
}

const ColorConverter = () => {
  const [inputValue, setInputValue] = useState('');
  const [result, setResult] = useState('');
  const [bgColor, setBgColor] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setInputValue(value);

    if (value.length === 7) {
      if (/^#[0-9A-F]{6}$/i.test(value)) {
        setResult(hexToRgb(value));
        setBgColor(value);
      } else {
        setResult('Ошибка!');
        setBgColor('#E94B35');
      }
    } else {
      setResult('');
      setBgColor('');
    }
  }

  return (
    <div style={{ backgroundColor: bgColor }} className='container'>
      <div>
        <input className="input" onChange={handleChange} value={inputValue}/>
      </div>
      <div className='result'>
        {result}
      </div>
    </div>
  )
}

export default ColorConverter;
