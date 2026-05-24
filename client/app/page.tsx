import './page.style.scss';
import Image from 'next/image';
import Blob from "../images/blob.svg"

const App = () => {
  return (
    <div className="app">
      <div className="leftSide">
        <Image
          src={Blob}
          alt="blob"
          width={400}
          height={400}
          className="blobTop"
        />
        <Image
          src={Blob}
          alt="blob"
          width={400}
          height={400}
          className="blobBottom"
        />
      </div>
      <div className="rightSide"></div>
    </div>
  );
};

export default App;
