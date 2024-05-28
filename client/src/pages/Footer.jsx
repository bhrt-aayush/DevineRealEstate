import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold">Your Real Estate Company</h3>
            <p className="text-sm">Providing quality services since 20XX</p>
          </div>
          <div>
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-teal-500">Home</a></li>
              <li><a href="#" className="hover:text-teal-500">About</a></li>
              <li><a href="#" className="hover:text-teal-500">Services</a></li>
              <li><a href="#" className="hover:text-teal-500">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-sm">&copy; {new Date().getFullYear()} Your Real Estate Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
