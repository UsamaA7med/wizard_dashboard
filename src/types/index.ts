export type TItem = {
  id: string
  firstName: string | null
  lastName: string | null
  elixirs: { id: string; name: string }[]
}

export type TQueryProps = {
  FirstName: string
  LastName: string
}

export type TState = {
  FirstName: string
  LastName: string
  page: number
  setPage: (value: number) => void
  setFirstName: (value: string) => void
  setLastName: (value: string) => void
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
