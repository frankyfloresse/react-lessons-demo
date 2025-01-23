import {login} from "../services/api.service.ts";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const schema = z.object({
    username: z.string().min(1, { message: 'Required' }),
    password: z.string().min(10),
});

interface LoginForm {
    username: string;
    password: string;
}

const LoginPage = () => {
    const {handleSubmit, register, formState: { errors }} = useForm<LoginForm>({
        resolver: zodResolver(schema),
    })

    const onSubmit = async ({ username, password }: LoginForm) => {
        try {
            await login({
                username,
                password,
                expiresInMins: 1
            })
            // User is authed, navigate to user personal profile page
        }
        catch {
            console.log('Auth failed')
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register('username')} />
                {errors.username?.message && <p>{errors.username?.message}</p>}
                <input type="text" {...register('password')} />
                {errors.password?.message && <p>{errors.password?.message}</p>}
                <input type="submit" />
            </form>
        </div>
    );
};

export default LoginPage;