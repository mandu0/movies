
import Link from "next/link";
import styles from "../styles/movie.module.css"  ;
import { API_URL } from "../constants";
import { Metadata } from "next";

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
  {movies.map((movie :any) => (
  // <li key={movie.id}>
  //   <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
  // </li>
    <div className={styles.movie} key={movie.id}>
      <img src={movie.poster_path} alt={movie.title} />
      <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
    </div>
  ))}
  </div>
  );
}