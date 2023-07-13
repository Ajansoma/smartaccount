import Chart from '../component/Home/Chart';
import ProfitSalesRevenue from '../component/Home/ProfitSalesRevenue';
import Reports from '../component/Home/Reports';

const Home = () => {
  return (
    <div className="px-6 py-12">
      <ProfitSalesRevenue />
      <Chart />
      <Reports />
    </div>
  );
};

export default Home;
