export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=5&api_key=BbnLphtswYLKuny9IZVs4A0A7kPwhSt3`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => {
    return {
      id: img.id,
      title: img.title,
      url: img.images?.downsized.url,
    };
  });
  return gifs;
};
