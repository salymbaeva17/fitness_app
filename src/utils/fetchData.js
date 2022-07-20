export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': `2ccd011c6dmshea15a727a7a49cdp1c9a47jsn6b1b6e824769`,
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};
export const fetchData = async (url, options) => {
    const response = await fetch(url, options)
    const data = await response.json()
    return data
}