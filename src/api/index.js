import FetchHelper from "../helpers/FetchHelper";
import YoutubeFetchHelper from "../helpers/youtubeFetchHelper";
import axios from 'axios'

const api = {
    getPhotos: (params) => FetchHelper.fetchJsonGet('/photos', params),
    youtubeSearch: (params) => YoutubeFetchHelper.fetchJsonGet('/search', params),

    getTodo : () => axios.get('https://jsonplaceholder.typicode.com/todos')
}

export default api;
