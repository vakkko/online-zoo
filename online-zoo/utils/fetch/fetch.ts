export const fetchData = async (url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Invalid fetching data2");
  }
  return response.json();
};
