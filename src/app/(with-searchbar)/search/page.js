import MovieItem from "@/components/MovieItem";
import movies from "@/mock/movies.json";
import * as styles from "@/styles/search.css.js";

export default async function SearchPage({ searchParams }) {
  const { q = "" } = await searchParams;
  const keyword = typeof q === "string" ? q : "";
  const trimmed = keyword.trim();
  const list = trimmed
    ? movies.filter((movie) =>
        movie.title.includes(trimmed),
      )
    : [];

  return (
    <div className={styles.container}>
      {!trimmed &&<div>검색어를 입력하세요.</div>}
      {trimmed && list.length === 0 && (
        <div>검색 결과가 없습니다.</div>
      )}
      {list.map((movie) => (
        <MovieItem key={movie.id} {...movie} />
      ))}
    </div>
  );
}