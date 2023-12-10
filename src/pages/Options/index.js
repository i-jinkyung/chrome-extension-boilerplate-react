import React from 'react';
import { createRoot } from 'react-dom/client';
import Options from './Options';
import './index.css';
var container = document.getElementById('app-container');
var root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(React.createElement(Options, { title: 'Settings' }));
