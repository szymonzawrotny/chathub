'use client';
import '@/components/loginPage/LeftSide.style.scss';
import Image from 'next/image';
import Blob from '@/images/blob.svg';
import SwiperBox from '@/components/loginPage/SwiperBox';
import Banner from '@/components/loginPage/Banner';

const LeftSide = () => {
  return (
    <div className="leftSide">
      <div className="blobTop">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <div className="blobBottom">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <Banner />
      <main>
        <SwiperBox />
      </main>
    </div>
  );
};

export default LeftSide;
