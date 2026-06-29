"use client"
import '@/app/policy/page.style.scss';
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
    { icon: IoHomeOutline, title: '1. Wstęp' },
    { icon: IoPersonOutline, title: '2. Jakie dane zbieramy' },
    { icon: GrPieChart, title: '3. Wykorzystywanie danych' },
    { icon: PiCookie, title: '4. Pliki cookies' },
    { icon: IoShieldCheckmarkOutline, title: '5. Bezpieczeństwo danych' },
    { icon: IoPeopleOutline, title: '6. Prawa użytkownika' },
    { icon: IoShareSocialOutline, title: '7. Udostępnianie danych' },
    { icon: GrStorage, title: '8. Przechowywanie danych' },
    { icon: GoPencil, title: '9. Zmiany w polityce' },
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
