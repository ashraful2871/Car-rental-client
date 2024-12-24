import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content border-t">
      <div className="p-10 grid grid-cols-1 md:grid-cols-5 gap-8 bg-base-200 text-base-content">
        <div className="space-y-2">
          <h3 className="font-bold text-lg">Car Rent</h3>
          <p>Contact: carrent@contact.com</p>
          <img
            className="h-28 w-32"
            src="https://i.ibb.co.com/D4YprTd/logo-removebg.png"
            alt=""
          />
        </div>
        <div>
          <h3 className="font-bold text-lg">Navigate</h3>
          <ul className="list-none mt-2 space-y-1">
            <li>Home</li>
            <li>Available Car</li>
            <li>Add Car</li>
            <li>My Car</li>
            <li>My Bookings</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Company</h3>
          <ul className="list-none mt-2 space-y-1">
            <li>Privacy</li>
            <li>Terms of Service</li>
            <li>FAQ</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Benefits</h3>
          <ul className="list-none mt-2 space-y-1">
            <li>Exclusive Car Rental Discounts</li>
            <li>Community Forums</li>
            <li>24/7 Support</li>
          </ul>
        </div>
        <div>
          <h3 className="font-bold text-lg">Social Media</h3>
          <div className="flex gap-3 mt-2">
            <a
              className="text-2xl"
              href="https://x.com/ashraful72871"
              target="_blank"
            >
              <FaTwitter />
            </a>
            <a
              className="text-2xl"
              href="https://www.facebook.com/ashraful2871"
              target="_blank"
            >
              <FaFacebook></FaFacebook>
            </a>
            <a
              className="text-2xl"
              href="https://www.instagram.com/ashrafulislam2871/"
              target="_blank"
            >
              <FaInstagram></FaInstagram>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-base-200 p-4 text-center">
        <p>Copyright © 2024 Rent. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
