import { fetchMovies } from "@/apis/movie";
import Button from "@/components/common/Button";
import Layout from "@/components/common/Layout";
import MovieSlide from "@/components/movie/MovieSlide";
import { Movie } from "@/domains/movie";
import Image from "next/image";
import { useEffect, useState } from "react";
import infoIcon from "../../public/images/InfoInco.png";
import moviePosture from "../../public/images/MoviePosture.png";
import moviePostureMobile from "../../public/images/MoviePostureMobile.png";
import movieTitle from "../../public/images/MovieTitle.png";
import nSeries from "../../public/images/n_series.png";
import polygonIcon from "../../public/images/PolygonIcon.png";
import topTen from "../../public/images/Top10.png";


export default function Home() {
  const [movies,setMovies] = useState<Movie[]>([]);
  const [loading,setLoading] = useState(true);
  const [error,setError] = useState(false);
  useEffect(() => {
    fetchMovies().then(items => {
      setMovies(items);
    })
    .catch(_err => {
      setError(true);
    })
    .finally(() => {
      setLoading(false);
    })
  },[])
  return (
    <Layout loading={loading} error={error}>
      <div className="sample-movie min-h-[100vh] flex flex-col justify-between">
        <div className="sample-movie-image-box absolute w-full h-[100vh]">
          <Image
            className="xl:hidden"
            src={moviePostureMobile}
            fill
            alt="movie-sample-posture"
            objectFit="cover"
            objectPosition="50% 50%"
          />
          <Image
            className="hidden xl:block"
            src={moviePosture}
            fill
            alt="movie-sample-posture"
            objectFit="cover"
            objectPosition="50% 50%"
          />
        </div>

        <div className="movie-banner-content lg:pt-[160] lg:ml-[40] xl:ml-[60] 2xl:ml-[90] 3xl:pt-[240] h-full flex flex-row items-end lg:block lg:w-[60%] xl:w-[50%] mb-[12]">
          <div className="w-full">
            <div className="nextflix-series flex items-center justify-center lg:justify-start">
              <Image
                src={nSeries}
                alt="Nextflix N character"
              />
            </div>
            <div className="movie-title-box flex justify-center lg:justify-start items-center my-[22] lg:my-[12]">
              <Image
                src={movieTitle}
                alt="Movie Title"
              />
            </div>
            <div className="mt-[33] items-center hidden lg:flex">
              <Image
                src={topTen}
                alt="top ten icon"
              />
              <h1 className="ml-[8] text-[36px] 3xl:text-[43px] font-medium leading-[55px]">
                #1 in TV Shows Today
              </h1>
            </div>

            <div className="mt-[33] text-[26px] 3xl:text-[30px] leading-[38px] hidden lg:block">
              Determined to protect a young patient who escaped a mysterious
              cult, a psychiatrist takes the girl in, putting her own family — and
              life — in danger.
            </div>
            <div className="mt-[33] hidden lg:flex">
              <Button className="btn-primary" icon={polygonIcon}>Play</Button>
              <Button className="btn-secondary ml-[19]" icon={infoIcon}>More Info</Button>
            </div>
            <div className="mt-[29] mb-[12] text-xl text-center lg:hidden">
              TV Mysteries<span className="inline-block w-[12] h-[12] mx-[10] bg-white rounded-full"/>Based on Books
            </div>
          </div>
          
        </div>
        <div className="movie-banner-left-gradient hidden lg:block"/>
        <div className="movie-banner-bottom-gradient lg:hidden"/>
        <div className="movie-banner-slide-box mt-[36] w-full hidden lg:block">
          <MovieSlide title="Popular on Netflix" items={movies} />
        </div>
      </div>

      <div className="lg:hidden mt-[22]">
        <div className="flex items-center justify-between mx-[30] lg:mx-[40] text-xs lg:text-3xl"> 
          <div className="flex flex-col items-center justify-center mx-[20] sm:mx-[30] md:mx-[40]">
            <img src="/images/IconPlus.png"/>
            <div className="mt-1">My List</div>
          </div>
          <Button className="btn-primary mx-[6] sm:mx-[30] md:mx-[40]" icon={polygonIcon}>Play</Button>
          <div className="flex flex-col items-center justify-center mx-[20] sm:mx-[30] md:mx-[40]">
            <img src="/images/InfoInco.png"/>
            <div className="mt-1">Info</div>
          </div>
          
        </div>
        <div className="mt-[31]">
          <MovieSlide title="Popular on Netflix" items={movies}/>
        </div>
      
      </div>

    </Layout>
  );
}