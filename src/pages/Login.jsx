import AuthImage from '../component/Auth/AuthImage';
import Form from '../UI/Form';
import AuthWelcomeMessage from '../component/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../component/Auth/AuthRedirectMessage';
import { loginData } from '../data';

const Login = () => {
  const onSubmit = function (data) {
    console.log(data);
  };
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 my-24">
        <AuthWelcomeMessage />
        <Form
          data={loginData}
          onSubmit={onSubmit}
          isLoginForm={true}
          buttonName="Sign in"
        />
        <AuthRedirectMessage isLogin={true} />
      </div>
    </div>
  );
};

export default Login;
