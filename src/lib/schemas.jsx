import * as yup from 'yup';

const authValidation = {
  email: yup
    .string('Email Address is invalid')
    .email('Email Address is invalid')
    .required('Email Address is invalid'),
  password: yup
    .string()
    .min(8, 'Password is too short - should be 8 chars minimum.')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      'Must Contain One Uppercase, Lowercase, Number and Special Case Character'
    ),
};

export const registerSchema = yup
  .object({
    ...authValidation,
    username: yup.string('username').required('username is required'),
  })
  .required();

export const loginSchema = yup
  .object({
    ...authValidation,
  })
  .required();

export const orderSchema = yup
  .object({
    productname: yup
      .string('Product Name')
      .required('Product Name is required'),
  })
  .required();

export const expenseSchema = yup
  .object({
    productname: yup.string('Expense').required('Expense is required'),
  })
  .required();

export const inventorySchema = yup
  .object({
    productname: yup
      .string('Product Name')
      .required('Product Name is required'),
    sellingprice: yup
      .string('Selling Price')
      .required('Selling Price is required'),
    costprice: yup.string('Cost Price').required('Cost Price is required'),
    unitsavaiable: yup
      .string('Available Unit')
      .required('Available Unit is required'),
  })
  .required();
