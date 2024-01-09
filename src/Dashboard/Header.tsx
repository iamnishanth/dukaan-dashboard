export const Header = () => {
  return (
    <header className="w-full flex py-3 px-8 gap-4 border-b-[1px] border-[#D9D9D9] bg-white">
      <HeaderTitle />
      <Search />
      <IconMenu />
    </header>
  );
};

const HeaderTitle = () => {
  return (
    <div className="flex items-center gap-4 flex-1">
      <p className="text-[15px] font-normal leading-[22px] text-[#1A181E]">Payments</p>
      <div className="flex items-center gap-1.5">
        <img className="h-3.5 w-3.5" src="./assets/header/info.svg" alt="info" />
        <p className="text-[#4D4D4D] text-xs font-normal leading-4 whitespace-nowrap">How it works</p>
      </div>
    </div>
  );
};

const Search = () => {
  return (
    <div className="w-[400px] 2xl:w-[600px] flex items-center self-stretch shrink-0 px-4 py-[9px] rounded-md gap-2 bg-[#F2F2F2]">
      <img className="h-4 w-4" src="./assets/header/search.svg" alt="search" />
      <input
        className="flex-1 text-[#1A181E] placeholder:text-[#808080] text-[15px] placeholder:text-[15px] font-light placeholder:font-light leading-[22px] placeholder:leading-[22px] outline-none border-0 bg-transparent"
        type="text"
        placeholder="Search features, tutorials, etc."
      />
    </div>
  );
};

const IconMenu = () => {
  return (
    <div className="flex justify-end items-center gap-3 flex-1 min-w-[105px]">
      <img className="h-10 w-10 cursor-pointer" src="./assets/header/group.svg" alt="group" />
      <img className="h-10 w-10 cursor-pointer" src="./assets/header/menu.svg" alt="menu" />
    </div>
  );
};
