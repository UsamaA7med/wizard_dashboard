const AsidebarRegistry = () => {
  return (
    <div className="flex flex-col items-center px-6 justify-center pb-20">
      <div className="rounded-xl bg-linear-to-r from-[#D0BCFF] to-[#FFB95F] p-px">
        <img
          src="stars.png"
          className="border-radial-[#D0BCFF,#FFB95F] border p-5 rounded-[12px] w-15.5 h-15.5 bg-[#0D1C2D]"
        />
      </div>
      <p className="text-secondary text-[16px] font-extrabold pt-2">Registry</p>
      <p className="text-[12px] font-medium tracking-[0.6px] text-[#CBC3D7] opacity-70 text-center">
        Ministry of Alchemical Records
      </p>
    </div>
  )
}

export default AsidebarRegistry
