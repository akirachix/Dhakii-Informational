import React from 'react';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-[#02A6A6] text-white p-8 font-nunito text-base font-semibold">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="mb-6 md:mb-0 space-y-2">
        <h2 className="font-bold text-[28px] md:text-[24px] mb-2">Contact us</h2>
        <p className='text-[20px] md:text-[18px]'>+254701234578</p>
        <p className='text-[20px] md:text-[18px]'>Westlands Highway</p>
        <p className='text-[20px] md:text-[18px]'>Postal Address 20500</p>
      </div>
        <div className="mb-6 md:mb-0 space-y-2">
          <h2 className="font-bold text-[28px] md:text-[24px] mb-2 space-y-2">About us</h2>
          <ul>
          <li><Link href="/mission" className="hover:underline text-[20px] md:text-[18px]">Mission</Link></li>
              <li><Link href="/vision" className="hover:underline text-[20px] md:text-[18px]">Vision</Link></li>
              <li><Link href="/goal" className="hover:underline text-[20px] md:text-[18px]">Goal</Link></li>
          </ul>
        </div>
        <div>
          <h2 className="font-bold text-[28px] md:text-[24px] mb-2 space-y-1">Connect with Us</h2>
          <div className="flex space-x-4 space-y-1">
            <Link href="https://www.facebook.com" aria-label="Facebook" passHref>
              <FaFacebookF className="text-xl sm:text-2xl text-white hover:text-[#F18721] text-[20px] md:text-[18px]" />
            </Link>
            <Link href="https://www.twitter.com" aria-label="Twitter" passHref>
              <FaTwitter className="text-xl sm:text-2xl text-white hover:text-[#F18721] text-[20px] md:text-[18px]" />
            </Link>
            <Link href="https://www.instagram.com" aria-label="Instagram" passHref>
              <FaInstagram className="text-xl sm:text-2xl text-white hover:text-[#F18721] text-[20px] md:text-[18px]" />
            </Link>
          </div>
        </div>
      </div>
      <div className="mt-8 text-center">
        <hr/>
        <br/>
        <p>&copy; MamaMind 2024</p>
      </div>
    </footer>
  );
};

export default Footer;