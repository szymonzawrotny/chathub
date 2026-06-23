import Image from 'next/image';
import Logo from '@/images/icons/logo.png';
import '@/components/loginPage/Banner.style.scss';

const Banner = () => {
  return (
    <div className="banner">
      <Image src={Logo} alt="logo" width={80} height={80} priority />
      <span className="bannerText">ChatHub</span>
    </div>
  );
};

export default Banner;
