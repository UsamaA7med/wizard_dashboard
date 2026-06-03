const AsidebarItems = () => {
  return (
    <div className="px-[16px] h-[919px]">
      <ul className="flex flex-col gap-[8px]">
        <li>
          <a
            href="dashboard"
            className="px-[24px] py-[12px] h-[44px] gap-[16px] flex items-center text-[14px] font-semibold bg-[#EE980033] border-r-2 border-secondary rounded-[8px]"
          >
            <img src="DashboardIcon.png" className="w-[18px] h-[18px]" />
            <span className=" text-secondary">Dashboard</span>
          </a>
        </li>
        <li>
          <a
            href="wizards"
            className="px-[24px] text-[#CBC3D7] py-[12px] h-[44px] gap-[16px] flex items-center text-[14px] font-semibold  rounded-[8px]"
          >
            <img src="WizardIcon.png" className="w-[22px] h-[16px]" />
            <span>Wizards</span>
          </a>
        </li>
        <li>
          <a
            href="Elixirs"
            className="px-[24px] text-[#CBC3D7]  py-[12px] h-[44px] gap-[16px] flex items-center text-[14px] font-semibold  rounded-[8px]"
          >
            <img src="ElixirsIcon.png" className="w-[18.06px] h-[18px]" />
            <span>Elixirs</span>
          </a>
        </li>
        <li>
          <a
            href="Archives"
            className="px-[24px] text-[#CBC3D7] py-[12px] h-[44px] gap-[16px] flex items-center text-[14px] font-semibold  rounded-[8px]"
          >
            <img src="ArchivesIcon.png" className="w-[22px] h-[19.5px]" />
            <span>Archives</span>
          </a>
        </li>
      </ul>
    </div>
  )
}

export default AsidebarItems
