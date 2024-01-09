const Navbar = () => {
  return (
    <nav className="h-full min-w-[60px] w-[60px] lg:w-[224px] py-4 px-2.5 hidden sm:flex flex-col gap-4 bg-[#1E2640]">
      <div className="flex flex-col gap-6 flex-1">
        <NavHeader />
        <Pages />
      </div>
      <NavBottom />
    </nav>
  );
};

export default Navbar;

const NavHeader = () => {
  return (
    <div className="h-[42px] px-2 flex gap-3 items-center">
      <img className="w-5 h-5 lg:h-[39px] lg:w-[39px] rounded" src="./assets/company-logo.png" alt="company logo" />
      <div className="hidden lg:flex flex-col justify-center gap-1 items-start flex-1">
        <p className="text-white text-[15px] font-medium leading-[22px] self-stretch select-none">Nishyan</p>
        <p className="text-white text-[13px] font-normal leading-4 underline opacity-80 self-stretch select-none cursor-pointer">
          Visit store
        </p>
      </div>
      <img className="h-5 w-5 hidden lg:block cursor-pointer" src="./assets/chevron-down.svg" alt="down arrow" />
    </div>
  );
};

const Pages = () => {
  return (
    <div className="flex flex-col self-start gap-1 flex-1 w-full">
      <NavButton icon="./assets/pages/home.svg" name="Home" />
      <NavButton icon="./assets/pages/orders.svg" name="Orders" />
      <NavButton icon="./assets/pages/products.svg" name="Products" />
      <NavButton icon="./assets/pages/delivery.svg" name="Delivery" />
      <NavButton icon="./assets/pages/marketing.svg" name="Marketing" />
      <NavButton icon="./assets/pages/analytics.svg" name="Analytics" />
      <NavButton icon="./assets/pages/payments.svg" name="Payments" isActive={true} />
      <NavButton icon="./assets/pages/tools.svg" name="Tools" />
      <NavButton icon="./assets/pages/discounts.svg" name="Discounts" />
      <NavButton icon="./assets/pages/audience.svg" name="Audience" />
      <NavButton icon="./assets/pages/appearance.svg" name="Appearance" />
      <NavButton icon="./assets/pages/plugins.svg" name="Plugins" />
    </div>
  );
};

const NavButton = ({ icon, name, isActive = false }: { icon: string; name: string; isActive?: boolean }) => {
  return (
    <div
      className={`flex items-center h-9 w-full lg:px-4 item-center justify-center lg:justify-normal self-start gap-3 hover:bg-[#353C53] rounded ${
        isActive && "bg-[#353C53]"
      }`}
    >
      <img className={`w-5 h-5 ${isActive ? "opacity-100" : "opacity-80"}`} src={icon} alt={name} />
      <p
        className={`text-white hidden lg:block text-sm font-medium leading-5 select-none ${
          isActive ? "opacity-100" : "opacity-80"
        }`}
      >
        {name}
      </p>
    </div>
  );
};

const NavBottom = () => {
  return (
    <div className="hidden lg:flex flex-col w-[192px] items-start self-center bg-[#353C53] rounded px-3 py-1.5 gap-2.5">
      <div className="flex items-center gap-3">
        <div className="flex p-1.5 items-start gap-2.5 bg-[#FFFFFF1A] rounded">
          <img className="h-6 w-6" src="./assets/wallet.svg" alt="wallet" />
        </div>
        <div className="flex flex-col items-start gap-0.5">
          <p className="text-white opacity-80 text-[13px] font-normal leading-4">Available credits</p>
          <p className="text-white text-[16px] font-medium leading-6">222.10</p>
        </div>
      </div>
    </div>
  );
};
