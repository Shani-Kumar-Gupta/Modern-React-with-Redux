import axios from 'axios';
const KEY = 'AIzaSyCxprQZo00KLOsf47WP-4EQ8TUnYZC2kcI';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});