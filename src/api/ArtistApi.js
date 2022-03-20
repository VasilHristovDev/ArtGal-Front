import axios from "axios";

export const getArtist = async (id) => {
    const response = await axios.get(`http://artgal-amigos-bg.site/api/artist/${id}`);
    const data = await response.data;
    
    return data.data;
}

export const getArtists = async () => {
    const response = await axios.get(`http://artgal-amigos-bg.site/api/get-all-artists`);
    const data = await response.data;
    
    return data.data;
}