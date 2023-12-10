import React from 'react';
import { Avatar } from '../../share/Avatar';
import { EditItem } from './EditItem';
export var AccountItem = function () {
    return (React.createElement("div", { className: "collapse collapse-arrow !relative" },
        React.createElement("input", { type: "radio", name: "my-accordion-2" }),
        React.createElement("div", { className: "collapse-title text-lg font-medium flex gap-2 items-center" },
            React.createElement(Avatar, null),
            React.createElement("span", null, "Slack")),
        React.createElement("ul", { className: "collapse-content" },
            React.createElement("li", { className: "p-3 flex justify-between cursor-pointer" },
                React.createElement("div", null,
                    React.createElement("p", { className: "font-semibold" }, "jinie@01republic.io"),
                    React.createElement("p", { className: "text-gray-500" }, "password1234!")),
                React.createElement(EditItem, null)),
            React.createElement("li", { className: "px-3 mb-2 flex justify-between" },
                React.createElement("div", null,
                    React.createElement("p", { className: "font-semibold" }, "jinie@01republic.io"),
                    React.createElement("p", { className: "text-gray-500" }, "password1234!")),
                React.createElement(EditItem, null)))));
};
