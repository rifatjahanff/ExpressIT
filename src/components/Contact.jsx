import React from 'react'
import Container from './Container'
import Heading from './Heading'

const Contact = () => {
  return (
    <>
    <Container>
        <div className=" flex justify-between">
            <div className="w-[36%]">
        <img
              src="https://glorebd.com/assets/about_img-4BbpaMTv.webp"
              alt="Banner"
              className=" h-[750px] w-[550px] rounded-2xl "
            />
    </div>
    <div className="w-[60%]">
     <Heading
              text={"Our Store"}
              as={"p"}
              className={"text-[50px] hover:text-pink-600 text-center mt-[200px]"}
            />
        
      
     <Heading
              text={"ঠিকানা: ৭২২/৩ রসনা ভিলা, ৪র্থ তলা বসুন্ধরা লেন, পশ্চিম কাজীপাড়া, মিরপুর - 1216"}
              as={"p"}
              className={"text-[25px] hover:text-pink-600 text-center"}
            />
     <Heading
              text={"মোবাইল নং: (+88) 01855-375963"}
              as={"p"}
              className={"text-[25px] hover:text-pink-600 text-center "}
            />
     <Heading
              text={"ইমেইল: hello@glorebd.com"}
              as={"p"}
              className={"text-[25px] hover:text-pink-600 text-center "}
            />
    
    </div>
        </div>
    </Container>
    </>
  )
}

export default Contact