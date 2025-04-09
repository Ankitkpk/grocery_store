import React, { useContext } from 'react';
import MainBaner from '../components/MainBaner'
import Categories from '../components/Categories';
import Seller from '../components/Seller';
import BottleBanner from '../components/Bottlebaner';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <div className='mt-4 pt-4'>
       <MainBaner/>
       <Categories/>
       <Seller/>
       <BottleBanner/>
       <Newsletter/>
    </div>
  );
};

export default Home;
