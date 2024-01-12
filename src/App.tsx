import { FormEvent, useState } from 'react'
import budgieLogo from './assets/budgieLogo.png'
import './App.css'
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { AccountForm } from "./AccountForm";
import { AddressForm } from "./AddressForm";
import { useMultistepForm } from "./useMultistepForm";
import { UserForm } from "./UserForm"

type FormData = {
  firstName: string
  lastName: string
  age: string
  street: string
  city: string
  state: string
  zip: string
  email: string
  password: string
}

const INITIAL_DATA: FormData = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
}

function App() {
  const [data, setData] = useState(INITIAL_DATA)
  function updateFields(fields: Partial<FormData>) {
    setData(prev => {
      return { ...prev, ...fields }
    })
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <UserForm {...data} updateFields={updateFields} />,
      <AddressForm {...data} updateFields={updateFields} />,
      <AccountForm {...data} updateFields={updateFields} />,
    ])

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!isLastStep) return next()
    alert("Successful Account Creation")
  }

  return (
    <>
      <h1 className='budgieTitle'> <img src={budgieLogo} className="budgie" /> Budgie Bot  </h1>
      <h2>Created with React, TypeScript, Vite & Material UI</h2>
      <Container fixed>
        <Box sx={{ bgcolor: '#cfe8fc', width: '50vw', height: '100vh' }} >
          <div style={{
            position: "relative",
            background: "white",
            border: "1px solid black",
            padding: "2rem",
            margin: "1rem",
            borderRadius: ".5rem",
            fontFamily: "Arial",
            maxWidth: "max-content",
            color: "black",
          }}>
            <form onSubmit={onSubmit}>
              <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
                {currentStepIndex + 1} / {steps.length}
              </div>
              {step}
              <div style={{
                marginTop: "1rem",
                display: "flex",
                gap: ".5rem",
                justifyContent: "flex-end",
              }}
              >
                {!isFirstStep && (
                  <button type="button" onClick={back}>
                    Back
                  </button>
                )}
                <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
              </div>
            </form>
          </div>
        </Box>
      </Container>

    </>
  )
}

export default App
