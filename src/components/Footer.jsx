import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Logo from "../assets/logoO.webp";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaInstagramSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black rounded-t-2xl border-t-2 border-gray-800 text-white">
      <Container>
        <div className="flex flex-wrap justify-between gap-10 py-10">
          {/* Logo & Description */}
          <div className="w-full md:w-[45%] lg:w-[32%] space-y-4">
            <img src={Logo} alt="Glore Logo" className="w-[250px]" />
            <p className="text-[15px] pr-6 hover:text-pink-600">
              আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং ঐতিহ্যের একটি নিখুঁত সংমিশ্রণ।
            </p>
          </div>

          {/* Explore More */}
          <div className="w-[45%] md:w-[22%] space-y-2">
            <Heading text="Explore More" as="p" className="text-[30px] hover:text-pink-600" />
            {["New Arrivals", "About Us", "Contact"].map((item, i) => (
              <Link key={i} to={`/${item.toLowerCase().replace(/\s+/g, "")}`}>
                <Heading text={item} as="p" className="text-[20px] hover:text-pink-600" />
              </Link>
            ))}
          </div>

          {/* Client Experience */}
          <div className="w-[45%] md:w-[22%] space-y-2">
            <Heading text="Client Experience" as="p" className="text-[30px] hover:text-pink-600" />
            {["Track Your Order", "Returns & Exchanges", "Customer Reviews", "Privacy Policy", "FAQ"].map((item, i) => (
              <Heading key={i} text={item} as="p" className="text-[20px] hover:text-pink-600" />
            ))}
          </div>

          {/* Contact & Social */}
          <div className="w-[45%] md:w-[22%] space-y-2">
            <Heading text="GET IN TOUCH" as="p" className="text-[30px] hover:text-pink-600" />
            <Heading text="মোবাইল নং: (+88) 01855-375963" as="p" className="text-[20px] hover:text-pink-600" />
            <Heading text="ইমেইল: hello@glorebd.com" as="p" className="text-[20px] hover:text-pink-600" />

            <div className="flex gap-4 text-[28px] pt-4">
              <a href="https://www.facebook.com/rifat.jahan.730669" aria-label="Facebook" title="Facebook" target="_blank" rel="noopener noreferrer">
                <FaFacebookSquare className="text-black bg-white rounded hover:text-pink-600" />
              </a>
              <a href="https://www.linkedin.com/in/rifat-jahan-63215b34a/" aria-label="LinkedIn" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-black bg-white rounded hover:text-pink-600" />
              </a>
              <a href="https://x.com/RifatJahanRume" aria-label="Twitter" title="Twitter" target="_blank" rel="noopener noreferrer">
                <FaTwitterSquare className="text-black bg-white rounded hover:text-pink-600" />
              </a>
              <a href="https://www.instagram.com/jahanrifat9531/" aria-label="Instagram" title="Instagram" target="_blank" rel="noopener noreferrer">
                <FaInstagramSquare className="text-black bg-white rounded hover:text-pink-600" />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
