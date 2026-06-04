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
    <div className="flex items-center w-fit gap-[8px] w-[174.8000030517578px]">
      <button
        onClick={() => setPage(page === 1 ? 1 : page - 1)}
        disabled={page === 1}
        className={`disabled:opacity-40 p-[8px] text-[18px] w-[23.399999618530273px] h-[28px] flex justify-center items-center ${page !== totalPages && 'text-[#D0BCFF]'} ${page !== 1 && 'cursor-pointer'}`}
      >
        <img src="Icon (15).png" className="w-[7.4px] h-[12px]" />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => setPage(index + 1)}
          className={`p-1 rounded w-[32px] h-[32px] flex justify-center text-[16px] cursor-pointer  ${
            page === index + 1
              ? 'text-[#3C0091] bg-[#D0BCFF] text-[16px] rounded-[8px]'
              : 'text-muted-foreground text-[#CBC3D7]'
          }`}
        >
          {index + 1}
        </button>
      ))}

      <button
        onClick={() => setPage(page === totalPages ? totalPages : page + 1)}
        disabled={page === totalPages}
        className={`disabled:opacity-40 p-[8px] text-[18px] w-[23.399999618530273px] h-[28px] flex  justify-center items-center ${page !== totalPages && 'text-[#D0BCFF] cursor-pointer'}`}
      >
        <img src="Icon (16).png" className="w-[7.4px] h-[12px]" />
      </button>
    </div>
  )
}
