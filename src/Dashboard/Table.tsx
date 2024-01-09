export const Table = () => {
  return (
    <table className="w-full mt-3 rounded overflow-hidden">
      <TableHeader />
      <tbody>
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
        <TableRow />
      </tbody>
    </table>
  );
};

const TableHeader = () => {
  return (
    <thead className="rounded overflow-hidden">
      <tr className="h-[40px]">
        <th className="text-[#4D4D4D] bg-[#F2F2F2] text-[14px] h-[40px] font-normal leading-5 text-left px-3 rounded-bl">
          Order ID
        </th>
        <th className="text-[#4D4D4D] bg-[#F2F2F2] text-[14px] h-[40px] font-normal leading-5 px-3 flex gap-1 items-center">
          Order date
          <img className="h-2 w-2" src="./assets/chevron-down-3.svg" alt="down arrow" />
        </th>
        <th className="text-[#4D4D4D] bg-[#F2F2F2] text-[14px] h-[40px] font-normal leading-5 text-right px-3">
          Order amount
        </th>
        <th className="text-[#4D4D4D] bg-[#F2F2F2] text-[14px] h-[40px] font-normal leading-5 px-3 flex gap-1 items-center justify-end rounded-br">
          Transaction fees
          <img className="h-3.5 w-3.5" src="./assets/info.svg" alt="info" />
        </th>
      </tr>
    </thead>
  );
};

const TableRow = () => {
  return (
    <tr className="h-12 px-3 items-center gap-10 bg-white border-b border-[#E6E6E6]">
      <td className="text-[#146EB4] text-[14px] font-normal leading-5 px-3 text-left">#281209 </td>
      <td className="text-[#1A181E] text-[14px] font-normal leading-5 px-3 text-left">7 July, 2023</td>
      <td className="text-[#1A181E] text-[14px] font-normal leading-5 px-3 text-right">₹1,278.23</td>
      <td className="text-[#1A181E] text-[14px] font-normal leading-5 px-3 text-right">₹22</td>
    </tr>
  );
};
