import Chart from '../component/Home/Chart';
import ProfitSalesRevenue from '../component/Home/ProfitSalesRevenue';
import Reports from '../component/Home/Reports';

const Home = () => {
  return (
    <div className="px-6 my-24">
      <ProfitSalesRevenue />
      <Chart />
      <Reports />
    </div>
  );
};

export default Home;
