import axios from 'axios';

const CITY_POST_API_BASE_URL = "http://localhost:8081/api/post/city/";
const USER_POST_API_BASE_URL = "http://localhost:8081/api/user/post";
const USER_MESSAGE_API_BASE_URL = "http://localhost:8081/api/user/message";

class CityPostService {

    getCityPosts() {
        return axios.get(CITY_POST_API_BASE_URL);
    }

    createCityPost(cityPost) {
        return axios.post(CITY_POST_API_BASE_URL, cityPost);
    }

    getCityPost(id) {
        return axios.get(CITY_POST_API_BASE_URL+id);
    }

    getCityPostMessages(id) {
        return axios.get(CITY_POST_API_BASE_URL+id+"/messages");
    }

    createCityMessage(cityMessage) {
        return axios.post(CITY_POST_API_BASE_URL+"message", cityMessage);
    }

}

export default new CityPostService()