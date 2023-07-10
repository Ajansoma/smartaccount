import AuthImage from '../component/Auth/AuthImage';
import Form from '../UI/Form';
import AuthWelcomeMessage from '../component/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../component/Auth/AuthRedirectMessage';

const Register = () => {
  const data = [
    { id: 1, label: 'Email', name: 'email', type: 'email' },
    { id: 3, label: 'Username', name: 'username', type: 'text' },
    { id: 2, label: 'Password', name: 'password', type: 'text' },
  ];

  const onSubmit = function (data) {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 my-24">
        <AuthWelcomeMessage />
        <Form
          data={data}
          onSubmit={onSubmit}
          isLoginForm={false}
          buttonName="Sign up"
        />
        <AuthRedirectMessage isLogin={false} />
      </div>
    </div>
  );
};

export default Register;
