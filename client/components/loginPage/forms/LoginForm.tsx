import React from 'react';

const LoginForm = () => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("siema wysłano")
  };

  return <form onSubmit={handleSubmit}>login form</form>;
};
export default LoginForm;
