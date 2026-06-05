const AsidebarRegistry = () => {
  return (
    <div className="flex flex-col items-center px-6 justify-center pb-20">
      <div className="rounded-[12px] p-px bg-gradient-to-br from-[#D0BCFF] to-[#FFB95F]">
        <div className="rounded-[10px] bg-[#0D1C2D] w-[60px] h-[60px] flex justify-center items-center">
          <img src="stars.png" className="w-[27.5px] h-[27.5px]" />
        </div>
      </div>
      <p className="text-secondary text-[16px] font-extrabold pt-2">Registry</p>
      <p className="text-[12px] font-medium tracking-[0.6px] text-[#CBC3D7] opacity-70 text-center">
        Ministry of Alchemical Records
      </p>
    </div>
  )
}

export default AsidebarRegistry
