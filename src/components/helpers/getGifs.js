
export const getGifs = async (categorie) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=WVjdUDGU9uWqVqxf5iYgT2rNT1IPT7oG&q=${categorie}&limit=10`
    const resp = await fetch(url)
    const { data } = await resp.json();
    console.log(data);
    const info = data.map(data => ({
        id: data.id,
        title: data.title,
        url: data.images.downsized_medium.url
    }))

    return info;
}