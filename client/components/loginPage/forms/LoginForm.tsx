import React from 'react';
import Socials from '@/components/loginPage/forms/Socials';

const LoginForm = () => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('siema wysłano');
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="inputName">Email lub nazwa użytkownika</span>
      <input type="text" placeholder="Wprowadź email lub nazwę użytkownika" />
      <span className="inputName">Hasło</span>
      <input type="text" placeholder="Wprowadź swoje hasło" />
      <div className='blueText'>Nie pamiętasz hasła?</div>
      <input type="submit" value="zaloguj" />
      <Socials />
    </form>
  );
};
export default LoginForm;
