import MovieItem from "@/components/MovieItem";
import movies from "@/mock/movies.json";
import * as styles from "@/styles/home.css.js";

export default function Home() {
  const nowPlayingMovies = movies.slice(0, 2);
  const popularMovies = movies.slice(1);

  return (
    <div className={styles.container}>
      <section className={styles.section}>
        <h3>지금 상영중인 영화</h3>
        <div className={styles.list}>
          {nowPlayingMovies.map((movie) => (
            <MovieItem key={`now-${movie.id}`} {...movie} />
          ))}
        </div>
      </section>
      <section className={styles.section}>
        <h3>인기 영화</h3>
        <div className={styles.list}>
          {popularMovies.map((movie) => (
            <MovieItem
              key={`popular-${movie.id}`}
              {...movie}
            />
          ))}
        </div>
      </section>
    </div>
  );
}