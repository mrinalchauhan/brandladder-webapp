import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import ServiceCard from '../../cards/service';
import Img from '../../../assests/images/logo1.png'

export default function TrendingCarousel() {
    return (
        <>
            <Swiper
                slidesPerView={4}
                centeredSlides={false}
                spaceBetween={15}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 40,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 50,
                    },
                }}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: true,
                }}
                loopedSlides={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <ServiceCard
                        image={Img}
                        title='lorem'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores pariatur error aliquam? Illo, consequuntur delectus
                        '
                        pricing='17'
                        link='/'
                        trending={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard
                        image={Img}
                        title='lorem'
                        desc='Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut maiores pariatur error aliquam? Illo, consequuntur delectus'
                        pricing='17'
                        link='/'
                        trending={true}
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
                <SwiperSlide>
                    <ServiceCard image={Img} title='lorem' desc='lorem' pricing='17' link='/' trending={true} />
                </SwiperSlide>
            </Swiper >
        </>
    );
}
