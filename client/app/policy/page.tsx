import '@/app/policy/page.style.scss';
import Image from 'next/image';
import Blob from '@/images/blob.svg';
import Banner from '@/components/loginPage/Banner';
import ReturnButton from '@/components/policyPage/ReturnButton';

const App = () => {
  return (
    <div className="policy">
      <div className="blobTop">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <div className="blobBottom">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <Banner />
      <ReturnButton />
    </div>
  );
};

export default App;
