import '@/app/page.style.scss';
import Image from 'next/image';
import Blob from '@/images/blob.svg';
import LeftSide from '@/components/loginPage/leftSide';

const App = () => {
  return (
    <div className="app">
      <LeftSide />
      <div className="rightSide"></div>
    </div>
  );
};

export default App;
