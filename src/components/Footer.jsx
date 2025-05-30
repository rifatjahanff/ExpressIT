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
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="h-[350px] md:h-[250px] bg-black rounded-t-2xl border-2 border-gray-800">
      <Container>
       
          {/* Left Section */}
          <div className="flex  md:items-start justify-around mt-[50px]">
           <div className="w-[32%]">
             <div className="w-[250px] h-[100px]">
              <img src={Logo} alt="Logo" className="w-full" />
            </div>
            <Heading
              text={"আমাদের কালেকশন আপনাকে দেবে ফ্যাশনের আধুনিকতা এবং ঐতিহ্যের একটি নিখুঁত সংমিশ্রণ।"}
              as={"p"}
              className={"text-[15px] text-white hover:text-pink-600 pr-[50px]"}
            />
           </div>
           <div className="w-[22%]">
             
            <Heading
              text={"Explore More"}
              as={"p"}
              className={"text-[30px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"New Arrivals"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"About Us"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"Contact"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
           </div>
           <div className="w-[22%]">
             
            <Heading
              text={"Client Experience"}
              as={"p"}
              className={"text-[30px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"Track Your Order"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"Returns & Exchanges"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"Customer Reviews"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"Privacy Policy"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"FAQ"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
           </div>
            <div className="w-[22%]">
             
            <Heading
              text={"GET IN TOUCH"}
              as={"p"}
              className={"text-[30px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"মোবাইল নং: (+88) 01855-375963"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
            <Heading
              text={"ইমেইল: hello@glorebd.com"}
              as={"p"}
              className={"text-[20px] text-white hover:text-pink-600"}
            />
           
             <div className=" flex gap-6 text-[30px] mt-[30px] ml-[30px]">
                 <a
                href="https://www.facebook.com/rifat.jahan.730669"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookSquare className="hover:bg-white bg-white text-black hover:text-pink-600 cursor-pointer " />
              </a>

              <a
                href="https://www.linkedin.com/in/rifat-jahan-63215b34a/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="hover:bg-white bg-white text-black  hover:text-pink-600 cursor-pointer" />
              </a>
              <a
                href="https://x.com/RifatJahanRume" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitterSquare className="hover:bg-white bg-white text-black  hover:text-pink-600 cursor-pointer" />
              </a>
              <a
                href="https://www.instagram.com/jahanrifat9531/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="hover:bg-white bg-white text-black  hover:text-pink-600 cursor-pointer" />
              </a>
             </div>
            
            
           </div>
            
          </div>

          
       
      </Container>
    </div>
  );
};

export default Footer;