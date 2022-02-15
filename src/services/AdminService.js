import axios from 'axios'

const PATIENTS_API_BASE_URL = "http://localhost:8015/api/v1/patients";
class AdminService {

    getPatients(){
        return axios.get(PATIENTS_API_BASE_URL);
    }

    createPatients(patient){
        return axios.post(PATIENTS_API_BASE_URL, patient);
    }

    getPatientById(id){
        return axios.get(PATIENTS_API_BASE_URL + '/' + id);
    }

    updatePatients(patient, id){
        return axios.put(PATIENTS_API_BASE_URL + '/' + id, patient);
    }

    deletePatients(id){
        return axios.delete(PATIENTS_API_BASE_URL + '/' + id);
    }

    loginPatients(patient){
        return axios.post(PATIENTS_API_BASE_URL, patient);
    }
}
export default new AdminService();
