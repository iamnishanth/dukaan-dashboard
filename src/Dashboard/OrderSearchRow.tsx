export const OrderSearchRow = () => {
  return (
    <div className="flex justify-between">
      <div className="w-[248px] flex items-center px-4 py-2.5 gap-2 rounded border border-[#D9D9D9] bg-white">
        <img className="h-[14px] w-[14px]" src="./assets/search.svg" alt="search" />
        <input
          className="flex-1 text-[#1A181E] text-[14px] font-light leading-5 placeholder:text-[#999999] placeholder:text-[14px] placeholder:font-light placeholder:leading-5 outline-none border-0"
          type="text"
          placeholder="Search by order ID..."
        />
      </div>
      <div className="flex items-center gap-3">
        <div className="flex items-center h-9 px-3 gap-1.5 rounded bg-white border border-[#D9D9D9] cursor-pointer">
          <span className="text-[16px] text-[#4D4D4D] font-normal leading-6">Sort</span>
          <img className="h-4 w-4" src="./assets/sort.svg" alt="sort" />
        </div>
        <div className="border border-[#D9D9D9] rounded h-9 w-9 flex items-center justify-center cursor-pointer">
          <img className="h-5 w-5" src="./assets/download.svg" alt="download" />
        </div>
      </div>
    </div>
  );
};
