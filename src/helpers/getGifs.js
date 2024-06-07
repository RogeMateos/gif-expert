export const getGifs = async (category) => {
	console.log('CATEGORY GETGIGS', category);
	const url = `https://api.giphy.com/v1/gifs/search?api_key=qEsMDLpU7gueHpan7H3gIbaEwOC9WOyx&q=${category}&limit=10`;

	const resp = await fetch(url);
	const { data } = await resp.json();

	const gifs = data.map((img) => ({
		id: img.id,
		title: img.title,
		url: img.images.downsized_medium.url
	}));

	return gifs;
};
