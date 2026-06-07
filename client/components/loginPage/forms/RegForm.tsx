import React from 'react';
import Socials from '@/components/loginPage/forms/Socials';
import Link from 'next/link';

const RegForm = () => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('siema wysłano');
  };

  return (
    <form onSubmit={handleSubmit}>
      <span className="inputName">Nazwa użytkownika</span>
      <input type="text" placeholder="Wprowadź nazwę użytkownika" />
      <span className="inputName">Email</span>
      <input type="text" placeholder="Wprowadź swój email" />
      <span className="inputName">Hasło</span>
      <input type="password" placeholder="Utwórz hasło" />
      <span className="inputName">Powtórz hasło</span>
      <input type="password" placeholder="Powtórz swoje hasło" />
      <div className="accept">
        <input type="checkbox" />
        Akceptuję{' '}
        <Link className="blue" href="/terms">
          Regulamin
        </Link>{' '}
        oraz{' '}
        <Link className="blue" href="/policy">
          Politykę prywatności
        </Link>
      </div>
      <input type="submit" value="zaloguj" />
      <Socials />
    </form>
  );
};
export default RegForm;
