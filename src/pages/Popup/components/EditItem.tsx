import React from 'react';
import { CiCircleMore } from 'react-icons/ci';
import { FcCancel, FcEditImage, FcOk, FcUnlock, FcUndo } from 'react-icons/fc';

export const EditItem = () => {
  return (
    <div className="dropdown dropdown-bottom dropdown-end !relative h-fit overflow-y-visible">
      <CiCircleMore
        size={16}
        tabIndex={0}
        role="button"
        className="text-gray-300 hover:text-gray-500 transition-all"
      />

      <ul
        tabIndex={0}
        className="dropdown-content !z-50 menu p-2 shadow bg-base-100 rounded-box w-52
        !absolute !float-left"
      >
        {/*이메일 복사*/}
        <li className="py-1">
          <div>
            <FcOk size={14} className="mr-1" />
            Copy Username
          </div>
        </li>
        {/*비밀번호 복사*/}
        <li className="border-b py-1">
          <div>
            <FcOk size={14} className="mr-1" />
            Copy Password
          </div>
        </li>
        {/*비밀번호 보기*/}
        <li className="py-1">
          <div>
            <FcUnlock size={14} className="mr-1" />
            View Password
          </div>
        </li>
        {/*편집*/}
        <li className="py-1">
          <div>
            <FcEditImage size={14} className="mr-1" />
            Edit
          </div>
        </li>
        {/*삭제*/}
        <li className="border-b py-1">
          <div>
            <FcCancel size={14} className="mr-1" />
            Delete
          </div>
        </li>
        {/*공유*/}
        <li className="py-1">
          <div>
            <FcUndo size={14} className="mr-1" />
            Share
          </div>
        </li>
      </ul>
    </div>
  );
};
