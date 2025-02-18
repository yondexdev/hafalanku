import { axiosInstance } from "@/services/axiosInstance"
import { useQuery } from "@tanstack/react-query"



export const useFetchListChapters = () => {
    return useQuery({
        queryKey: ["chapters"],
        queryFn: async () => {
            const responseListChapter = await axiosInstance.get("/chapters")

            return responseListChapter.data
        }
    })
}