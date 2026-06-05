import type { TState } from '@/types'
import { Input } from './ui/input'
import { Separator } from './ui/separator'

export const Search = ({ states }: { states: TState }) => {
  const { query, setQuery, setPage } = states
  const handelQueryChange = (value: string) => {
    setQuery(value)
    setPage(1)
  }
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 p-4 xl:p-[24px]">
      <p className="text-xl xl:text-[24px] font-semibold text-[#D4E4FA] shrink-0">
        Master Wizard Registry
      </p>
      <div className="bg-[#1C2B3C66] border-[#4944544D] border-[1px] h-[54px] flex rounded-[12px] items-center gap-[8px] p-[6px] w-full sm:w-auto sm:max-w-[449px] xl:w-[449.25px]">
        <div className="flex items-center justify-center flex-1 min-w-0">
          <div className="w-[13.5px] h-[28px] flex items-center justify-center shrink-0">
            <img src="Icon.png" className="w-full h-[13.5px]" />
          </div>
          <Input
            onChange={(e) => handelQueryChange(e.target.value)}
            value={query}
            placeholder="Search wizards..."
            className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 py-[9px] pr-[16px] pl-[20px] min-w-0"
          />
        </div>
        <div>
          <Separator orientation="vertical" className="h-[24px] w-[9px]" />
        </div>
        <div className="flex px-[16px] py-[8px] gap-[8px] items-center shrink-0">
          <img src="Icon (13).png" />
          <p className="text-[#CBC3D7] text-[16px]">Filter</p>
        </div>
      </div>
    </div>
  )
}
