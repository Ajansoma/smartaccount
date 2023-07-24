import CustomerListItem from '../component/CustomerListItem';
import { customerData } from '../data';
import { pagesTitle } from '../lib/pagesTitle';

const CutomerList = () => {
  return (
    <section className="px-12 my-24">
      {pagesTitle(
        'Customer List',
        <ion-icon name="add-outline"></ion-icon>,
        'Add Order'
      )}
      <div className=" bg-white drop-shadow-sm rounded-lg max-h-[80vh] overflow-scroll">
        <div className="w-full flex flex-wrap justify-between border-b py-4 px-6 text-text-100 text-xl leading-[32px]">
          <p className="flex flex-1">Poduct Name</p>
          <p className="flex flex-1">Date</p>
          <p className="flex flex-1">Selling Price</p>
          <p className="">Delete</p>
        </div>
        {customerData.map((data) => (
          <CustomerListItem data={data} />
        ))}
      </div>
    </section>
  );
};

export default CutomerList;
