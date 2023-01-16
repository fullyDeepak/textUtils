import React, { useState } from 'react';
import './App.css';
import Alert from './components/Alert';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { BrowserRouter, Routes, Route, Link, NavLink } from 'react-router-dom';

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
    <BrowserRouter>
      <header>
        <Navbar title='textUtils' mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
      </header>
      <main>
        <Routes>
          <Route
            index
            element={
              <div className='container my-3'>
                <TextForm
                  heading='Enter the text to manipulate'
                  mode={mode}
                  showAlert={showAlert}
                />
              </div>
            }
          />
          <Route path='about' element={<About />} />
          {/* <About /> */}
          {/* <div className='container my-3'>
            <TextForm
              heading='Enter the text to manipulate'
              mode={mode}
              showAlert={showAlert}
            />
          </div> */}
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
