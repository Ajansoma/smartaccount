import Form from '../UI/Form';
import { expenseData } from '../data';
import { pagesTitle } from '../lib/pagesTitle';

const submitForm = function (data) {
  console.log(data);
};

const AddExpenses = () => {
  return (
    <section className="px-12 my-24">
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
        />
      </div>
    </section>
  );
};

export default AddExpenses;
