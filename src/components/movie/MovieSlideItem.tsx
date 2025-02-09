interface MovieSlideItemProps {
  src: string;
}
const MovieSlideItem = (props: MovieSlideItemProps) => {
  return (
    <div className="h-[219px] md:h-[385px] lg:h-[219px]">
      <img className="w-full h-full object-cover" src={props.src} />
    </div>
  )
}

export default MovieSlideItem