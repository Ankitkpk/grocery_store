import React from 'react';
import MainBaner from '../components/MainBaner'
import Categories from '../components/Categories';
const Home: React.FC = () => {
  return (
    <div className='mt-4 pt-4'>
       <MainBaner/>
       <Categories/>
    </div>
  );
};

export default Home;
