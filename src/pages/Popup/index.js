import React from 'react';
import { createRoot } from 'react-dom/client';
import { Popup } from './components/Popup';
var container = document.getElementById('app-container');
var root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(React.createElement(Popup, null));
