import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8081/api/space/user/";

class UserService {

    getUSers() {
        return axios.get(USER_API_BASE_URL);
    }

    getTargetedUSer(id) {
        return axios.get(USER_API_BASE_URL + id);
    }

    getCityPostByUser(id) {
        return axios.get(USER_API_BASE_URL + id + "/city/posts");
    }

    getAssociationPostByUser(id) {
        return axios.get(USER_API_BASE_URL + id + "/association/posts");
    }

    getIndividualPostByUser(id) {
        return axios.get(USER_API_BASE_URL + id + "/individual/posts");
    }

    getCityMessageByUser(id) {
        return axios.get(USER_API_BASE_URL + id + "/city/messages");
    }

    getAssociationMessageByUser(id) {
        return axios.get(USER_API_BASE_URL + id + "/association/messages");
    }

    getIndividualMessageByUser(id) {
        return axios.get(USER_API_BASE_URL + id + "/individual/messages");
    }

    // getMessagesByUser(id) {
    //     return axios.get(USER_API_BASE_URL+id+"/messages");
    // }
    //
    // getPostsByUser(id) {
    //     return axios.get(USER_API_BASE_URL+id+"/posts");
    // }
}

export default new UserService()