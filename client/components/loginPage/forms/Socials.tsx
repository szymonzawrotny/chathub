import { FcGoogle } from 'react-icons/fc';
import { FaApple } from 'react-icons/fa';

const Socials = () => {
  return (
    <div className="socials">
      <div className="line">
        <span></span>
        <div style={{ marginLeft: 5, marginRight: 5 }}>lub</div>
        <span></span>
      </div>
      <div className="loginIcon">
        <FcGoogle className="icon" size={22} />
        Kontynuuj z Google
      </div>
      <div className="loginIcon">
        <FaApple className="icon" size={22} />
        Kontynuuj z Apple
      </div>
    </div>
  );
};

export default Socials;
