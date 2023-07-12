import Form from '../UI/Form';
import { expenseData } from '../data';

const onSubmit = function (data) {
  console.log(data);
};

const AddExpenses = () => {
  return (
    <section className="px-12 my-24">
      <div className="w-full flex justify-between items-center pb-6">
        <p className="text-text-100 text-2xl">Add Expenses</p>
        <div>
          <span className="text-xl text-primary-100 flex items-center gap-2 bg-primary-300 p-2 rounded-lg">
            <ion-icon name="scan-outline"></ion-icon>
            <p>Scan expenses</p>
          </span>
        </div>
      </div>
      <div className="bg-white shadow-lg shadow-primary-100/20  p-6 rounded-lg">
        <Form
          data={expenseData}
          onSubmit={onSubmit}
          isLoginForm={false}
          buttonName="Submit"
        />
      </div>
    </section>
  );
};

export default AddExpenses;
