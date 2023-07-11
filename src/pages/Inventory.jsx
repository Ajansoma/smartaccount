import { inventoryData } from '../data';
import InventoryData from '../component/InventoryData';

const Inventory = () => {
  return (
    <section className="px-12 md:pl-[20rem] my-24 grid grid-cols-4 gap-6">
      {inventoryData.map((data) => (
        <div
          className="bg-white shadow-lg shadow-primary-100/20 w-[16rem] rounded-lg"
          key={data.id}
        >
          <img
            src={data.img}
            className="w-[16rem] h-[12rem] rounded-t-lg object-cover "
          />
          <div className="p-6 flex flex-col gap-2 text-sm">
            <InventoryData
              style="bg-primary-300 text-primary-100"
              title="Product Name"
              name={data.product}
            />
            <InventoryData
              style="bg-sec-200 text-sec-100"
              title="Cost Price"
              name={data.cp}
            />
            <InventoryData
              style="bg-sec-400 text-sec-300"
              title="Selling Price"
              name={data.sp}
            />
          </div>
        </div>
      ))}
    </section>
  );
};

export default Inventory;
