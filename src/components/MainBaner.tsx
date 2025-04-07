import { Link } from 'react-router-dom';
import { assets } from '../assets/assets';

const MainBanner: React.FC = () => {
  return (
    <div className="relative w-full h-[500px] rounded-b-2xl">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full h-full object-cover hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner mobile"
        className="w-full h-full object-cover md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-green-800 text-3xl md:text-5xl font-bold mb-6 drop-shadow-md">
      Freshness You Can Trust, <br /> Savings You’ll Love!
       </h1>
       <div className="flex gap-4">
          <Link
            to="/shop"
            className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-100 transition"
          >
            Shop Now
            <img src={assets.black_arrow_icon} alt="arrow" className="w-4 h-4" />
          </Link>
          <Link
            to="/shop"
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            explore deals
            <img src={assets.white_arrow_icon} alt="arrow" className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainBanner;
