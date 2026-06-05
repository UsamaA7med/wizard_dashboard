import type { TKPI } from 'src/types'

const KPICard = ({ styles }: { styles: TKPI }) => {
  return (
    <div
      className={`bg-[#051424CC] backdrop-blur-md shadow-md h-[158.5px] rounded-[12px]  flex flex-col  p-[24px] border-[1px] justify-between border-[#4944544D] ${styles.boxExtraStyles}`}
    >
      <div className="flex flex-col gap-[8.5px]">
        <p
          className={`text-[14px] font-semibold tracking-[1.4px] text-[#CBC3D7]`}
        >
          {styles.title}
        </p>
        <p
          className={`text-[32px] font-semibold tracking-[-0.32px] ${styles.numberColor}`}
        >
          {styles.number}
        </p>
      </div>
      <div className="flex items-center gap-[8px]">
        <img src={styles.logo} className={styles.imageStyle} />
        <p
          className={`text-[12px] font-medium tracking-[0.6px] ${styles.textColor}`}
        >
          {styles.text}
        </p>
      </div>
    </div>
  )
}

export default KPICard
