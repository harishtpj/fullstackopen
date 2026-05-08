import axios from 'axios'

const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    return axios.get(baseUrl).then(resp => resp.data)
}

const create = newPerson => {
    return axios.post(baseUrl, newPerson).then(resp => resp.data)
}

const update = (id, newPerson) => {
    return axios.put(`${baseUrl}/${id}`, newPerson).then(resp => resp.data)
}

const deletePerson = id => {
    return axios.delete(`${baseUrl}/${id}`)
}

export default { getAll, create, update, deletePerson }