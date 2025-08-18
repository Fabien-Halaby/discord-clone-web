import * as Yup from 'yup';

export const loginSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email address is required"),
    password: Yup.string().min(6,"Password must be at least 6 characters").required("Password is required")
});

export const registerSchema = loginSchema.shape({
    username: Yup.string().required("Username is required").min(6,"Username must be at least 6 characters").max(20, "Username must be less than 20")
});