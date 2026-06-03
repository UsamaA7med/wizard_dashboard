import { Car } from 'lucide-react'
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
} from 'recharts'
const data = [
  { value: 42 },
  { value: 61 },
  { value: 37 },
  { value: 56 },
  { value: 81 },
  { value: 47 },
  { value: 71 },
  { value: 91 },
  { value: 66 },
  { value: 42 },
  { value: 32 },
  { value: 76 },
]
const SpecialtyChart = () => {
  return (
    <div className="h-[398px] flex-1 flex flex-col gap-[8px] rounded-[12px] border-[1px] px-[24px] pt-[24px] pb-[36px]">
      <div className="flex justify-between items-center">
        <p className="font-semibold text-[24px] text-[#D4E4FA]">
          Registry Activity
        </p>
        <p className="bg-[#273647] rounded-[8px] w-[112px] h-[28px] py-[4px] px-[12px] text-[14px] font-semibold tracking-[0.28px] text-[#D4E4FA]">
          Last 30 Days
        </p>
      </div>
      <div className="pt-[16px]  h-[272px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid vertical={false} stroke="#1e2d45" />
            <Bar dataKey="value" fill="#D0BCFF33" radius={[4, 4, 0, 0]} />
            <Tooltip content={CustomTooltip} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex justify-between px-[8px]">
        <p className="font-medium text-[12px] tracking-[0.6px] text-[#CBC3D7]">
          Moon Start
        </p>
        <p className="font-medium text-[12px] tracking-[0.6px] text-[#CBC3D7]">
          Full Moon
        </p>
        <p className="font-medium text-[12px] tracking-[0.6px] text-[#CBC3D7]">
          Moon End
        </p>
      </div>
    </div>
  )
}
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#273647] border border-[#3a4f6a] rounded-[8px] px-[12px] py-[8px]">
        <p className="text-[#D4E4FA] text-[14px] font-semibold">
          {payload[0].value}
        </p>
      </div>
    )
  }
  return null
}

export default SpecialtyChart
