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
        <h1 className="text-2xl md:text-3xl font-semibold text-primary mb-8">
          Why We Are Best
        </h1>
        <div className="flex flex-wrap justify-center md:justify-end gap-6 max-w-xl">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white/80 p-4 rounded-lg text-center w-44 shadow-md"
            >
              <img
                src={feature.icon}
                alt={feature.title}
                className="mx-auto mb-3 w-9 md:w-11"
              />
              <h3 className="text-sm font-semibold mb-1">{feature.title}</h3>
              <p className="text-xs text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BottleBanner;
