import * as Yup from "yup";

export const makeOrderSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string()
    .matches(/^\d{12}$/, "Phone number must be 12 digits without symbol +")
    .required("Phone is required"),
  adress: Yup.string().required("Adress is required"),
});
