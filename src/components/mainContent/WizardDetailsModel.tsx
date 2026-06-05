import type { TModelProps } from 'src/types'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'

const WizardDetailsModal = ({ wizard }: { wizard: TModelProps }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end cursor-pointer">
          <img src="/Icon (17).png" />
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="w-full xl:min-w-[896px] xl:min-h-[709px] flex flex-col bg-[#0D1C2D] border-[1px] border-[#494454] rounded-[16px]"
      >
        <DialogTitle className="hidden"></DialogTitle>
        <div className="flex justify-between items-center py-[16px] px-[16px] xl:px-[24px]">
          <div className="flex flex-col">
            <p className="text-[#D0BCFF] text-[12px] xl:text-[16px] tracking-[1.6px]">
              MEMBER PROFILE
            </p>
            <p className="font-semibold text-[22px] xl:text-[32px] tracking-[-0.32px] text-[#D4E4FA]">
              {wizard.firstName ?? wizard.lastName ?? wizard.firstName}
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[13px] xl:text-[16px] text-[#CBC3D7]">
              Registry ID
            </p>
            <p className="text-[18px] xl:text-[24px] font-semibold text-[#FFB95F]">
              WR-1897-MS
            </p>
          </div>
        </div>

        <div className="w-full xl:w-[846px] xl:h-[517px] p-4 xl:p-6 grid grid-cols-1 xl:grid-cols-12 gap-6 xl:gap-12">
          <div className="xl:col-span-4 flex flex-col gap-6">
            <div className="flex justify-center">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 xl:w-48 xl:h-48 rounded-full p-[3px]">
                <img
                  src="ModalImage.png"
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover shadow-[0_0_15px_2px_rgb(208_188_255/0.2),0_0_15px_2px_rgb(255_185_95/0.2)]"
                />
              </div>
            </div>

            <div className="flex gap-2 xl:gap-[8px] items-center justify-center xl:justify-start text-[12.7px]">
              <p className="rounded-full py-1 px-3 bg-[#D0BCFF1A] border border-[#D0BCFF4D] text-[#D0BCFF]">
                Class A Citizen
              </p>
              <p className="rounded-full py-1 px-3 bg-[#FFB95F1A] border border-[#FFB95F4D] text-[#FFB95F]">
                Class A Citizen
              </p>
            </div>
          </div>

          <div className="xl:col-span-8 flex flex-col gap-6 xl:gap-12">
            <div className="bg-[#010F1F66] h-auto xl:h-[202px] p-4 xl:px-5 border border-[#4944541A] rounded-xl grid grid-cols-2 gap-4 xl:gap-6 content-center">
              <div className="flex flex-col gap-1 text-sm xl:text-base">
                <p className="text-[#CBC3D7]">First Name</p>
                <p className="font-semibold text-[#D4E4FA]">
                  {wizard.firstName ?? 'Unknown'}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-sm xl:text-base">
                <p className="text-[#CBC3D7]">Last Name</p>
                <p className="font-semibold text-[#D4E4FA]">
                  {wizard.lastName ?? 'Unknown'}
                </p>
              </div>

              <div className="flex flex-col gap-1 text-sm xl:text-base">
                <p className="text-[#CBC3D7]">Registry Status</p>
                <div className="flex items-center gap-2 font-semibold text-[#FFB95F]">
                  <span className="w-2 h-2 rounded-full bg-[#FFB95F]" />
                  Active
                </div>
              </div>

              <div className="flex flex-col gap-1 text-sm xl:text-base">
                <p className="text-[#CBC3D7]">Primary Specialty</p>
                <p className="font-semibold text-[#D4E4FA]">
                  Domestic Alchemy & Cleaning Charms
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4 xl:gap-6">
              <div className="flex items-center gap-2 pb-2 border-b border-[#49445433]">
                <img src="Icon (18).png" alt="" className="w-[18px] h-[18px]" />
                <p className="text-lg xl:text-xl text-[#D4E4FA]">
                  Associated Elixirs
                </p>
              </div>

              <div className="flex flex-col gap-[12px] max-h-[200px] overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-[#494454]">
                {wizard.elixirs?.map((ele) => (
                  <div key={ele.id} className="p-3 bg-[#1C2B3C66] rounded-lg">
                    <div className="flex items-center justify-between">
                      <div className="flex gap-3 xl:gap-4">
                        <div className="size-9 xl:size-10 shrink-0 rounded bg-[#D0BCFF1A] border border-[#D0BCFF33] grid place-items-center">
                          <img
                            src="Icon (19).png"
                            alt=""
                            className="w-[19.425px] h-[18px]"
                          />
                        </div>

                        <div className="flex flex-col text-sm xl:text-base">
                          <p className="text-[#D4E4FA]">{ele.name}</p>
                          <p className="text-[#CBC3D7]">Inventory: 142 Units</p>
                        </div>
                      </div>
                      <img
                        src="Icon (16).png"
                        alt=""
                        className="w-[7.4px] h-[12px] shrink-0 ml-2"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="p-[16px] xl:p-[24px] flex justify-end items-center gap-[12px] xl:gap-[24px] border-t border-[#49445433] bg-[#0D1C2DCC]">
          <DialogClose asChild>
            <button className="px-[20px] xl:px-[32px] py-[10px] text-[#CBC3D7] text-[14px] xl:text-[16px]">
              Close
            </button>
          </DialogClose>
          <button className="bg-[#D0BCFF] rounded-[12px] px-[20px] xl:px-[32px] py-[10px] flex gap-[8px] items-center shadow-[0_4px_6px_-4px_rgba(208,188,255,0.2),0_10px_15px_-3px_rgba(208,188,255,0.2)]">
            <img src="Icon (20).png" className="w-[13.5px] h-[13.5px]" />
            <span className="text-[#3C0091] text-[14px] xl:text-[16px] font-bold">
              Edit Record
            </span>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WizardDetailsModal
