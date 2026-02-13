"use server";

import { revalidatePath } from "next/cache";

export async function createReviewAction(formData) {
  const movieId = formData.get("movieId")?.toString();
  const author = formData.get("author")?.toString();
  const content = formData.get("content")?.toString();

  if (!movieId || !author || !content) return;

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/movies/${movieId}/reviews`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          author,
          content,
          rating: 5,
        }),
      },
    );

    if (!response.ok) {
      throw new Error(
        `Review creation failed:${response.statusText}`,
      );
    }

    revalidatePath(`/movie/${movieId}`); // 해당 페이지의 캐시를 삭제하고 최신 데이터로 재생성

    return {
      status: true,
      error: "",
    };
  } catch (err) {
    console.error(err);
    return {
      status: false,
      error: err.message,
    };
  }
}