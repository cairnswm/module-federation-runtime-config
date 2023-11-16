import React from "react";
import ReactDOM from "react-dom/client";
import "./styleguide";

const App = () => (
  <div className="container">
    <div>
      <h1>StyleGuide MFE</h1>
    </div>
    <hr />
    <div>
      Example Button
      <br />
      <button>Text</button>
    </div>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
