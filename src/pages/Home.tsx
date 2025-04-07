import React from 'react';
import MainBaner from '../components/MainBaner'
import Categories from '../components/Categories';
import Seller from '../components/Seller';
const Home: React.FC = () => {
  return (
    <div className='mt-4 pt-4'>
       <MainBaner/>
       <Categories/>
       <Seller/>
    </div>
  );
};

export default Home;
