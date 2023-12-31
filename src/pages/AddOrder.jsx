import Form from '../UI/Form';
import { orderData } from '../data';
import { pagesTitle } from '../lib/pagesTitle';
import { orderSchema } from '../lib/schemas';

const AddOrder = () => {
  const submitForm = function (data) {
    console.log(data);
  };
  return (
    <section className="px-6 my-24">
      {pagesTitle(
        'Add Order',
        <ion-icon name="scan-outline"></ion-icon>,
        'Scan Order'
      )}
      <div className="bg-white drop-shadow-sm p-6 rounded-lg">
        <Form
          data={orderData}
          submitForm={submitForm}
          isLoginForm={false}
          buttonName="Submit"
          schema={orderSchema}
        />
      </div>
    </section>
  );
};

export default AddOrder;
