import "./FormStyles.css";

export default function PopUp({ isVisible, errorMessage = null }) {
  if (isVisible) {
    return (
      <div className="popup container">
        <div className="popup-content">
          {/* <h1>The Form Has Been Submitted Successfully</h1> */}
          <h1 style={{ color: errorMessage ? "red" : "green" }}>{errorMessage != null ? errorMessage : "The Form Has Been Submitted Successfully"}</h1>
        </div>
      </div>
    )
  } else {
    return (<></>)
  }

}