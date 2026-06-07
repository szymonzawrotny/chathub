import '@/app/terms/page.style.scss';
import Image from 'next/image';
import Blob from '@/images/blob.svg';


const App = () => {
  return (
    <div className="terms">
      <div className="blobTop">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <div className="blobBottom">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
    </div>
  );
};

export default App;
