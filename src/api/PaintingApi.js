import axios from "axios";

export const getPainting = async (id) => {
    const response = await axios.get(`http://artgal-amigos-bg.site/api/painting/${id}`);
    const data = await response.data;
    
    return data.data;
}

export const getPaintings = async () => {
    const response = await axios.get(`http://artgal-amigos-bg.site/api/get-all-paintings`);
    const data = await response.data;
    
    return data.data;
}

export const getSizeSettings = async () => {
    const response = await axios.get(`http://artgal-amigos-bg.site/api/`);
    const data = await response.data;
    localStorage.setItem('painting_of_the_day', data.painting_of_the_day);
    
    return data;
}