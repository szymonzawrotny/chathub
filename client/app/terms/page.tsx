'use client';
import '@/app/terms/page.style.scss';
import Image from 'next/image';
import Blob from '@/images/blob.svg';
import Banner from '@/components/loginPage/Banner';
import ReturnButton from '@/components/policyPage/ReturnButton';
import { useState } from 'react';
import {
  IoHomeOutline,
  IoShieldCheckmarkOutline,
  IoPeopleOutline,
  IoShareSocialOutline,
  IoMailOutline,
  IoPersonOutline,
} from 'react-icons/io5';
import { GrPieChart, GrStorage } from 'react-icons/gr';
import { PiCookie } from 'react-icons/pi';
import { IconType } from 'react-icons';
import { GoPencil } from 'react-icons/go';

interface ChaptersListType {
  icon: IconType;
  title: string;
}

const App = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const chaptersList: ChaptersListType[] = [
    { icon: IoHomeOutline, title: '1. Postanowienia ogólne' },
    { icon: IoPersonOutline, title: '2. Konto użytkownika' },
    { icon: GrPieChart, title: '3. Zasady korzystania z usługi' },
    { icon: PiCookie, title: '4. Treści użytkowników' },
    { icon: IoShieldCheckmarkOutline, title: '5. Zakazane działania' },
    { icon: IoPeopleOutline, title: '6. Prawa i obowiązki' },
    { icon: IoShareSocialOutline, title: '7. Odpowiedzialność' },
    { icon: GrStorage, title: '8. Zmiany regulaminu' },
    { icon: GoPencil, title: '9. Postanowienia końcowe' },
    { icon: IoMailOutline, title: '10. Kontakt' },
  ];

  const addClass = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <div className="policy">
      <div className="blobTop">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <div className="blobBottom">
        <Image src={Blob} alt="blob" width={400} height={400} priority />
      </div>
      <Banner />
      <ReturnButton />
      <div className="sideBar">
        <span className="barTitle">Polityka prywatności</span>
        {chaptersList &&
          chaptersList.map((element, index) => {
            const Icon = element.icon;

            return (
              <div
                className={`chaptersListElement ${activeIndex === index ? 'active' : ''}`}
                key={index}
                onClick={() => addClass(index)}
              >
                <Icon />
                <span className="chapterText">{element.title}</span>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default App;
