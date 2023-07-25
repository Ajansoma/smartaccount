import { useContext } from 'react';
import AuthImage from '../component/Auth/AuthImage';
import Form from '../UI/Form';
import AuthWelcomeMessage from '../component/Auth/AuthWelcomeMessage';
import AuthRedirectMessage from '../component/Auth/AuthRedirectMessage';
import { loginData } from '../data';
import { loginSchema } from '../lib/schemas';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { AuthContext } from '../store/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const submitForm = async function (data) {
    const { email, password } = data;
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        dispatch({ type: 'LOGIN', payload: user });
        navigate('/');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2">
      <AuthImage />
      <div className="px-6 md:px-24 py-24 bg-white">
        <AuthWelcomeMessage />
        <Form
          data={loginData}
          submitForm={submitForm}
          isLoginForm={true}
          buttonName="Sign in"
          schema={loginSchema}
        />
        <AuthRedirectMessage isLogin={true} />
      </div>
    </div>
  );
};

export default Login;
