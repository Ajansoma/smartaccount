import Chart from '../component/Home/Chart';
import ProfitSalesRevenue from '../component/Home/ProfitSalesRevenue';

const Home = () => {
  return (
    <div className="px-6 py-12">
      <ProfitSalesRevenue />
      <Chart />
    </div>
  );
};

export default Home;
