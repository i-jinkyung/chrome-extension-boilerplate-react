import React from 'react';
import { Avatar } from '../../share/Avatar';
import { EditItem } from './EditItem';

export const AccountItem = () => {
  return (
    <div className="collapse collapse-arrow !relative overflow-y-visible text-base">
      <input type="radio" name="my-accordion-2" />
      {/*서비스명*/}
      <div className="collapse-title text-lg font-medium flex gap-2 items-center">
        {/*<Avatar src="	https://t2.gstatic.com/faviconV2?client=SOCIAL&typ…IZE,URL&size=128&url=https://slack.com/intl/ko-kr" />*/}
        <Avatar />
        <span>Slack</span>
      </div>
      {/*계정*/}
      <ul className="collapse-content">
        <li className="p-3 flex justify-between cursor-pointer">
          <div>
            <p className="font-semibold">jinie@01republic.io</p>
            <p className="text-gray-500">password1234!</p>
          </div>
          <EditItem />
        </li>
        <li className="px-3 mb-2 flex justify-between">
          <div>
            <p className="font-semibold">jinie@01republic.io</p>
            <p className="text-gray-500">password1234!</p>
          </div>
          <EditItem />
        </li>
      </ul>
    </div>
  );
};
