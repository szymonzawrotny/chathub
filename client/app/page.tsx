import './page.style.scss';
import Image from 'next/image';
import Blob from '../images/blob.svg';

const App = () => {
  return (
    <div className="app">
      <div className="leftSide">
        <div className="blobTop">
          <Image src={Blob} alt="blob" width={400} height={400} />
        </div>
        <div className="blobBottom">
          <Image src={Blob} alt="blob" width={400} height={400} />
        </div>
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default App;
