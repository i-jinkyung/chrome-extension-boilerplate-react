import React from 'react';
import { CiCircleMore } from 'react-icons/ci';
import { FcCancel, FcEditImage, FcOk, FcUnlock, FcUndo } from 'react-icons/fc';
export var EditItem = function () {
    return (React.createElement("div", { className: "dropdown dropdown-bottom dropdown-end !relative h-fit overflow-y-visible" },
        React.createElement(CiCircleMore, { size: 16, tabIndex: 0, role: "button", className: "text-gray-300 hover:text-gray-500 transition-all" }),
        React.createElement("ul", { tabIndex: 0, className: "dropdown-content !z-50 menu p-2 shadow bg-base-100 rounded-box w-52\n        !absolute !float-left" },
            React.createElement("li", { className: "py-1" },
                React.createElement("div", null,
                    React.createElement(FcOk, { size: 14, className: "mr-1" }),
                    "Copy Username")),
            React.createElement("li", { className: "border-b py-1" },
                React.createElement("div", null,
                    React.createElement(FcOk, { size: 14, className: "mr-1" }),
                    "Copy Password")),
            React.createElement("li", { className: "py-1" },
                React.createElement("div", null,
                    React.createElement(FcUnlock, { size: 14, className: "mr-1" }),
                    "View Password")),
            React.createElement("li", { className: "py-1" },
                React.createElement("div", null,
                    React.createElement(FcEditImage, { size: 14, className: "mr-1" }),
                    "Edit")),
            React.createElement("li", { className: "border-b py-1" },
                React.createElement("div", null,
                    React.createElement(FcCancel, { size: 14, className: "mr-1" }),
                    "Delete")),
            React.createElement("li", { className: "py-1" },
                React.createElement("div", null,
                    React.createElement(FcUndo, { size: 14, className: "mr-1" }),
                    "Share")))));
};
