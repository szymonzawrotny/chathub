'use client';
import '@/components/loginPage/RightSide.style.scss';
import { IoIosArrowDown } from 'react-icons/io';
import { useState } from 'react';

const RightSide = () => {
  const [selected, setSelected] = useState<'login' | 'register'>('login');

  return (
    <div className="rightSide">
      <div className="languageOption">
        Polski <IoIosArrowDown size={20} className="arrowIcon" />
      </div>
      <div className="loginPanel">
        <h2>Witaj ponownie!</h2>
        <p>Cieszymy się, że wracasz</p>
        <div className="choose">
          <div
            className={`login ${selected === 'login' ? 'selected' : ''}`}
            onClick={() => setSelected('login')}
          >
            Zaloguj się
          </div>
          <div
            className={`register ${selected === 'register' ? 'selected' : ''}`}
            onClick={() => setSelected('register')}
          >
            Utwórz konto
          </div>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
