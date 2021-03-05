import axios from 'axios';
const KEY = 'AIzaSyAcqx8tdbsQEpo3FeYv4qZvpYFbzgvN0hs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});