import * as Yup from "yup";

export const getOrdersHistorySchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{12}$/, "Phone number must be 12 digits without symbol +")
    .required("Phone is required"),
});
