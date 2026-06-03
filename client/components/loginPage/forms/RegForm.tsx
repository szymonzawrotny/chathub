import React from 'react';

const RegForm = () => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("siema wysłano")
  };

  return <form onSubmit={handleSubmit}>register form</form>;
};
export default RegForm;
