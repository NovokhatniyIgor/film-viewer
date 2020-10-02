import axios from 'axios';

const api_url = 'https://api.themoviedb.org/3';
const api_key = 'f575a0be8788cf96948f0883c70814e9';

const fetch = (options: any) => {
    return axios(options)
        .then((res) => {
            return res.data;
        })
        .catch((error) => {
            console.error(error);
        });
};

export const get = (url: string) => {
    return fetch({ url: `${api_url + url}api_key=${api_key}` });
};
