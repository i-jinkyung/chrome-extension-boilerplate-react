import React from 'react';
import '../../../styles/index.css';
import { AccountItem } from './AccountItem';

export const Popup = () => {
  return (
    <section className="w-[30rem] p-5 shadow rounded-box z-10">
      <AccountItem />
      <AccountItem />
      <AccountItem />
    </section>
  );
};
