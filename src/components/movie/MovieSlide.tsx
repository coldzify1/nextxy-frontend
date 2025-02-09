import { Swiper, SwiperSlide } from "swiper/react";
import MovieSlideItem from "./MovieSlideItem";
import { Movie } from "@/domains/movie";

interface MovieSlideProps {
  title: string;
  items: Movie[]
}
const responsive = {
  "1024": {
    slidesPerView: 6.5,
    spaceBetween: 10,
    slidesOffsetBefore: 40
  },
  "1280": {
    slidesPerView: 6.5,
    spaceBetween: 10,
    slidesOffsetBefore: 60
  },
  "1536": {
    slidesPerView: 6.3,
    spaceBetween: 10,
    slidesOffsetBefore: 90
  },
}
const MovieSlide = (props: MovieSlideProps) => {
  const {items} = props;
  return (
    <div>
      <div className="ml-[30] lg:ml-[40] xl:ml-[60] 2xl:ml-[90]">
        <h2 className="slide-header font-bold mb-[20] text-[24px] 3xl:text-[36px]">{props.title}</h2>
      </div>
     
      <Swiper
        spaceBetween={17}
        slidesPerView={3.5}
        slidesOffsetBefore={30}
        breakpoints={responsive}
      >
        {/* <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide>
        <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide>
        <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide>
        <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide>
        <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide>
        <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide>
        <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide>
        <SwiperSlide><MovieSlideItem src="/images/MovieThumnail1.png"/></SwiperSlide> */}
        {
          items.map(item => (
            <SwiperSlide key={item.id}><MovieSlideItem src={item.poster_path}/></SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default MovieSlide