import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'

export function PaginationComponent({
  setPage,
  page,
  totalPages,
}: {
  setPage: (value: number) => void
  page: number
  totalPages: number
}) {
  return (
    <Pagination>
      <PaginationContent className="flex items-center gap-8">
        <PaginationItem>
          <PaginationPrevious
            onClick={() => setPage(page === 1 ? 1 : page - 1)}
            size={0}
            className="p-2"
          />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem key={index}>
            <PaginationLink
              size={0}
              onClick={() => setPage(index + 1)}
              isActive={page === index + 1}
              className="p-1"
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            onClick={() => setPage(page === totalPages ? totalPages : page + 1)}
            size={0}
            className="p-2"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}
