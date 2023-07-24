import { useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

const labelData = [];
for (let i = 0; i < 32; i++) {
  labelData.push(i);
}

const Chart = () => {
  const data = [100, 200, 40];

  const [userData] = useState({
    labels: ['Gross Profit', 'Month Revenue', 'Month Expense'],
    datasets: [
      {
        label: 'My First Dataset',
        data: data,
        backgroundColor: [
          'rgb(241,237,255)',
          'rgb(145,142,222)',
          'rgb(144, 140, 184)',
        ],
        hoverOffset: 4,
      },
    ],
  });

  return (
    <section className="bg-white drop-shadow-sm text-text-100 rounded-lg w-[66.1%] flex justify-center mt-6">
      <div className="w-[28rem] py-14">
        <Doughnut data={userData} />
      </div>
    </section>
  );
};

export default Chart;
