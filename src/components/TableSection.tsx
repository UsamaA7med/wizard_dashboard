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
import WizardDetailsModal from './mainContent/WizardDetailsModel'

export function TableSection() {
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const debouncedQuery = useDebounce(query, 400)
  const data = useGetItems({ query: debouncedQuery })
  const paginated = data.data?.slice((page - 1) * 10, page * 10)
  const totalPages = Math.ceil((data.data?.length ?? 0) / 10)
  const shortId = (id: string) => `${id.slice(0, 8)}...${id.slice(-6)}`
  return (
    <div className="flex flex-col  rounded-[12px] border-[1px] border-[#D0BCFF1A] bg-[#051424CC]">
      <Search states={{ query, setQuery, page, setPage }} />
      {data.isError ? (
        <div className="flex flex-col items-center justify-center min-h-[350px] gap-3 text-center px-4">
          <p className="text-[16px] font-medium text-[#FFB4AB]">
            {data.error.message}
          </p>
          <button
            onClick={() => data.refetch()}
            className="mt-2 px-4 py-2 rounded-[8px] bg-[#D0BCFF] text-[#3C0091] text-[14px] font-semibold cursor-pointer"
          >
            Try again
          </button>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-md border min-h-[350px]">
          <Table>
            <TableHeader className="bg-[#1C2B3C80] h-[73.5px]">
              <TableRow>
                <TableHead className="px-4 xl:px-[24px] pt-[25.5px] pb-[27px] font-semibold tracking-[0.7px] text-[#CBC3D7] text-[14px] whitespace-nowrap">
                  ID
                </TableHead>
                <TableHead className="px-4 xl:px-[24px] py-[16px] font-semibold tracking-[0.7px] text-[#CBC3D7] text-[14px] whitespace-nowrap">
                  FIRST NAME
                </TableHead>
                <TableHead className="px-4 xl:px-[24px] pt-[25.5px] pb-[27px] font-semibold tracking-[0.7px] text-[#CBC3D7] text-[14px] whitespace-nowrap">
                  LAST NAME
                </TableHead>
                <TableHead className="px-4 xl:px-[24px] pt-[25.5px] pb-[27px] font-semibold tracking-[0.7px] text-[#CBC3D7] text-[14px] whitespace-nowrap">
                  ASSOCIATED ELIXIRS
                </TableHead>
                <TableHead className="px-4 xl:px-[24px] pt-[25.5px] pb-[27px] font-semibold tracking-[0.7px] text-[#CBC3D7] text-[14px] whitespace-nowrap">
                  ACTIONS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated?.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center py-16">
                    <p className="text-[16px] font-medium text-[#CBC3D7]">
                      No wizards found
                    </p>
                    <p className="text-[12px] mt-1 text-[#CBC3D7]/40">
                      Try a different search term
                    </p>
                  </TableCell>
                </TableRow>
              )}
              {paginated?.map((item, idx) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-[#D0BCFF] px-4 xl:px-[24px] py-[24px] whitespace-nowrap">
                    {shortId(item.id)}
                  </TableCell>
                  <TableCell className="font-medium text-[16px] text-[#CBC3D7] px-4 xl:px-[24px] whitespace-nowrap">
                    {item.firstName || '(None)'}
                  </TableCell>
                  <TableCell className="font-medium text-[16px] text-[#D4E4FA] px-4 xl:px-[24px] whitespace-nowrap">
                    {item.lastName || '(None)'}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-[8px]">
                      {item.elixirs.length > 0 ? (
                        <Tooltip>
                          <TooltipTrigger
                            className={`rounded-full border-[1px] p-[9px] ${
                              idx % 2 === 0
                                ? 'bg-[#EE98001A] text-secondary border-[#EE980033]'
                                : 'bg-[#1C2B3C80] text-[#D0BCFF] border-[#A078FF33]'
                            }`}
                          >
                            {item.elixirs[0].name}
                          </TooltipTrigger>
                          <TooltipContent className="flex flex-col bg-primary text-[#D4E4FA]">
                            {item.elixirs.map((elixir) => (
                              <p key={elixir.id}>{elixir.name}</p>
                            ))}
                          </TooltipContent>
                        </Tooltip>
                      ) : (
                        <span className="text-[#CBC3D7] text-[14px]">—</span>
                      )}
                    </div>
                  </TableCell>
                  <TableCell className="px-4 xl:px-[24px]">
                    <WizardDetailsModal wizard={item} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <div className="bg-[#1C2B3C4D] px-4 xl:px-[24px] h-auto min-h-[65px] py-3 flex flex-wrap items-center justify-between gap-3">
        <p className="text-[12px] font-medium tracking-[0.6px] text-[#CBC3D7]">
          Showing {(page - 1) * 10 + 1}-
          {Math.min(page * 10, data.data?.length ?? 0)} of {data.data?.length}{' '}
          Records
        </p>
        <PaginationComponent
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  )
}
