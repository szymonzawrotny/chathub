'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-coverflow';

import ListElement from '@/components/loginPage/ListElement';

const SwiperBox = () => {
  const lists = [
    [
      { title: 'Społeczność', description: 'asd', icon: 'asd' },
      { title: 'Komunikacja', description: 'asd', icon: 'asd' },
      { title: 'Personalizacja', description: 'asd', icon: 'asd' },
    ],
    [
      { title: 'Społeczność', description: 'asd', icon: 'asd' },
      { title: 'Komunikacja', description: 'asd', icon: 'asd' },
      { title: 'Personalizacja', description: 'asd', icon: 'asd' },
    ],
    [
      { title: 'Społeczność', description: 'asd', icon: 'asd' },
      { title: 'Komunikacja', description: 'asd', icon: 'asd' },
      { title: 'Personalizacja', description: 'asd', icon: 'asd' },
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
      // onSlideChange={() => {
      //   console.log('slide change')
      // }}
      // onSwiper={(swiper) => {
      //   console.log(swiper)
      // }}
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
              />
            ))}
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default SwiperBox;
