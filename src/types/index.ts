export type TItem = {
  id: string
  firstName: string | null
  lastName: string | null
  elixirs: { id: string; name: string }[]
}

export type TQueryProps = {
  query: string
}

export type TState = {
  query: string
  setQuery: (value: string) => void
  page: number
  setPage: (value: number) => void
}

export type TKPI = {
  id: number
  title: string
  number: string
  logo: string
  text: string
  textColor: string
  numberColor: string
  imageStyle: string
  boxExtraStyles?: string
}
