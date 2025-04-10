const API_URL = "https://animal-api-two.vercel.app/";

export const request = async () => {
  const res = await fetch(API_URL);

  try {
    const data = await res.json();
    console.log(data);
    return res.ok && data.photos;
  } catch (err) {
    console.log(err);
  }
};
