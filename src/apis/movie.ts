import { Movie } from "@/domains/movie";
import axios from "axios";

const baseApiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';
const instant = axios.create({
  baseURL: baseApiUrl
})
export const fetchMovies = async () : Promise<Movie[]> => {
  const resp = await instant.get(`/movies`);
  return resp.data;
}

export const fetchMovieDetail = async (id: number | string): Promise<Movie> => {
  const resp = await instant.get(`/movies/${id}`);
  return resp.data;
}