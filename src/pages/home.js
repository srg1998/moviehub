import Layout from "../components/layout/main";
import axiosInstance from "../axiosInstance";
import { useEffect, useState } from "react";
import HomeCorousel from "../components/home/corousel";

export default function Home() {
  const [moviesByYear, setMoviesByYear] = useState([]);
  const [moviesByYearLoading, setMoviesByYearLoading] = useState(true);
  const [highRatedMovies, setHighRatedMovies] = useState([]);
  const fetchMoviesByYear = async (year) => {
    try {
      const response = await axiosInstance.get("/discover/movie", {
        params: {
          page: 1,
          sort_by: "popularity.desc",
          "release_date.gte": "2023-05-10",
          include_adult: false,
          language: "en-US",
          include_video: false,
        },
      });
      setMoviesByYear(response.data);
      setMoviesByYearLoading(true);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchHighRatedMovies = async (minRating) => {
    try {
      const response = await axiosInstance.get("/discover/movie", {
        params: {
          page: 1,
          sort_by: "popularity.desc",
          include_adult: false,
          language: "en-US",
          include_video: false,
        },
      });
      setHighRatedMovies(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Example: Fetch movies released in 2020
    fetchMoviesByYear(2020);

    // Example: Fetch movies with IMDb rating greater than 9
    fetchHighRatedMovies(9);
  }, []);
 

  return (
    <Layout>
      {moviesByYear ? (
        <HomeCorousel loading={moviesByYearLoading} movies={moviesByYear?.results} />
      ) : (
        ""
      )}
    </Layout>
  );
}
