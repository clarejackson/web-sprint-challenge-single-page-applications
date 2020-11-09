import * as yup from 'yup';

export default yup.object().shape({
  name: yup.string()
    .required('Name is required')
    .min(2, 'Name nust be 2 characters or longer'),
  size: yup.string()
    .oneOf(['8 inch', '12 inch', '16 inch'], 'Size is required'),
  toppings: yup.object().shape({
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    onions: yup.boolean(),
    olives: yup.boolean(),
    peppers: yup.boolean()
  }),
  instructions: yup.string()
})