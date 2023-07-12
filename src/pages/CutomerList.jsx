import CustomerListItem from '../component/CustomerListItem';
import { customerData } from '../data';

const CutomerList = () => {
  return (
    <section className="px-12 my-24">
      <div className=" bg-white shadow-md shadow-primary-100/20 rounded-lg max-h-[80vh] overflow-scroll">
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
