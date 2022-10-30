import * as Yup from "yup";

const contactFormSchema = Yup.object({
    name: Yup.string().required("Required"),
    number: Yup.number("Must be digit").required("Required"),
    email: Yup.string().email("Please enter a valid email").required("Required"),
    message: Yup.string().min(10).required("10 characters Min"),
});

export default contactFormSchema;
