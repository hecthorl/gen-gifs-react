export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=76c24rwUDNfAINsJpFQo8zB7KVKTo6hO&q=${encodeURI(category)}&limit=11`;

    const response = await fetch(url);
    const {data} = await response.json();

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            img: img.images.downsized_medium.url
        }
    });
    return gifs

}
