import React from 'react';
import ReactDOM from 'react-dom';
import AppA from './appA/AppA';
import AppB from "./appB/AppB";

const idAppA = "appA";
const idAppB = "appB"

if (document.getElementById(idAppA)) {
  ReactDOM.render(
      <AppA />,
      document.getElementById(idAppA)
  );
};

if (document.getElementById(idAppA)) {
  ReactDOM.render(
      <AppB/>,
      document.getElementById(idAppB)
  );
};
