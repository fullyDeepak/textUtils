import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
// import About from "./components/About";
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const showAlert = (msg, type) => {
    setAlert({
      msg,
      type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 750);
  };
  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#09004d';
      document.body.style.color = '#fff';
      showAlert('Dark mode has been enabled', 'success');
      document.title = 'textUtils - Dark Mode';
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = '#000';
      document.title = 'textUtils - Light Mode';
      showAlert('Light mode has been enabled', 'success');
    }
  };
  return (
    <>
      <Alert alert={alert} />
      <Navbar title='textUtils' mode={mode} toggleMode={toggleMode} />
      <div className='container my-3'>
        {/* <About /> */}
        <TextForm
          heading='Enter the text to manipulate'
          mode={mode}
          showAlert={showAlert}
        />
      </div>
    </>
  );
}

export default App;
