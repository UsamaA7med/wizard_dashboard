import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { Search } from './Search'
import { useState } from 'react'

import useGetItems from '../../src/hooks/useGetItems'
import { PaginationComponent } from './PaginationComponent'
import { useDebounce } from '../../src/hooks/useDebounce'
import SkeletonTable from './SkeletonTable'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export function TableSection() {
  const [FirstName, setFirstName] = useState('')
  const [LastName, setLastName] = useState('')
  const [page, setPage] = useState(1)
  const debouncedFirst = useDebounce(FirstName, 400)
  const debouncedLast = useDebounce(LastName, 400)
  const query = useGetItems({
    FirstName: debouncedFirst,
    LastName: debouncedLast,
  })
  const paginated = query.data?.slice((page - 1) * 5, page * 5)
  const totalPages = Math.ceil((query.data?.length ?? 0) / 5)
  return (
    <div className="flex flex-col gap-10">
      <Search
        states={{
          FirstName,
          LastName,
          setFirstName,
          setLastName,
          page,
          setPage,
        }}
      />
      {query.isLoading ? (
        <SkeletonTable />
      ) : (
        <div className="overflow-hidden rounded-md border">
          <Table className="min-h-50">
            <TableHeader className="bg-muted">
              <TableRow>
                <TableHead>Full Name</TableHead>
                <TableHead>number of elixirs</TableHead>
                <TableHead>elixir names</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated?.map((item) => (
                <TableRow key={item.id} className="w-full">
                  <TableCell className="font-medium">
                    {item.firstName} {item.lastName}
                  </TableCell>
                  <TableCell>{item.elixirs.length}</TableCell>
                  <TableCell>
                    <Tooltip>
                      <TooltipTrigger>{item.elixirs[0].name}</TooltipTrigger>
                      <TooltipContent>
                        {
                          <div className="flex flex-col gap-2">
                            {item.elixirs.map((elixir) => (
                              <p key={elixir.id}>{elixir.name}</p>
                            ))}
                          </div>
                        }
                      </TooltipContent>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <PaginationComponent
        page={page}
        setPage={setPage}
        totalPages={totalPages}
      />
    </div>
  )
}
