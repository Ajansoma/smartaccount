import Form from '../UI/Form';
import { inventory } from '../data';
import { pagesTitle } from '../lib/pagesTitle';
import { inventorySchema } from '../lib/schemas';

const AddInventory = () => {
  const submitForm = function (data) {
    console.log(data);
  };
  return (
    <section className="px-6 my-24">
      {pagesTitle(
        'Add Inventory',
        <ion-icon name="scan-outline"></ion-icon>,
        'Scan Inventory'
      )}
      <div className="bg-white drop-shadow-sm p-6 rounded-lg">
        <Form
          data={inventory}
          submitForm={submitForm}
          isLoginForm={false}
          buttonName="Submit"
          schema={inventorySchema}
        />
      </div>
    </section>
  );
};

export default AddInventory;
