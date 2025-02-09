interface MovieSlideItemProps {
  src: string;
}
const MovieSlideItem = (props: MovieSlideItemProps) => {
  return (
    <div className="h-[219] md:h-[385] lg:h-[219]">
      <img className="w-full h-full object-cover" src={props.src} />
    </div>
  )
}

export default MovieSlideItem