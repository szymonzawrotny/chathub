import "@/components/policyPage/ReturnButton.style.scss";
import { FaLongArrowAltLeft } from 'react-icons/fa';
import Link from 'next/link';


const ReturnButton = () => {
  return <Link href={"/"} className="returnButton">
    <FaLongArrowAltLeft/>
    <span>Powrót do aplikacji</span>
    </Link>;
};

export default ReturnButton;
