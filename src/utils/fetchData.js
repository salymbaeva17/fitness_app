export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b0d32002e1mshb620af1330e08e8p193c9ejsnd3cb4f61cb99',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b0d32002e1mshb620af1330e08e8p193c9ejsnd3cb4f61cb99',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};


export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}