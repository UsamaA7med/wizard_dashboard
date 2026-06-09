import { Button } from '../ui/button'
import AsidebarItems from './AsidebarItems'
import AsidebarRegistry from './AsidebarRegistry'
import AsidebarSettings from './AsidebarSettings'

export function Asidebar() {
  return (
    <aside
      className="hidden xl:flex bg-[#0D1C2D] w-[256px] h-full sticky top-0 overflow-y-auto
 py-6 flex-col border-r backdrop-blur-2xl shadow-[0_8px_10px_-6px_rgba(208,188,255,0.05),0_20px_25px_-5px_rgba(208,188,255,0.05)] shrink-0"
    >
      <AsidebarRegistry />
      <AsidebarItems />
      <Button
        className="mx-[24px] mt-[24px] h-[44px] flex gap-[8px] items-center rounded-[12px] bg-[#D0BCFF] text-[#3C0091]
        hover:text-[#3C0091]
        hover:bg-[#D0BCFF]
        shadow-[0_4px_6px_-4px_rgba(208,188,255,0.2),0_10px_15px_-3px_rgba(208,188,255,0.2)]
        font-semibold text-[14px] tracking-[0.28px]"
      >
        <img src="Icon (9).png" className="w-[8.17px] h-[8.17px]" />
        New Elixir
      </Button>
      <AsidebarSettings />
    </aside>
  )
}
