import Form from '../UI/Form';

const AddOrder = () => {
  return (
    <div className="px-6 md:px-24 my-24">
      <Form
        data={data}
        onSubmit={onSubmit}
        isLoginForm={false}
        buttonName="Submit"
      />
    </div>
  );
};

export default AddOrder;
