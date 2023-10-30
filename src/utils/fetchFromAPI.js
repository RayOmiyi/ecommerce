import axios from 'axios'

const BASE_URL = 'https://kohls.p.rapidapi.com'
const options = {
  params: {
    limit: '24',
    offset: '1',
    dimensionValueID: 'AgeAppropriate:Teens'
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'kohls.p.rapidapi.com'
  }
};

// base
export const fetchFromAPI = async (url) =>{
    const {data} = await axios.get(`${BASE_URL}/${url}`,options);
    console.log(data);
    return data;
}