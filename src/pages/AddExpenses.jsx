import Form from '../UI/Form';
import { expenseData } from '../data';
import { pagesTitle } from '../lib/pagesTitle';
import { expenseSchema } from '../lib/schemas';

const submitForm = function (data) {
  console.log(data);
};

const AddExpenses = () => {
  return (
    <section className="px-6 my-24">
      {pagesTitle(
        'Add Expense',
        <ion-icon name="scan-outline"></ion-icon>,
        'Scan Expense'
      )}
      <div className="bg-white drop-shadow-sm  p-6 rounded-lg">
        <Form
          data={expenseData}
          submitForm={submitForm}
          isLoginForm={false}
          buttonName="Submit"
          schema={expenseSchema}
        />
      </div>
    </section>
  );
};

export default AddExpenses;
