// Footer.js

import Link from 'next/link';
import React from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="text-white">
          <p>&copy; Shahab Siddiqui. All rights reserved.</p>
        </div>
        <div className="text-white text-3xl">
          <Link href={"#home"}> <FaArrowAltCircleUp /></Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
