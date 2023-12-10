import React from 'react';
import { FcLock } from 'react-icons/fc';
export var LockedPopup = function () {
    return (React.createElement("div", { className: "text-center py-20 max-w-xs m-auto flex flex-col gap-5" },
        React.createElement("h1", { className: "font-semibold text-lg mb-3 flex gap-1.5 justify-center items-center" },
            React.createElement(FcLock, { size: 20 }),
            "Enter Your Master Password!"),
        React.createElement("input", { type: "text", className: "input input-bordered w-full max-w-xs" }),
        React.createElement("p", { className: "text-sm text-gray-500" },
            "Your account has been locked ",
            React.createElement("br", null),
            " due to inactivity for the last 6 months."),
        React.createElement("button", { className: "btn btn-primary w-full text-white" }, "Continue")));
};
