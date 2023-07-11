import AuthImage from '../component/Auth/AuthImage';
import Form from '../UI/Form';
import AuthWelcomeMessage from '../component/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../component/Auth/AuthRedirectMessage';
import { registerData } from '../data';

const Register = () => {
  const onSubmit = function (data) {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 my-24">
        <AuthWelcomeMessage />
        <Form
          data={registerData}
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
