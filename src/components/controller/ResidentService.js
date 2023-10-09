import axios from 'axios';

const RESIDENT_API_BASE_URL = "http://localhost:8081/api/v1/residents";

class ResidentService {

    getResidents() {
        return axios.get(RESIDENT_API_BASE_URL);
    }
}

export default new ResidentService()