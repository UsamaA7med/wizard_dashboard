import type { TState } from 'src/types'
import { Input } from './ui/input'

export const Search = ({ states }: { states: TState }) => {
  const { FirstName, LastName, setFirstName, setLastName, setPage } = states
  const handelFirstNameChange = (value: string) => {
    setFirstName(value)
    setPage(1)
  }
  const handelLastNameChange = (value: string) => {
    setLastName(value)
    setPage(1)
  }
  return (
    <div className="flex gap-10">
      <Input
        placeholder="Search by First Name"
        value={FirstName}
        onChange={(e) => handelFirstNameChange(e.target.value)}
      />
      <Input
        placeholder="Search by Last Name"
        value={LastName}
        onChange={(e) => handelLastNameChange(e.target.value)}
      />
    </div>
  )
}
