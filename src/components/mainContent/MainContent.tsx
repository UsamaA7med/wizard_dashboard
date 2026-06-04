import { KPIdata } from '../../lib/dummy'
import ActivityChart from '../charts/ActivityChart'
import SpecialtyChart from '../charts/SpecialtyChart'
import { TableSection } from '../TableSection'
import KPICard from './KPICard'

const MainContent = () => {
  return (
    <div className="flex flex-1 flex-col gap-8 xl:gap-[48px] px-4 md:px-6 xl:px-[40px] pb-10 xl:pb-[76px] pt-6 xl:pt-[40px] min-w-0">
      <div>
        <p className="text-2xl md:text-3xl xl:text-[40px] font-bold tracking-[-1px] text-[#D4E4FA]">
          Wizarding Registry Dashboard
        </p>
        <p className="text-sm xl:text-[18px] text-[#CBC3D7]">
          Overseeing the mystical equilibrium across all magical realms.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 xl:gap-[24px]">
        {KPIdata.map((kpi) => (
          <KPICard key={kpi.id} styles={kpi} />
        ))}
      </div>
      <div className="flex flex-col lg:flex-row gap-4 xl:gap-[24px]">
        <div className="flex flex-1 min-w-0">
          <SpecialtyChart />
        </div>
        <div className="w-full lg:w-[298px] xl:w-[298.6666564941406px] shrink-0">
          <ActivityChart />
        </div>
      </div>
      <TableSection />
    </div>
  )
}

export default MainContent
