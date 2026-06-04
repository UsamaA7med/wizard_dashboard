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
  const [query, setQuery] = useState('')
  const [page, setPage] = useState(1)
  const debouncedQuery = useDebounce(query, 400)
  const data = useGetItems({ query: debouncedQuery })
  const paginated = data.data?.slice((page - 1) * 4, page * 4)
  const totalPages = Math.ceil((data.data?.length ?? 0) / 4)
  const shortId = (id: string) => `${id.slice(0, 8)}...${id.slice(-6)}`
  return (
    <div className="flex flex-col min-h-[496px] rounded-[12px] border-[1px] border-[#D0BCFF1A] bg-[#051424CC]">
      <Search
        states={{
          query,
          setQuery,
          page,
          setPage,
        }}
      />
      {data.isLoading ? (
        <SkeletonTable />
      ) : (
        <div className="overflow-hidden rounded-md border min-h-[350px]">
          <Table>
            <TableHeader className="bg-[#1C2B3C80] h-[73.5px]">
              <TableRow>
                <TableHead className="w-[190.8300018310547px] px-[24px] pt-[25.5px] pb-[27px] font-semibold traking-[0.7px] text-[#CBC3D7] text-[14px]">
                  ID
                </TableHead>
                <TableHead className="w-[133.69000244140625px] px-[24px] py-[16px] font-semibold traking-[0.7px] text-[#CBC3D7] text-[14px]">
                  FIRST NAME
                </TableHead>
                <TableHead className="w-[135.08999633789062px] px-[24px] pt-[25.5px] pb-[27px] font-semibold traking-[0.7px] text-[#CBC3D7] text-[14px]">
                  LAST NAME
                </TableHead>
                <TableHead className="w-[368.8599853515625px] px-[24px] pt-[25.5px] pb-[27px] font-semibold traking-[0.7px] text-[#CBC3D7] text-[14px]">
                  ASSOCIATED ELIXIRS
                </TableHead>
                <TableHead className="w-[113.52999877929688px] px-[24px] pt-[25.5px] pb-[27px] font-semibold traking-[0.7px] text-[#CBC3D7] text-[14px]">
                  ACTIONS
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginated?.map((item, idx) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium text-[#D0BCFF] px-[24px] py-[24px]">
                    {shortId(item.id)}
                  </TableCell>
                  <TableCell className="font-medium text-[16px] text-[#CBC3D7] px-[24px]">
                    {item.firstName || '(None)'}
                  </TableCell>
                  <TableCell className="font-medium text-[16px] text-[#D4E4FA] px-[24px]">
                    {item.lastName || '(None)'}
                  </TableCell>
                  <TableCell>
                    <div className="flex gap-[8px]">
                      <Tooltip>
                        <TooltipTrigger
                          className={`rounded-full border-[1px] p-[9px]  ${idx % 2 === 0 ? 'bg-[#EE98001A] text-secondary border-[#EE980033]' : 'bg-[#1C2B3C80] text-[#D0BCFF] border-[#A078FF33]'}`}
                        >
                          {item.elixirs[0].name}
                        </TooltipTrigger>
                        <TooltipContent className="flex flex-col bg-primary text-[#D4E4FA]">
                          {item.elixirs.map((elixir) => (
                            <p key={elixir.id}>{elixir.name}</p>
                          ))}
                        </TooltipContent>
                      </Tooltip>
                    </div>
                  </TableCell>
                  <TableCell className="px-[24px]">
                    <div className="flex justify-end">
                      <img src="/Icon (17).png" />
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
      <div className="bg-[#1C2B3C4D] px-[24px] h-[65px] flex items-center justify-between">
        <p className="text-[12px] font-medium tracking-[0.6px] text-[#CBC3D7]">
          Showing {(page - 1) * 4 + 1}-
          {Math.min(page * 4, data.data?.length ?? 0)} of {data.data?.length}{' '}
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
