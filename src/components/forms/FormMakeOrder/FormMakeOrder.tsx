import { useFormik } from "formik";
import { TextField } from "@mui/material";

import { makeOrderSchema } from "../schemas/makeOrderSchema";

import {
  useAppDispatch,
  useAppSelector,
} from "../../../helpers/hooks/redux-hooks";

import { clearCart } from "../../../redux/cart/cartSlice";

import { makeOrderOperation } from "../../../redux/cart/cartOperations";

import {
  getCartDataSelector,
  getCartTotalPriceSelector,
} from "../../../redux/cart/cartSelectors";

import MyButton from "../../common/MyButton/MyButton";
import MyTitle from "../../common/MyTitle/MyTitle";

import * as Styled from "./FormMakeOrder.styled";

const FormMakeOrder = () => {
  const dispatch = useAppDispatch();

  const cart = useAppSelector(getCartDataSelector);

  const cartTotalPrice = useAppSelector(getCartTotalPriceSelector);

  const totalPriceText = `Total price: ${cartTotalPrice.toFixed(2)}$`;

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      adress: "",
    },

    validationSchema: makeOrderSchema,
    onSubmit: (values, { resetForm }) => {
      const order = { ...values, total_price: cartTotalPrice, orders: cart };

      dispatch(clearCart());

      dispatch(makeOrderOperation(order));

      resetForm();
    },
  });

  return (
    <Styled.MyForm onSubmit={formik.handleSubmit}>
      <div>
        <MyTitle text={totalPriceText} as="h2" variant="h4" />
      </div>

      <TextField
        id="name"
        name="name"
        label="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.name && Boolean(formik.errors.name)}
        helperText={formik.touched.name && formik.errors.name}
      />

      <TextField
        id="email"
        name="email"
        label="Email"
        value={formik.values.email}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.email && Boolean(formik.errors.email)}
        helperText={formik.touched.email && formik.errors.email}
      />

      <TextField
        id="phone"
        name="phone"
        label="Phone"
        value={formik.values.phone}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.phone && Boolean(formik.errors.phone)}
        helperText={formik.touched.phone && formik.errors.phone}
      />

      <TextField
        id="adress"
        name="adress"
        label="Adress"
        value={formik.values.adress}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.adress && Boolean(formik.errors.adress)}
        helperText={formik.touched.adress && formik.errors.adress}
      />

      <MyButton text="Make Order" type="submit" />
    </Styled.MyForm>
  );
};

export default FormMakeOrder;
