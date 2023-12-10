import React from 'react';
import { FcLock } from 'react-icons/fc';

export const LockedPopup = () => {
  return (
    <div className="text-center py-20 max-w-xs m-auto flex flex-col gap-5">
      <h1 className="font-semibold text-lg mb-3 flex gap-1.5 justify-center items-center">
        <FcLock size={20} />
        Enter Your Master Password!
      </h1>

      <input type="text" className="input input-bordered w-full max-w-xs" />

      <p className="text-sm text-gray-500">
        Your account has been locked <br /> due to inactivity for the last 6
        months.
      </p>
      <button className="btn btn-primary w-full text-white">Continue</button>
    </div>
  );
};
