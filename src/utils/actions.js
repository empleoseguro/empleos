import { api } from "./config"

export const fetchAllPosts = async () => {
    const response = { status: true, data: [], error: null }
    try {
        await api.get('/api/empleoseguros').then((res) => {
            response.data = res.data.data
        })
    } catch (error) {
        response.error = error
        response.status = false
    }
    return response
}

export const fetchPostById = async (id) => {
    const response = { status: true, data: [], error: null }
    try {
        await api.get(`/api/empleoseguros/${id}`).then((res) => {
            response.data = res.data.data
        })
    } catch (error) {
        response.error = error
        response.status = false
    }
    return response
}