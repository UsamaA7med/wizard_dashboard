import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'
import type { TItem, TQueryProps } from 'src/types'

const fetchItems = async ({
  FirstName,
  LastName,
}: TQueryProps): Promise<TItem[]> => {
  const response = await axios.get<TItem[]>(
    `https://wizard-world-api.herokuapp.com/Wizards?firstName=${FirstName}&lastName=${LastName}`
  )
  return response.data
}

const useGetItems = ({
  FirstName,
  LastName,
}: TQueryProps): UseQueryResult<TItem[]> => {
  const query = useQuery({
    queryKey: ['items', { FirstName, LastName }],
    queryFn: () => fetchItems({ FirstName, LastName }),
    staleTime: 1000 * 60 * 5,
  })
  return query
}

export default useGetItems
