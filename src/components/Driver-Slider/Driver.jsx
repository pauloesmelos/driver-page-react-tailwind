import React from 'react';
import Card from '../Card/Card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, Scrollbar } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const Driver = () => {
  return (
    <section className="my-12 px-3 w-full">
        <div className="text-center">
            <h1 className="font-bold text-4xl sm:text-6xl before:inline-block before:w-3 before:h-3
            before:mr-[-12px] before:bg-[#593cfb] sm:before:w-5 sm:before:h-5 sm:before:mr-[-19px]">
                Find your driver
            </h1>
            <p className="font-medium text-lg sm:text-xl py-8">
                Explorer the world's largest car sharing marketplace.
            </p>
        </div>
        <div>
            <Swiper
            spaceBetween={100}
            slidesPerView={5}
            navigation
            modules={[Pagination, Navigation, Scrollbar, A11y]}
            breakpoints={{
                150: {
                    width: 150,
                    slidesPerView: 1
                },
                768: {
                    width: 768,
                    slidesPerView: 1
                },
                800: {
                    width: 800,
                    slidesPerView: 4
                }
            }}
            >
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1599912027806-cfec9f5944b6?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGF1ZGl8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`}
                    title="Audi"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1555215695-3004980ad54e?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8M3x8Ym13fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
                    title="BMW"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8NHx8Y2hldnJvbGV0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
                    title="Chevrolet"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1616788494707-ec28f08d05a1?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWVyY2VkZXMlMjBiZW56fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
                    title="Mercedes-Benz"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1609521263047-f8f205293f24?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8OXx8bmlzc2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60`}
                    title="Nissan"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1619682817481-e994891cd1f5?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHRveW90YXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`}
                    title="Toyota"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1588636142475-a62d56692870?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8OHx8amVlcHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`}
                    title="Jeep"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1604108415419-6d4bd73a1c2c?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGZvcmR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`}
                    title="Ford"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1606016159991-dfe4f2746ad5?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVzbGF8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60`}
                    title="Tesla"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <Card
                    src={`https://images.unsplash.com/photo-1580274455191-1c62238fa333?ixlib=rb-1.2.1&ixid=
                    MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cG9yc2NoZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60`}
                    title="Porsche"
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Driver;