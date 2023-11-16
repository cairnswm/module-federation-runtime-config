import React from "react";
import ReactDOM from "react-dom/client";
import Button from './components/button';
import styles from "styleguide/styleguide"

const App = () => (
  <div className="container">
      <div>
        <h1>Components MFE</h1>
      </div>
      <div style={{fontSize:"small", marginTop:"1rem"}}>
      Functionality could be added here to show the different possible styles
    </div>
    <hr/>
    <div>
      Button<br/>
      <button>Text</button>
    </div>
    <hr/>
    <div style={{fontSize:"small", marginTop:"1rem"}}>
      While the components library is be default not styled, this page uses the default style guide (styleguide2) to show how the components could be styled
    </div>

  </div>
);
const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
