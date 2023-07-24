import { profitSalesRevenueData } from '../../data';

const ProfitSalesRevenue = () => {
  return (
    <div className="flex gap-6">
      {profitSalesRevenueData.map((data) => (
        <div
          className="flex flex-col gap-5 bg-white drop-shadow-sm text-text-100 p-4 rounded-lg w-full"
          key={data.id}
        >
          <p className="uppercase text-sm ">{data.title}</p>
          <p className="text-2xl font-meduim">GHS {data.amount}</p>
          <div className="flex items-center gap-1">
            {data.percent > 1 && (
              <ion-icon name="trending-up-outline"></ion-icon>
            )}
            {data.percent < 1 && (
              <ion-icon name="trending-down-outline"></ion-icon>
            )}
            <p
              className={`${
                data.percent > 1
                  ? `bg-sec-500 text-sec-600`
                  : `bg-sec-400 text-sec-300`
              } text-sm px-1 rounded`}
            >
              {data.percent}%
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProfitSalesRevenue;
