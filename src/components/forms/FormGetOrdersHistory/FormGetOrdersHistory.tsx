import { TextField } from "@mui/material";

import { useFormik } from "formik";

import { useAppDispatch } from "../../../helpers/hooks/redux-hooks";

import { getOrdersHistoryOperation } from "../../../redux/ordersHistory/ordersHistoryOperations";

import { getOrdersHistorySchema } from "../schemas/getOrdersHistorySchema";

import MyButton from "../../common/MyButton/MyButton";

import * as Styled from "./FormGetOrdersHistory.styled";

const FormGetOrdersHistory = () => {
  const dispatch = useAppDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      phone: "",
    },

    validationSchema: getOrdersHistorySchema,
    onSubmit: ({ email, phone }, { resetForm }) => {
      dispatch(getOrdersHistoryOperation({ email, phone }));

      resetForm();
    },
  });

  return (
    <Styled.MyForm onSubmit={formik.handleSubmit}>
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

      <MyButton text="Get history" type="submit" />
    </Styled.MyForm>
  );
};

export default FormGetOrdersHistory;
