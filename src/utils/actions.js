
import { apiJSON } from './data'
import { getPostById } from "./functions"

export const fetchAllPosts = () => {
    const response = { status: true, data: [], error: null }
    try {
        response.data = apiJSON
        
    } catch (error) {
        response.error = error
        response.status = false
    }
    return response
}

export const fetchPostById = (id) => {

    const response = { status: true, data: [], error: null }
    try {
        const datos = getPostById(apiJSON, id)
        response.data = datos
    } catch (error) {
        response.error = error
        response.status = false
    }
    return response
}

// export const fetchAllPosts = async () => {
//     const response = { status: true, data: [], error: null }
//     try {
//         await api.get('/api/empleoseguros').then((res) => {
//             response.data = res.data.data
//         })
//     } catch (error) {
//         response.error = error
//         response.status = false
//     }
//     return response
// }

// export const fetchPostById = async (id) => {
//     const response = { status: true, data: [], error: null }
//     try {
//         await api.get(`/api/empleoseguros/${id}`).then((res) => {
//             response.data = res.data.data
//         })
//     } catch (error) {
//         response.error = error
//         response.status = false
//     }
//     return response
// }