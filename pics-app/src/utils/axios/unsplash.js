import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com', 
    headers: {
        Authorization: 'Client-ID PnGDzIXbzPvJS-LuM8XRwVr1YwPVgTb1O4Oj-stzkuU'
    }
});