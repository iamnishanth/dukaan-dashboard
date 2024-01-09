export const Pagination = () => {
  return (
    <div className="flex justify-center mt-6">
      <div className="flex items-center gap-6">
        <div className="flex items-center justify-center p-1.5 pr-3 gap-1.5 rounded border border-[#D9D9D9] bg-white cursor-pointer">
          <img className="h-[18px] w-[18px]" src="./assets/chevron-left.svg" alt="left arrow" />
          <span className="text-[#4D4D4D] text-[14px] font-medium leading-5">Previous</span>
        </div>
        <div className="flex items-start gap-2">
          <PaginationItem page="1" />
          <PaginationItem page="..." />
          <PaginationItem page="10" isActive={true} />
          <PaginationItem page="11" />
          <PaginationItem page="12" />
          <PaginationItem page="13" />
          <PaginationItem page="14" />
          <PaginationItem page="15" />
          <PaginationItem page="16" />
          <PaginationItem page="17" />
          <PaginationItem page="18" />
        </div>
        <div className="flex items-center justify-center p-1.5 pl-3 gap-1.5 rounded border border-[#D9D9D9] bg-white cursor-pointer">
          <span className="text-[#4D4D4D] text-[14px] font-medium leading-5">Next</span>
          <img className="h-[18px] w-[18px]" src="./assets/chevron-right.svg" alt="right arrow" />
        </div>
      </div>
    </div>
  );
};

const PaginationItem = ({ page, isActive }: { page: string; isActive?: boolean }) => {
  return (
    <div
      className={`h-[28px] w-[28px] rounded flex items-center justify-center text-[14px] font-normal leading-5 cursor-pointer ${
        isActive ? "text-white bg-[#146EB4]" : "text-[#4D4D4D] bg-white"
      } `}
    >
      {page}
    </div>
  );
};
