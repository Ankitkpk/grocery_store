import React from 'react';
import { assets, features } from '../assets/assets';

const BottleBanner: React.FC = () => {
  return (
    <div className="relative mt-24">

      <img
        src={assets.bottom_banner_image}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.bottom_banner_image_sm}
        alt="banner"
        className="w-full md:hidden"
      />
      <div className="absolute inset-0 flex flex-col items-center md:items-end justify-center pt-16 md:pt-0 md:pr-24">
        <h1 className="text-3xl md:text-5xl text-center md:text-right font-bold text-primary mb-10 drop-shadow-lg">
          Why We Are Best
        </h1>

        <div className="flex flex-col gap-6 w-[90%] md:w-[420px]">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/90 backdrop-blur-md shadow-lg p-5 rounded-xl flex items-start gap-4 transition-transform duration-300 hover:scale-105"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="w-10 md:w-12 mt-1"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottleBanner;
