import React from 'react';
import '../../../styles/index.css';
import { AccountItem } from './AccountItem';
import { LockedPopup } from './LockedPopup';

export const Popup = () => {
  return (
    <section className="w-[30rem] h-[30rem] p-5 shadow z-10">
      <AccountItem />

      {/*<LockedPopup />*/}
    </section>
  );
};
