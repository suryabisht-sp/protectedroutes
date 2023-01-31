import axios from "axios"
import { useQuery } from "react-query"


    const fetchData = () => {
         return axios.get(
      "https://jsonplaceholder.typicode.com/todos"
    )
    }

export const useFetchJsonData = (onsuccess, onError) => {
   return useQuery("Jsondata", fetchData, {
        // cacheTime: 3000
        // staleTime: 5000
        // refetchOnMount: true
        // refetchIntervalInBackground: true
        // refetchOnWindowFocus: true
        // enabled: false,
        onSuccess: onsuccess,
        onError: onError,
        select: (data) => {
        const title=  data.data.map((item) =>item.title) 
            return title;
        }

      } )
}