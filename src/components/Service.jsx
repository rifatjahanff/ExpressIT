import React from 'react'
import Container from './Container'
import Heading from './Heading'
import sOne from '../assets/SOne.png'
import sTwo from '../assets/STwo.webp'
import sThree from '../assets/SThree.webp'

import Images from './Images'

const Sarvice = () => {
  return (
   

         <Container >
      <div className="mt-[50px] mb-[50px] flex justify-around ">
          <div className="w-[30%]"><div className="w-[100px] h-[100px] ml-[150px]"><Images imgSrc={sOne} imgAlt="Service 1" className="w-[250px] transition-transform duration-300 hover:scale-105" /></div><Heading
              text={"Easy Exchange Policy"}
              as={"p"}
              className={"text-[20px] font-bold hover:text-pink-600 text-center"}
            />
            <Heading
              text={"We Offer hassle free exchange policy"}
              as={"p"}
              className={"text-[20px] hover:text-pink-600 text-center"}
            /></div>
          <div className="w-[30%]"><div className="w-[100px] h-[100px] ml-[150px]"><Images imgSrc={sTwo} imgAlt="Service 2" className="w-[250px] transition-transform duration-300 hover:scale-105" /></div><Heading
              text={"3 Days Return Policy"}
              as={"p"}
              className={"text-[20px] font-bold hover:text-pink-600 text-center"}
            />
            <Heading
              text={"We provide 3 days free return policy"}
              as={"p"}
              className={"text-[20px] hover:text-pink-600 text-center" }
            /></div>
          <div className="w-[30%]"><div className="w-[100px] h-[100px] ml-[150px]"><Images imgSrc={sThree} imgAlt="Service 3" className="w-[250px] transition-transform duration-300 hover:scale-105" /></div><Heading
              text={"Best customer support"}
              as={"p"}
              className={"text-[20px] font-bold hover:text-pink-600 text-center"}
            />
            <Heading
              text={"we provide 24/7 customer support"}
              as={"p"}
              className={"text-[20px] hover:text-pink-600 text-center"}
            /></div>
       </div>
    </Container>

  )
}

export default Sarvice