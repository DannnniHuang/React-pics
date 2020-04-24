import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization:
            'Client-ID pKVZx9y8wHRgdeiingfBXvI_XCALbaF_P13YdjnGFmY'
    }
});

