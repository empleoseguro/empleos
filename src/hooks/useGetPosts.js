import { useEffect, useState } from 'react'
import useSWR from 'swr'
import { fetchAllPosts } from '../utils/actions'

export const useGetPosts = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {
            const result = await fetchAllPosts()
            setData(result.data)
        })()

    }, [])

    return data
}

export const useUser = () => {

    const { data } = useSWR(`/empleos`, fetchAllPosts)

    return data?.data
}
