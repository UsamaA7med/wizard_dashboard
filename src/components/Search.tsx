import type { TState } from 'src/types'
import { Input } from './ui/input'
import { Separator } from './ui/separator'

export const Search = ({ states }: { states: TState }) => {
  const { query, setQuery, setPage } = states
  const handelQueryChange = (value: string) => {
    setQuery(value)
    setPage(1)
  }
  return (
    <div className="flex justify-between items-center p-[24px]">
      <p className="text-[24px] font-semibold text-[#D4E4FA]">
        Master Wizard Registry
      </p>
      <div className="bg-[#1C2B3C66] border-[#4944544D] border-[1px] h-9 flex rounded-[12px] items-center gap-[8px] p-[6px] w-[449.25px] h-[54px] ">
        <div className="flex items-center justify-center w-[320px]">
          <div className="w-[13.5px] h-[28px] flex items-center justify-center">
            <img src="Icon.png" className="w-full h-[13.5px]" />
          </div>
          <Input
            onChange={(e) => handelQueryChange(e.target.value)}
            value={query}
            placeholder="Search wizards..."
            className="border-0 bg-transparent w-[264px] shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 py-[9px] pr-[16px] pl-[20px]"
          />
        </div>
        <div>
          <Separator orientation="vertical" className="h-[24px] w-[9px]" />
        </div>
        <div className="flex px-[16px] py-[8px] gap-[8px] w-[90.25px] items-center">
          <img src="Icon (13).png" />
          <p className="text-[#CBC3D7] text-[16px]">Filter</p>
        </div>
      </div>
    </div>
  )
}
