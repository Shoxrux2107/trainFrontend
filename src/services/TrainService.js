import axios from "axios";

const BASE_REST_API_URL = 'http://localhost:8080/api/train';

export const getAllTrains = () => axios.get(BASE_REST_API_URL + '/trains')


export const saveTrain = (train) => axios.post(BASE_REST_API_URL, train)

export const getTrain = (id) => axios.get(BASE_REST_API_URL + '/' + id)

export const updateTrain = (id, train) => axios.put(BASE_REST_API_URL + '/' + id, train)

export const deleteTrain = (id) => axios.delete(BASE_REST_API_URL + '/' + id)

