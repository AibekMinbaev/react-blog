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

  const inputIsValied = userInput.duration >= 1

  function handleChange(type, newValue) {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [type]: +newValue // this will convert the data to number type 
      }
    })
  }
  return (
    <>
      <Header />
      <UserInput handleChange={handleChange} userInput={userInput} />
      {!inputIsValied &&
        <p className='center'>Please input duration greater than 0!</p>}
      {inputIsValied && <Results userInput={userInput} />}
    </>

  )
}

export default App
