const InventoryData = ({ style, title, name }) => {
  return (
    <div className="flex items-center gap-2">
      <p className={`${style} px-2 py-1 rounded`}>{title}</p>
      <p className="text-text-100">{name}</p>
    </div>
  );
};

export default InventoryData;
