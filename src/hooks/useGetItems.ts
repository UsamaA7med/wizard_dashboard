import type { TItem, TQueryProps } from '@/types'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'

const fetchItems = async ({ query }: TQueryProps): Promise<TItem[]> => {
  const [byFirst, byLast] = await Promise.all([
    axios.get<TItem[]>(`https://wizard-world-api.herokuapp.com/Wizards`, {
      params: query ? { firstName: query } : {},
    }),
    axios.get<TItem[]>(`https://wizard-world-api.herokuapp.com/Wizards`, {
      params: query ? { lastName: query } : {},
    }),
  ])

  const merged = [...byFirst.data, ...byLast.data]
  const unique = merged.filter(
    (wizard, index, self) => self.findIndex((w) => w.id === wizard.id) === index
  )
  return unique
}

const useGetItems = ({ query }: TQueryProps): UseQueryResult<TItem[]> => {
  const data = useQuery({
    queryKey: ['items', { query }],
    queryFn: () => fetchItems({ query }),
    staleTime: 1000 * 60 * 5,
  })
  return data
}

export default useGetItems
