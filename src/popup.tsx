import * as React from "react"
import ReactDOM from "react-dom"

// Initialize background page
// chrome.runtime.getBackgroundPage((backgroundPage) => {
//   console = backgroundPage.console
// })

const Popup = () => {
  return (
    <React.Fragment>
      <button
        onClick={() => alert("cool beanz")}
        style={{ marginRight: "5px" }}
      >
        Start
      </button>
    </React.Fragment>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>,
  document.getElementById("root")
)
