import axios from "axios"

const searchImages = async (term)=>{
    const key = "-ZJzsW7WAIp-SFLd98dK05_Tv1oQBHE727ZCXucISTo"
    const url = `https://api.unsplash.com/search/photos?client_id=${key}&query=${term}`

    const response = await axios.get(url)
    return response.data.results;
}

export default searchImages