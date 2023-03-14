import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID MS0coShu9rZaLMkJuxlf46kjGeh0CJoBgQhoaBN2VQ4'
        },
        params: {
            query: term,
        },
    });

    

    return response.data.results;
};

export default searchImages; 