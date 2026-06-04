import { useState } from 'react'
import { Sheet, SheetContent, SheetHeader, SheetTitle } from '../ui/sheet'
import AsidebarItems from './AsidebarItems'
import AsidebarRegistry from './AsidebarRegistry'
import AsidebarSettings from './AsidebarSettings'
import { Button } from '../ui/button'

export function AsidebarSheet() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="xl:hidden flex flex-col justify-center items-center gap-[5px] w-8 h-8 shrink-0"
        aria-label="Open menu"
      >
        <span className="block w-5 h-[2px] bg-[#CBC3D7] rounded-full" />
        <span className="block w-5 h-[2px] bg-[#CBC3D7] rounded-full" />
        <span className="block w-5 h-[2px] bg-[#CBC3D7] rounded-full" />
      </button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetContent
          side="left"
          className="p-0 w-[256px] bg-[#0D1C2D] border-r border-[#4944544D] flex flex-col"
          showCloseButton={true}
        >
          <SheetHeader className="sr-only">
            <SheetTitle>Navigation</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col flex-1 py-6">
            <AsidebarRegistry />
            <AsidebarItems />
            <Button
              className="mx-[24px] mt-[24px] h-[44px] flex gap-[8px] items-center rounded-[12px] bg-[#D0BCFF] text-[#3C0091]
              hover:text-[#3C0091] hover:bg-[#D0BCFF]
              font-semibold text-[14px] tracking-[0.28px]"
            >
              <img src="Icon (9).png" className="w-[8.17px] h-[8.17px]" />
              New Elixir
            </Button>
            <AsidebarSettings />
          </div>
        </SheetContent>
      </Sheet>
    </>
  )
}
