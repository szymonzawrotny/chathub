'use client';
import '@/app/page.style.scss';
import Image from 'next/image';
import Blob from '@/images/blob.svg';
import Logo from '@/images/icons/logo.png';
import SwiperBox from "@/components/loginPage/SwiperBox"

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="blobTop">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <div className="blobBottom">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <div className="banner">
        <Image src={Logo} alt="logo" width={80} height={80} priority />
        <span className="bannerText">ChatHub</span>
      </div>
      <main>
        <SwiperBox />
      </main>
    </div>
  );
};

export default LeftSide;
