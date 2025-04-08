const API_URL = "https://animal-api-two.vercel.app/";
const content = document.querySelector("div.content");
let template = "";

const getImageFile = async () => {
  const res = await fetch(API_URL);

  if (!res) throw new Error("Failed to fetch image file");
  try {
    const data = await res.json();
    data.photos.forEach((item) => {
      template += `<img src=${item.url} alt=${item.name} />`;
    });
    content.innerHTML = template;
  } catch (e) {
    console.log(e);
  }
};

getImageFile();

const a = ["asdasdasasd"];
console.log(a.join(""));
