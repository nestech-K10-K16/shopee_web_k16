import React, { useState } from 'react';
import { Navbar } from '../../components';
import './index.css';

const MyAccount = () => {
  const [value, setValue] = useState('');
  const [isShow, setIsShow] = useState(false);
  return (
    <div className="container">
      <Navbar />
      <input
        type={isShow ? 'password' : 'text'}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button
        onClick={() => {
          setIsShow((pre) => !pre);
        }}
      >
        {isShow ? 'Show' : 'Hide'}
      </button>
    </div>
  );
};

export default MyAccount;
