import { Pie, PieChart } from 'recharts'

const data = [{ value: 1200 }]

const ActivityChart = () => {
  return (
    <div className="bg-[#051424CC] border-[1px] rounded-[12px] h-[398px] flex flex-col  p-[25px] pb-[24px]">
      <p className="text-[24px] pb-[24px] font-semibold text-[#D4E4FA]">
        Wizards by Specialty
      </p>
      <div className="relative flex items-center justify-center ">
        <PieChart
          width={192}
          height={192}
          className="flex items-center justify-center"
        >
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            startAngle={90}
            endAngle={-270}
            dataKey="value"
            fill="#273647"
            stroke="none"
          />
        </PieChart>
        <div className="absolute flex flex-col items-center">
          <p className="text-[28px] font-semibold text-[#D4E4FA]">1.2k</p>
          <p className="text-[14px] text-[#CBC3D7]">Total</p>
        </div>
      </div>
      <div className="pt-[24px] flex flex-col gap-[7.5px]">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#D0BCFF] w-[12px] h-[12px] rounded-full" />
            <p className="font-semibold text-[14px] text-[#D4E4FA] tracking-[0.28px]">
              Alchemists
            </p>
          </div>
          <p className="text-[#CBC3D7]">45%</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[8px]">
            <div className="bg-secondary w-[12px] h-[12px] rounded-full" />
            <p className="font-semibold text-[14px] text-[#D4E4FA] tracking-[0.28px]">
              Transmuters
            </p>
          </div>
          <p className="text-[#CBC3D7]">30%</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-[8px]">
            <div className="bg-[#D0BCFF] w-[12px] h-[12px] rounded-full" />
            <p className="font-semibold text-[14px] text-[#D4E4FA] tracking-[0.28px]">
              Conjurers
            </p>
          </div>
          <p className="text-[#CBC3D7]">25%</p>
        </div>
      </div>
    </div>
  )
}

export default ActivityChart
