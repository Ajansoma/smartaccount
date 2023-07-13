const ReportItem = ({ title, amount, icon }) => {
  return (
    <div className="flex items-center gap-6 py-5 border-b">
      <div className="text-primary-100 bg-primary-500 p-[10px] rounded text-xl">
        {icon}
      </div>
      <div>
        <p className="text-xs text-text-200 mb-[1px]">{title}</p>
        <p className="text-lg font-medium">GHS {amount}</p>
      </div>
    </div>
  );
};

export default ReportItem;
