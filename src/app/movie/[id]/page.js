export default async function MoviePage({ params }) {
  const { id } = await params;
  return <div>영화: {id}</div>;
}
