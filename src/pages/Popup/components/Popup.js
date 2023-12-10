import React from 'react';
import '../../../styles/index.css';
import { AccountItem } from './AccountItem';
export var Popup = function () {
    return (React.createElement("section", { className: "w-[30rem] p-5 shadow rounded-box z-10" },
        React.createElement(AccountItem, null),
        React.createElement(AccountItem, null),
        React.createElement(AccountItem, null)));
};
