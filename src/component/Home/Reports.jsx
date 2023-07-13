import ReportItem from './ReportItem';
import { reportsData } from '../../data';

const Reports = () => {
  return (
    <section className="flex gap-6">
      {reportsData.map((data) => (
        <div
          className="bg-white shadow-md shadow-primary-100/20 text-text-100 p-6 rounded-lg w-full mt-6"
          key={data.id}
        >
          <p
            className={`${
              data.id !== 2
                ? 'text-sec-300 bg-sec-400 p-2'
                : 'text-primary-100 bg-primary-300 p-2'
            } uppercase text-sm rounded mb-4 w-fit`}
          >
            {data.title}
          </p>
          {data.reports.map((report) => (
            <ReportItem
              title={report.title}
              amount={report.amount}
              icon={report.icon}
              key={report.id}
            />
          ))}
        </div>
      ))}
    </section>
  );
};

export default Reports;
