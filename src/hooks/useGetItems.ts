import type { TItem, TQueryProps } from '@/types'
import { useQuery, type UseQueryResult } from '@tanstack/react-query'
import axios from 'axios'

const fetchItems = async ({ query }: TQueryProps): Promise<TItem[]> => {
  const { data } = await axios.get<TItem[]>(
    'https://wizard-world-api.herokuapp.com/Wizards'
  )

  if (!query?.trim()) return data

  const q = query.trim().toLowerCase()

  return data.filter((wizard) => {
    const first = wizard.firstName?.toLowerCase() ?? ''
    const last = wizard.lastName?.toLowerCase() ?? ''
    const full = `${first} ${last}`.trim()

    return first.includes(q) || last.includes(q) || full.includes(q)
  })
}

const useGetItems = ({ query }: TQueryProps): UseQueryResult<TItem[]> => {
  return useQuery({
    queryKey: ['items', { query }],
    queryFn: () => fetchItems({ query }),
    staleTime: 1000 * 60 * 5,
  })
}

export default useGetItems
