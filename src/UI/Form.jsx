import { useEffect } from 'react';
// import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Button from '../UI/Button';

const formStyle =
  'w-full h-10 border border-grey-100 rounded placeholder:pl-2 focus:border-primary-100 outline-none mb-8';
const Form = ({ data, isLoginForm, buttonName, submitForm, schema }) => {
  // const schema = yup
  //   .object({
  //     email: yup
  //       .string('Email Address is invalid')
  //       .email('Email Address is invalid')
  //       .typeError('Email Address is invalid')
  //       .required('Email Address is invalid'),
  //     username: yup
  //       .string('Username is invalid')
  //       .typeError('Username is invalid')
  //       .required('Username is invalid'),
  //     productname: yup
  //       .string('Product name is invalid')
  //       .typeError('Product name is invalid')
  //       .required('Product name is invalid'),
  //     password: yup
  //       .string()
  //       .required('No password provided.')
  //       .min(8, 'Password is too short - should be 8 chars minimum.')
  //       .matches(
  //         /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
  //         'Must Contain One Uppercase, Lowercase, Number and Special Case Character'
  //       ),
  //   })
  //   .required();

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

  return (
    <form onSubmit={handleSubmit(submitForm)}>
      {data.map((data) => (
        <div className="flex flex-col gap-1" key={data.id}>
          <label className="text-sm text-text-200">{data.label}</label>
          <input
            {...register(data.name)}
            className={formStyle}
            type={data.type}
          />
          <p className="-mt-8 mb-3 text-sm text-red-500">
            {errors[data.name]?.message}
          </p>
        </div>
      ))}

      {isLoginForm && (
        <div className="flex justify-between text-sm text-text-200 mt-2">
          <div className="flex gap-1">
            <input type="checkbox" className="accent-primary-100" />
            <p>Remember me</p>
          </div>
          <p>Forgot Password?</p>
        </div>
      )}
      <Button name={buttonName} style="bg-primary-100 text-primary-300 mt-10" />
      {isLoginForm && (
        <Button
          name="Sign in with google"
          style="bg-primary-300 text-primary-100 mt-5"
        />
      )}
    </form>
  );
};

export default Form;
