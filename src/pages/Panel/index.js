import React from 'react';
import { createRoot } from 'react-dom/client';
import Panel from './Panel';
import './index.css';
var container = document.getElementById('app-container');
var root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(React.createElement(Panel, null));
