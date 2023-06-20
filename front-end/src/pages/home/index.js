import React from 'react';
import AppButton from '../../components/button';
import './style.css';

const Home = () => {
  return (
    <div className="container">
      <AppButton className="btn" isActive={true}>
        Home
      </AppButton>
    </div>
  );
};

export default Home;
