function serializer(res: any[]) {
  if (!res) return [];
  return res.reduce((acc, current) => acc.concat([current?.download_url]), []);
}

export async function getRandomImages(page: number = 1, limit: number = 9) {
  let endPoint = `https://picsum.photos/v2/list?limit=${limit}&page=${page}`;
  try {
    const res = await fetch(endPoint);
    if (!res.ok) {
      // throw custom error
      throw new Error("Oops ! Something went wrong");
    }
    const response = await res.json();
    return {
      data: serializer(response),
    };
  } catch (err: any) {
    return {
      error: { message: err.message },
    };
  }
}
