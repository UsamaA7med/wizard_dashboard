import { Input } from './ui/input'

const Header = () => {
  return (
    <header className="flex items-center justify-between h-16 px-10 border-b bg-primary/80 backdrop-blur-xl shadow-[0_0_20px_0_rgba(208,188,255,0.15)]">
      <div className="flex w-144.75 h-9 items-center justify-between gap-6">
        <h1 className="text-[24px] text-secondary font-bold">
          Wizarding Registry
        </h1>
        <div className="pl-20">
          <div className="rounded-full bg-[#2736474D] h-9 flex items-center gap-2 pl-2">
            <img src="Icon.png" className="w-[10.5px] h-[10.5px]" />
            <Input
              placeholder="Scrying records..."
              className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-6">
        <img src="Button.png" className="w-8 h-8" />
        <img src="gear.png" className="w-8 h-8" />
        <img src="Border.png" className="w-8 h-8" />
      </div>
    </header>
  )
}

export default Header
