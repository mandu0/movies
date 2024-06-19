import Movie from "@/components/movie";
import styles from "../styles/home.module.css";
import { API_URL } from "../constants";

export const metadata = {
  title: "Home",
};

// Movie 인터페이스 정의
interface Movie {
  id: number;
  title: string;
  poster_path: string;
}

async function getMovies(): Promise<Movie[]> {
  const response = await fetch(API_URL);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  const movies: Movie[] = await getMovies();
  return (
    <div className={styles.container}>
      {movies.map((movie: Movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
