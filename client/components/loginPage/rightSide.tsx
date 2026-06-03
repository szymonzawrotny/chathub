'use client';
import { useState } from 'react';
import '@/components/loginPage/RightSide.style.scss';
import { IoIosArrowDown } from 'react-icons/io';
import LoginForm from '@/components/loginPage/forms/LoginForm';
import RegForm from '@/components/loginPage/forms/RegForm';
import { AuthMode } from '@/constants/types';

const RightSide = () => {
  const [selected, setSelected] = useState<AuthMode.LOGIN | AuthMode.REGISTER>(
    AuthMode.LOGIN
  );

  const formElement = selected === AuthMode.LOGIN ? <LoginForm /> : <RegForm />;

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
            className={`login ${selected === AuthMode.LOGIN ? 'selected' : ''}`}
            onClick={() => setSelected(AuthMode.LOGIN)}
          >
            Zaloguj się
          </div>
          <div
            className={`register ${selected === AuthMode.REGISTER ? 'selected' : ''}`}
            onClick={() => setSelected(AuthMode.REGISTER)}
          >
            Utwórz konto
          </div>
        </div>
        <div className="forms">{formElement}</div>
      </div>
    </div>
  );
};

export default RightSide;
