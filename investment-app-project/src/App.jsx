import { useState } from 'react'
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results"

function App() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10
  })

  function handleChange(type, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [type]: newValue
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      <Results userInput={userInput} />
    </>

  )
}

export default App
