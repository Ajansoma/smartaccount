import AuthImage from '../component/Auth/AuthImage';
import Form from '../UI/Form';
import AuthWelcomeMessage from '../component/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../component/Auth/AuthRedirectMessage';
import { loginData } from '../data';

const Login = () => {
  const submitForm = async function (data) {
    try {
      // Perform asynchronous operations here
      await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Success handling
      console.log('Form data submitted successfully!');
    } catch (error) {
      // Error handling
      console.error('Error submitting form data:', error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 my-24">
        <AuthWelcomeMessage />
        <Form
          data={loginData}
          submitForm={submitForm}
          isLoginForm={true}
          buttonName="Sign in"
        />
        <AuthRedirectMessage isLogin={true} />
      </div>
    </div>
  );
};

export default Login;
