import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to Uppercase', 'Success');
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to Lowercase', 'Success');
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleClearAll = (event) => {
    setText('');
    props.showAlert('Cleared!', 'Success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to Clipboard!', 'Success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert('Extra spaces removed.', 'Success');
  };

  const handleChangeCase = () => {
    let newStr = '';
    for (let i = 0; i < text.length; i++) {
      if (text[i] === text[i].toUpperCase()) {
        newStr = newStr + text[i].toLowerCase();
      } else {
        newStr = newStr + text[i].toUpperCase();
      }
    }
    setText(newStr);
    props.showAlert('Case changed', 'Success');
  };

  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className='mb-3'>
          <textarea
            className='form-control'
            value={text}
            placeholder='Type here...'
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'light' ? 'white' : '#000032',
              color: props.mode === 'light' ? 'black' : 'white',
              placeholderColor: props.mode === 'light' ? 'black' : 'white',
            }}
            id='myBox'
            rows='8'></textarea>
        </div>
        <button className='btn btn-primary' onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className='btn btn-primary mx-1' onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className='btn btn-primary mx-1' onClick={handleCopy}>
          Copy
        </button>
        <button className='btn btn-primary mx-1' onClick={handleChangeCase}>
          Change case
        </button>
        <button className='btn btn-primary mx-1' onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
        <button className='btn btn-danger mx-1' onClick={handleClearAll}>
          Clear All
        </button>
      </div>
      <div className='container my-4'>
        <h2>Your text summary</h2>
        <p>
          {text.split(' ').length} words and {text.length} character
        </p>
        <p>{0.008 * text.split(' ').length} minutes read</p>
        <h3>Preview</h3>
        <p>{text.length > 0 ? text : 'Write something to preview'}</p>
      </div>
    </>
  );
}
