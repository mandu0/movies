
import { API_URL } from "../constants";
import { Metadata } from "next";
import styles from "../styles/home.module.css";
import Movie from "@/components/movie";

async function getMovies(){
 // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

 export const metadata: Metadata = {
   title: "Home",
 };

export default async function HomePage(){
  const movies = await getMovies();
  return (
  <div className={styles.container}>
  {movies.map((movie) => (
  // <li key={movie.id}>
  //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
  // </li>
    <Movie key={movie.id} id={movie.id} poster_path={movie.poster_path}
    title={movie.title} />
  ))}
  </div>
  );
}