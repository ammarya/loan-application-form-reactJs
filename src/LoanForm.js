import "./FormStyles.css";
import PopUp from "./PopUp";
import { useState } from "react";


export default function LoanForm() {
  const [errorMessage, setErrorMessage] = useState(null)
  const [showPopUp, setShowPopUp] = useState(false)
  const [loanInputs, setLoanInputs] = useState({
    name: "",
    phoneNumber: "",
    age: "",
    isEmployee: false,
    salaryRange: "",
  })

  function handleFormSubmit(event) {
    event.preventDefault();
    setErrorMessage(null)
    const { age } = loanInputs
    const { phoneNumber } = loanInputs
    if (age < 18 || age > 100) {
      setErrorMessage("The age is not allowed")
    } else if (phoneNumber.length < 10 || phoneNumber.length > 12) {
      setErrorMessage("Phone Number Format Is Incorrect")
    }
    setShowPopUp(true)
  }

  const btnIsDisabled = loanInputs.name === "" || loanInputs.phoneNumber === "" || loanInputs.age === "";

  let btnClasses = "";
  if (btnIsDisabled) {
    btnClasses = "disabled";
  } else {
    btnClasses = "enabled";
  }

  function handleDivClick() {
    if (showPopUp) {
      setShowPopUp(false)
    }
  }

  return (
    <div className="flex" onClick={handleDivClick}>
      <form id="loan-form" >
        <h1>Loan Requesting Form</h1>
        <hr></hr>
        <div>
          <label>Name:</label>
          <input value={loanInputs.name} onChange={(event) => { setLoanInputs({ ...loanInputs, name: event.target.value }) }} />
        </div>

        <div>
          <label>Phone Number:</label>
          <input type="number" value={loanInputs.phoneNumber} onChange={(event) => { setLoanInputs({ ...loanInputs, phoneNumber: event.target.value }) }} />
        </div>

        <div>
          <label>Age:</label>
          <input type="number" value={loanInputs.age} onChange={(event) => { setLoanInputs({ ...loanInputs, age: event.target.value }) }} />
        </div>

        <div>
          <label>Are you an employee?</label>
          <input className="checkbox" type="checkbox" checked={loanInputs.isEmployee} onChange={(event) => { setLoanInputs({ ...loanInputs, isEmployee: event.target.checked }) }} />
        </div>

        <div>
          <label>Salary:</label>
          <select value={loanInputs.salaryRange} onChange={(event) => { setLoanInputs({ ...loanInputs, salaryRange: event.target.value }) }}>
            <option>less than 5000$</option>
            <option>between 5000$ and 10000$</option>
            <option>above 10000$</option>
          </select>
        </div>

        <button className={btnClasses} disabled={btnIsDisabled} onClick={handleFormSubmit} >Submit</button>

      </form>
      <PopUp isVisible={showPopUp} errorMessage={errorMessage} />
    </div>
  )
}