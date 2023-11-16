import React from "react";
import ReactDOM from "react-dom/client";
import Button from "components/Button";
import DevTools from "./devtools/devtools";
import Styleguide from "./pages/styleguide";

const App = () => {
  return (
    <div className="container">
      <div>
        <h1>Main application</h1>
      </div>
      <p>This is the host application that loads and displays information from MicroFront Ends</p>
      <p>Typically this app would store global state that would be used in each child application</p>
      <p>For example:</p>
        <ul>
          <li>Authentication information</li>
        </ul>
      <div>
        <hr/>
        <p><strong>This section shows a button loaded from the component library, and styled from the Styleguide</strong></p>
        <Button>Remote Button</Button>
      </div>
      <DevTools />
      <div>
        <hr/>
        <p><strong>This section shows that the style guide is loaded. Typically the style guide would not display anyhting when loaded, this is just to show which stlye guide is active</strong></p>
        <Styleguide />
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
