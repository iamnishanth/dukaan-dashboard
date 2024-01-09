export const Overview = () => {
  return (
    <div className="flex flex-col items-start gap-6 self-stretch">
      <div className="flex justify-between items-center self-stretch">
        <p className="text-[#1A181E] text-[20px] font-medium leading-7">Overview</p>
        <div className="h-9 w-[137px] flex items-center justify-center bg-white gap-[7px] rounded border border-[#D9D9D9] cursor-pointer">
          <p className="text-[#4D4D4D] text-[16px] font-normal leading-6">Last Month</p>
          <img className="h-4 w-4" src="./assets/chevron-down-2.svg" alt="down arrow" />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-start gap-5 self-stretch">
        <div className="flex flex-col w-full md:w-auto flex-1 p-5 gap-4 bg-white rounded-lg shadow-custom">
          <p className="text-[#4D4D4D] text-[16px] font-normal leading-6">Online orders</p>
          <h1 className="text-[#1A181E] text-[32px] font-medium leading-[38px]">231</h1>
        </div>
        <div className="flex flex-col w-full md:w-auto flex-1 p-5 gap-4 bg-white rounded-lg shadow-custom">
          <p className="text-[#4D4D4D] text-[16px] font-normal leading-6">Amount received</p>
          <h1 className="text-[#1A181E] text-[32px] font-medium leading-[38px]">₹23,92,312.19</h1>
        </div>
      </div>
    </div>
  );
};
