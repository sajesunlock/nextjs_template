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

const loginSchema = Yup.object({
    username: Yup.string().required("Required"),
    password: Yup.string()
    .matches(passwordRules, { message: "Please create a stronger password !" })
    .min(8, "Must be 8 characters or more").max(16, "Must be 16 characters or less")
    .required("Required"),
});

export default loginSchema;
