import { useEffect } from 'react';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AuthImage from '../component/AuthImage';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup
  .object({
    email: yup
      .string('username is invalid')
      .typeError('username is invalid')
      .required('username is invalid'),
    password: yup
      .string()
      .required('No password provided.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
        'Must Contain One Uppercase, Lowercase, Number and Special Case Character'
      ),
  })
  .required();

const formStyle =
  'w-full h-10 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none mb-8';

const Login = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (formState.isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const onSubmit = function () {};
  return (
    <div className="grid grid-cols-2">
      <AuthImage />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col justify-center px-6 md:px-24"
      >
        <div className="flex flex-col gap-1">
          <label className="text-sm">Email</label>
          <input {...register('email')} className={formStyle} />
          <p className="-mt-8 mb-3 text-sm text-red-500">
            {errors.email?.message}
          </p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm">Password</label>
          <input {...register('password')} className={formStyle} />
          <p className="-mt-8 text-sm text-red-500">
            {errors.password?.message}
          </p>
        </div>

        <div className="bg-primary-100 text-primary-300 hover:bg-primary-200 duration-150 rounded mt-12">
          <button type="submit" className="w-full h-10">
            Submit
          </button>
        </div>

        <div className="text-sm mt-8 ">
          Don't have an account yet?
          <Link
            to="/register"
            className="ml-2 text-primary-100 hover:text-primary-200 duration-150"
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
