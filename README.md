# Run time configuration for Module Federation - Example

Run time configuration for Micro Front Ends gives a good developer experience as it allows a developer to integrate a module being developed locally into a deployed environment. Single Spa does this very successfully.

This demo shows an implementation for Module Federation that implements a similar structure to the Single Spa devtools functionality.

## Running the Example

### Install

- Open the complete project in VS Code
- Open a terminal for each project (except styleguide2)
    - host
    - components
    - styleguide
- in each terminal Run
    - ```npm i```
- in each terminal Run
    - ```npm start```

Each project will open a new window
- 3060: Host application
- 3061: Style Guide
- 3062: components

The Host application will show Details about the host and a Red Button, the button is defined as a component in the components MFE, while the styling for the button is defined in the styleguide MFE


### Runnning the override styles

Repeat the above for styleguide2 - this contains the overrides for the styles that we will configure while the host is Running
the new style guide will be loaded at http://localhost:3063 - (note the different port number)

### Defining a run time override for the styleguide

In the Host window (http://localhost:3060)
- open the Browser Devtools
- add a new localstorage value
    - name: devtools
    - value: true
- Once the localstorage value is set, in the bottom right hand corner a devtools button will be displayed
- click on the devtools button
- in the modal, click on the edit button for the style guide
- add the following override http://localhost:3063/remoteEntry.js
- click save

- press f% to refresh the host applicatyion
- note the newly styled button, (larger, green and rounded corners)

## Developer Workflow

The runtime configuration of MicroFront Ends leads to a better developer workflow as developers can "mount" their local development instance into different environments.

For example the developer may login to a QA environment that contains suitable data and then mount the local copy of a MFE that is under development. The chnages they make locally can then be seen in the "QA" envoironment.

This is especially useful for things like Authentication that can therefore work within the QA Authentication mechanism, including token refreshes, without having to add any local code.