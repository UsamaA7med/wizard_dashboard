import { KPIdata } from '../../lib/dummy'
import KPICard from './KPICard'

const MainContent = () => {
  return (
    <div className="flex flex-1  flex-col gap-[48px] px-[40px] pb-[76px] pt-[40px]">
      <div>
        <p className="text-[40px] font-bold tracking-[-1px] text-[#D4E4FA]">
          Wizarding Registry Dashboard
        </p>
        <p className="text-[18px] text-[#CBC3D7]">
          Overseeing the mystical equilibrium across all magical realms.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
        {KPIdata.map((kpi) => (
          <KPICard key={kpi.id} styles={kpi} />
        ))}
      </div>
    </div>
  )
}

export default MainContent
