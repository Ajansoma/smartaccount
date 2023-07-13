import { Link } from 'react-router-dom';

const AuthRedirectMessage = ({ isLogin }) => {
  const redirectMessage = isLogin
    ? `Don't have an account yet?`
    : `Already an account?`;

  return (
    <div className="text-sm text-text-200 mt-8">
      {redirectMessage}
      <Link
        to={isLogin ? '/register' : '/login'}
        className="ml-2 text-primary-100 hover:text-primary-200 duration-150"
      >
        {isLogin ? 'Sign up' : 'Sign in'}
      </Link>
    </div>
  );
};

export default AuthRedirectMessage;
