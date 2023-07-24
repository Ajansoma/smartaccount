import { inventoryData } from '../data';
import InventoryData from '../component/InventoryData';
import { pagesTitle } from '../lib/pagesTitle';

const Inventory = () => {
  return (
    <section className="px-6 my-24">
      {pagesTitle(
        'Inventory',
        <ion-icon name="add-outline"></ion-icon>,
        'Add Inventory'
      )}

      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {inventoryData.map((data) => (
          <div className="bg-white drop-shadow-sm rounded-lg" key={data.id}>
            <img
              src={data.img}
              className="w-full h-[12rem] rounded-t-lg object-cover"
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
                name={`GHS ${data.cp}`}
              />
              <InventoryData
                style="bg-sec-400 text-sec-300"
                title="Selling Price"
                name={`GHS ${data.sp}`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Inventory;
