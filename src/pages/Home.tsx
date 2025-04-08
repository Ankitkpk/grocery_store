import React, { useContext } from 'react';
import MainBaner from '../components/MainBaner'
import Categories from '../components/Categories';
import Seller from '../components/Seller';
import BottleBanner from '../components/Bottlebaner';

const Home: React.FC = () => {
  return (
    <div className='mt-4 pt-4'>
       <MainBaner/>
       <Categories/>
       <Seller/>
       <BottleBanner/>
    </div>
  );
};

export default Home;
