import { useAuth } from "../../hooks/useAuth";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../schema/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

type Form = {
    email: string;
    password: string;
}

export default function LoginPage() {
    const { login } = useAuth();
    const { register, handleSubmit } = useForm<Form>({
        resolver: yupResolver(loginSchema),
    });
    const navigate = useNavigate();

    const onSubmit = async (data: Form) => {
        try {
            await login(data.email, data.password);
            toast.success("Logged in successfully");
            setTimeout(() => navigate('/'), 1000);
        } catch (error: any) {
            const msg = error.response?.data?.error || 'Failed to logged in';
            toast.error((msg as string));
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center mt-10 gap-5"
        >
            <input
                {...register("email")}
                placeholder="Email address"
                className="border-1 border-white text-white rounded-xl px-4 py-2 shadow-xl"
            />
            <input
                {...register("password")}
                type="password"
                placeholder="Password"
                className="border-1 border-white text-white rounded-xl px-4 py-2 shadow-xl"
            />
            <button 
                type="submit"
                className="text-white font-bold bg-blue-500 hover:bg-blue-700 cursor-pointer rounded-xl px-4 py-2 shadow-xl"
            >Login</button>
        </form>
    )
}