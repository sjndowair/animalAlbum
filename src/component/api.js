const API_URL = "https://animal-api-two.vercel.app/";

export const request = async () => {
  const res = await fetch(API_URL);
  try {
    if (res) {
      const data = await res.json();
      console.log(data);
      return data.photos;
    }
  } catch (err) {
    console.log(err);
  }
};
