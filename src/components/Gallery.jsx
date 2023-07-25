import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import img1 from "../assets/images/tabbag.gif";

// import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import "../assets/css/Gallery.css";

function Gallery() {
  return (
    <div className="gallary-container ">
      <div className="home_content">

        <div className="home_heading-1">Welcome To
          <div className="home_heading-2" align="centre">
            Art Gallery of EMR
            </div>
        </div>

      </div>

      <div className="dd">
        <h1 className="ss">Techspardha</h1>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={true}
          pagination={false}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: -19,
            depth: 100,
            modifier: 1,

            slideShadows: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p1">
        <h1 className="ss">Farewell</h1>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={true}
          pagination={false}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p2">
        <h1 className="ss">Workshops</h1>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={true}
          pagination={false}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p3">
        <h1 className="ss">Freshers</h1>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={true}
          pagination={false}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="p4">
        <h1 className="ss">xyz</h1>
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          navigation={true}
          effect={"coverflow"}
          centeredSlides={true}
          slidesPerView={window.innerWidth < 768 ? 1 : "auto"}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          className="mySwiper"
        >
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div>
              <img src={img1} />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Gallery;
