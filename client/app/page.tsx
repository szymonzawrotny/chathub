import '@/app/page.style.scss';
import LeftSide from '@/components/loginPage/LeftSide';
import RightSide from '@/components/loginPage/RightSide';

const App = () => {
  return (
    <div className="app">
      <LeftSide />
      <RightSide />
    </div>
  );
};

export default App;
