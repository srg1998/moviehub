import Carousel from "react-multi-carousel";

export default function HomeCorousel({ movies, loading }) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  if (!movies || movies?.length === 0) {
    return <div>Loading..</div>;
  }

  return (
    <Carousel responsive={responsive}>
      {movies?.map((movie, index) => {
        return (
          <div key={index} className="  m-3 relative bg-blue-400">
            <img
                       className="w-full h-full object-cover transition duration-300 transform group-hover:grayscale-100"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold opacity-5 transition-opacity hover:bg-black hover:opacity-50 cursor-pointer">
              {movie.title}
            </div>
          </div>
        );
      })}
    </Carousel>
  );
}
