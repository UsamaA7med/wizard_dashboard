import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogTrigger } from '../ui/dialog'

const WizardDetailsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="flex justify-end cursor-pointer">
          <img src="/Icon (17).png" />
        </div>
      </DialogTrigger>
      <DialogContent
        showCloseButton={false}
        className="min-w-[896px] min-h-[709px] flex flex-col bg-[#0D1C2D] border-[1px] border-[#494454] rounded-[16px]"
      >
        <div className="h-[97px] flex justify-between items-center py-[16px] px-[24px]">
          <div className="flex flex-col">
            <p className="text-[#D0BCFF] text-[16px] tracking-[1.6px]">
              MEMBER PROFILE
            </p>
            <p className="font-semibold text-[32px] tracking-[-0.32px] text-[#D4E4FA]">
              Mrs Skower
            </p>
          </div>
          <div className="flex flex-col items-end">
            <p className="text-[16px] text-[#CBC3D7]">Registry ID</p>
            <p className="text-[24px] font-semibold text-[#FFB95F]">
              WR-1897-MS
            </p>
          </div>
        </div>
        <div className="h-[517px] p-[24px] grid grid-cols-12 gap-[48px]">
          <div className="col-span-4 flex flex-col gap-[24px]">
            <div className="px-[24px]">
              <img
                src="ModalImage.jpg"
                className="w-[192px] h-[192px] shadow-[40px] rounded-full"
              />
            </div>
            <div className="flex gap-[8px] items-center">
              <p className="rounded-full py-[4px] px-[12px]  bg-[#D0BCFF1A] border-[1px] border-[#D0BCFF4D] w-[150px]  text-[16px] text-[#D0BCFF]">
                Class A Citizen
              </p>
              <p className="rounded-full py-[4px] px-[12px] bg-[#D0BCFF1A] border-[1px] border-[#D0BCFF4D] w-[136px] text-[16px] text-[#D0BCFF]">
                Class A Citizen
              </p>
            </div>
          </div>
          <div className="col-span-8 flex flex-col gap-[48px] ">
            <div className="bg-[#010F1F66] h-[202px] px-5 grid grid-cols-2 gap-6 place-items-start content-center border border-[#4944541A] rounded-xl">
              <div className="text-[16px] flex flex-col gap-[4px]">
                <p className="text-[#CBC3D7]">First Name</p>
                <p className="font-semibold text-[#D4E4FA]">Skower</p>
              </div>

              <div className="text-[16px] flex flex-col gap-[4px]">
                <p className="text-[#CBC3D7]">Last Name</p>
                <p className="font-semibold text-[#D4E4FA]">Unknown</p>
              </div>

              <div className="text-[16px] flex flex-col gap-[4px]">
                <p className="text-[#CBC3D7]">Registry Status</p>
                <div className="flex items-center gap-2 font-semibold text-[#FFB95F]">
                  <span className="w-2 h-2 rounded-full bg-[#FFB95F]" />
                  Active
                </div>
              </div>

              <div className="text-[16px] flex flex-col gap-[4px]">
                <p className="text-[#CBC3D7]">Primary Specialty</p>
                <p className="font-semibold text-[#D4E4FA]">
                  Domestic Alchemy & Cleaning Charms
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-[24px]">
              <div className="flex gap-[8px] pb-[8px] h- items-center border-b border-[#49445433]">
                <div>
                  <img src="Icon (18).png" className="w-[18px] h-[18px]" />
                </div>
                <p className="text-[20px] text-[#D4E4FA]">Associated Elixirs</p>
              </div>
              <div className="flex flex-col">
                <div className="p-[12px] bg-[#1C2B3C66] rounded-[8px]">
                  <div className="flex justify-between items-center">
                    <div className="flex gap-[16px]">
                      <div className="bg-[#D0BCFF1A] size-10 rounded-[4px] border border-[#D0BCFF33] grid place-items-center">
                        <img
                          src="Icon (19).png"
                          alt=""
                          className="w-[19.425px] h-[18px]"
                        />
                      </div>
                      <div className="flex flex-col text-[16px]">
                        <p className="text-[#D4E4FA]">
                          Mrs Skower's All-Purpose Magical Mess Remover
                        </p>
                        <p className="text-[#CBC3D7]">Inventory: 142 Units</p>
                      </div>
                    </div>
                    <img src="Icon (16).png" className="w-[7.4px] h-[12px]" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[93px] p-[24px] flex justify-end gap-[24px] border-t border-[#49445433] bg-[#0D1C2DCC]">
          <Button>Close</Button>
          <Button>Edit Record</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default WizardDetailsModal
