import { Input } from './ui/input'
import { AsidebarSheet } from './asaidbar/AsidebarSheet'

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-4 xl:px-10 border-b bg-primary/80 backdrop-blur-xl shadow-[0_0_20px_0_rgba(208,188,255,0.15)] w-full">
      <div className="flex items-center gap-[24px] flex-1 min-w-0">
        <AsidebarSheet />

        <h1 className="text-[24px] text-secondary font-bold shrink-0 whitespace-nowrap">
          Wizarding Registry
        </h1>

        <div className="hidden md:flex w-[256px] xl:pl-[80px]">
          <div className="rounded-full bg-[#2736474D] h-9 flex items-center gap-2 px-3 w-full">
            <img src="Icon.png" className="w-[10.5px] h-[10.5px] shrink-0" />
            <Input
              placeholder="Scrying records..."
              className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>

      <div className="md:flex gap-6 shrink-0 hidden">
        <img src="Button.png" className="w-8 h-8" />
        <img src="gear.png" className="w-8 h-8" />
        <img src="Border.png" className="w-8 h-8" />
      </div>
    </header>
  )
}

export default Header
