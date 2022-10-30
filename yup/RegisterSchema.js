import { yupToFormErrors } from "formik";
import * as Yup from "yup";

/**
 * The password must match:

At least 8 - 16 characters,
must contain at least 1 uppercase letter,
must contain at least 1 lowercase letter,
and 1 number
Can contain any of this special characters $ % # * & - .
 */
const passwordRules = /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/;

const registerSchema = Yup.object({
    lastName: Yup.string().required("Required"),
    firstName: Yup.string().required("Required"),
    email: Yup.string().email("Please enter a valid email").required("Required"),
    password: Yup.string().matches(passwordRules, { message: "Please create a stronger password !" }).required("Required"),
    rePassword: Yup.string().oneOf([Yup.ref("password"), null], "passwords must match").required("Required"),
});

export default registerSchema;
