import React from 'react';
import { createRoot } from 'react-dom/client';
import Popup from './Popup';
import './index.css';
var container = document.getElementById('app-container');
var root = container && createRoot(container); // createRoot(container!) if you use TypeScript
root === null || root === void 0 ? void 0 : root.render(React.createElement(Popup, null));
