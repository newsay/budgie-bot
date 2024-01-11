import { useState } from 'react'
import budgieLogo from './assets/budgieLogo.png'
import './App.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='budgieTitle'> <img src={budgieLogo} className="budgie" /> Budgie Bot  </h1>
      <h2>Created with React, TypeScript, Vite & Material UI</h2>

      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', width: '50vw', height: '100vh' }} >
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </Box>
      </Container>

    </>
  )
}

export default App
