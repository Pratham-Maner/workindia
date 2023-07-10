import axios from 'axios';

export const getCandidates = async () => {
    try {
        const res = await axios.get('https://run.mocky.io/v3/ae511409-8c0e-40ed-9336-aebcb602823d');
        return res;
    } catch (error) {
        console.log(error);
    }
}