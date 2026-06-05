const AsidebarSettings = () => {
  return (
    <div className="px-[16px] pt-[24px] flex flex-col items-start">
      <a
        href="settings"
        className="py-[12px] px-[24px] h-[44px] text-[#CBC3D7] flex items-center gap-[16px] font-semibold text-[14px] "
      >
        <img src="Icon (8).png" className="shrink-0" />
        Settings
      </a>
      <a
        href="settings"
        className="py-[12px] px-[24px] h-[44px] text-[#CBC3D7] flex items-center gap-[16px] font-semibold text-[14px]"
      >
        <img src="support.png" className="shrink-0" />
        Support
      </a>
    </div>
  )
}

export default AsidebarSettings
