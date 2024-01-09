import { Header } from "./Header";
import { OrderSearchRow } from "./OrderSearchRow";
import { Overview } from "./Overview";
import { Pagination } from "./Pagination";
import { Table } from "./Table";

const Dashboard = () => {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <main className="flex flex-col flex-1 bg-[#FAFAFA] p-8 gap-8 overflow-y-scroll">
        <Overview />
        <div className="flex flex-col items-start gap-5">
          <h1 className="text-[#1A181E] text-[20px] font-medium leading-7">Transactions | This Month</h1>
          <div className="flex flex-col w-full pt-3 pl-3 pb-6 pr-3 rounded-lg bg-white shadow-custom">
            <OrderSearchRow />
            <Table />
            <Pagination />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
