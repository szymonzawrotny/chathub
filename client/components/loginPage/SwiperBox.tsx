'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import { ListItem } from '@/constants/types';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import ListElement from '@/components/loginPage/ListElement';
import { BsPeopleFill } from 'react-icons/bs';
import {
  IoChatbubbleEllipsesOutline,
  IoChatbubbleEllipsesSharp,
} from 'react-icons/io5';
import { GoGear } from 'react-icons/go';
import { FaRegBell, FaRegFileAlt, FaRegUser } from 'react-icons/fa';
import { MdGroups } from 'react-icons/md';
import { IoEarthSharp } from 'react-icons/io5';

const SwiperBox = () => {
  const lists: ListItem[][] = [
    [
      {
        title: 'Społeczność',
        description: (
          <>
            Twórz lub dołączaj do społeczności <br />
            dopasowanych do Ciebie.
          </>
        ),
        icon: <BsPeopleFill size={36} />,
      },
      {
        title: 'Komunikacja',
        description: (
          <>
            Pisz, rozmawiaj głosowo i bądź <br /> zawsze w kontakcie.
          </>
        ),
        icon: <IoChatbubbleEllipsesOutline size={36} />,
      },
      {
        title: 'Personalizacja',
        description: (
          <>
            Dostosuj swoje doświadczenie <br /> do własnych potrzeb.
          </>
        ),
        icon: <GoGear size={36} />,
      },
    ],
    [
      {
        title: 'Czaty grupowe i prywatne',
        description: 'Rozmawiaj w sposób, który Ci odpowiada.',
        icon: <IoChatbubbleEllipsesSharp size={36} />,
      },
      {
        title: 'Powiadomienia w czasie rzeczywistym',
        description: 'Bądż zawsze na bieżaco z najważniejszymi wydarzeniami.',
        icon: <FaRegBell size={36} />,
      },
      {
        title: 'Udostępnianie bez ograniczeń',
        description: 'Wysyłaj pliki, linki i media w kilka sekund.',
        icon: <FaRegFileAlt size={36} />,
      },
    ],
    [
      {
        title: '50K+',
        description: 'Aktywnych społeczności',
        icon: <MdGroups size={36} />,
        iconColor: 'red',
        bgColor: '#1c1545',
      },
      {
        title: '2M+',
        description: 'Zadowolonych użytkowników',
        icon: <FaRegUser size={36} />,
        iconColor: 'red',
        bgColor: '#122938',
      },
      {
        title: '100+',
        description: 'Krajów na całym świecie',
        icon: <IoEarthSharp size={36} />,
        iconColor: 'red',
        bgColor: '#202028',
      },
    ],
  ];
  return (
    <Swiper
      effect={'coverflow'}
      modules={[Navigation, Pagination, A11y]}
      grabCursor={true}
      pagination={{ clickable: true }}
      spaceBetween={5}
      slidesPerView={1}
    >
      <SwiperSlide>
        <div className="swiperContent">
          <h2>
            Miejsce dla Ciebie <br /> i Twojej{' '}
            <span className="blueText">społeczności</span>
          </h2>
          <div className="description">
            Rozmawiaj, współpracuj i twórz razem. <br />
            Dołącz do tysięcy społeczności już dziś
          </div>
          <div className="loginList">
            {lists[0].map((element) => (
              <ListElement
                key={element.title}
                text={element.title}
                description={element.description}
                icon={element.icon}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperContent">
          <h2>
            Komunikacja, <br /> która <span className="blueText">łączy</span>
          </h2>
          <div className="description">
            Niezależnie od tego, czy pracujesz <br />
            z zespołem, czy rozmawiasz ze znajomymi <br />
            -wszystko w jednym miejscu.
          </div>
          <div className="loginList">
            {lists[1].map((element) => (
              <ListElement
                key={element.title}
                text={element.title}
                description={element.description}
                icon={element.icon}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiperContent">
          <h2>
            Twoje miejsce <br /> na każdą{' '}
            <span className="blueText">społeczność</span>
          </h2>
          <div className="description">
            Twórz, dołączaj i rozwijaj społeczności <br />
            wokół swoich pasji, projektów i zainteresowań.
          </div>
          <div className="loginList">
            {lists[2].map((element) => (
              <ListElement
                key={element.title}
                text={element.title}
                description={element.description}
                icon={element.icon}
                bgColor={element.bgColor}
              />
            ))}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperBox;
