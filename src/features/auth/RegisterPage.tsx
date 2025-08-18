import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/auth";
import toast from "react-hot-toast";
import { api } from "../../api/api";

type Form = {
    username: string;
    email: string;
    password: string;
}

export default function RegisterPage() {
    const {register, handleSubmit} = useForm<Form>({
        resolver:yupResolver(registerSchema),
    });

    const onSubmit = async (data: Form) => {
        try {
            await api.post("/register",data);
            toast.success("Registered successfully");
        } catch (error: any) {
            const msg = error.response?.data?.error || 'Failed to register';
            toast.error((msg as string));
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center justify-center mt-10 gap-5"
        >
            <input
                {...register("username")}
                type="text"
                placeholder="Username"
                className="border-1 border-white text-white rounded-xl px-4 py-2 shadow-xl"
            />
            <input
                {...register("email")}
                type="email"
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
            >Register</button>
        </form>
    )
}