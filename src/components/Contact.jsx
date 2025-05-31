import React from 'react';
import Container from './Container';
import Heading from './Heading';

const Contact = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10 py-10">
        {/* Image Section */}
        <div className="w-full lg:w-[40%]">
          <img
            src="https://glorebd.com/assets/about_img-4BbpaMTv.webp"
            alt="Storefront"
            className="w-full h-auto max-h-[750px] object-cover rounded-2xl"
          />
        </div>

        {/* Info Section */}
        <div className="w-full lg:w-[55%] text-center space-y-6">
          <Heading
            text="📍 আমাদের ঠিকানা"
            as="h2"
            className="text-[36px] lg:text-[50px] font-bold hover:text-pink-600"
          />
          <Heading
            text="৭২২/৩ রসনা ভিলা, ৪র্থ তলা, বসুন্ধরা লেন, পশ্চিম কাজীপাড়া, মিরপুর - 1216"
            as="p"
            className="text-[20px] lg:text-[25px] hover:text-pink-600"
          />
          <Heading
            text="📞 মোবাইল: (+88) 01855-375963"
            as="p"
            className="text-[20px] lg:text-[25px] hover:text-pink-600"
          />
          <Heading
            text="✉️ ইমেইল: hello@glorebd.com"
            as="p"
            className="text-[20px] lg:text-[25px] hover:text-pink-600"
          />
        </div>
      </div>
    </Container>
  );
};

export default Contact;
