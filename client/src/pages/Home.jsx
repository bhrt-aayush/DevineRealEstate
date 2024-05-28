import React from 'react';
import logo from '/pic/re.jpg'; // Adjust the path based on your folder structure

export default function Home() {
  return (
    <div className="flex justify-between items-stretch p-8">
      {/* Left Section - Image */}
      <div className="flex-1">
        <img src={logo} alt="RealEstate Image" className="h-full object-cover rounded-lg shadow-lg" />
      </div>

      {/* Right Section - Text Content in Card Layout */}
      <div className="flex-1 bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-3xl font-bold mb-4">
          <span className='text-emerald-700'>Devine</span>
          <span className='text-slate-500'>RealEstate</span>
        </h2>
        <p className="text-lg mb-4 text-slate-500">
          Discover your dream home with DevineRealEstate. We offer a wide range of properties
          tailored to your needs and preferences.
        </p>
        <p className="text-lg mb-4 text-slate-500">
          Whether you're looking for a cozy apartment, a spacious villa, or commercial spaces for
          your business, we have the perfect solution for you.
        </p>
        <p className="text-lg mb-4 text-slate-500">
          Explore our listings, schedule viewings, and let us guide you through the process of
          finding your ideal property.
        </p>
        <p className="text-lg text-slate-500">
          Contact us today to start your journey towards owning the home of your dreams.
        </p>
      </div>
    </div>
  );
}
