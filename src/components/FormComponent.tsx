import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import userValidator from "../validators/user.validator.ts";

interface IFormProps {
    username: string;
    password: string;
    age: number
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} =
        useForm<IFormProps>({mode: 'all', resolver: joiResolver(userValidator)});

    const handleForms = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }

    return (
        <div>
            <form onSubmit={handleSubmit(handleForms)}>
                <div>
                    <label>
                        <input type="text" {...register('username')}/>
                    </label>
                    {errors.username && <div>{errors.username.message}</div>}
                </div>

                <div>
                    <label>
                        <input type="text" {...register('password')}/>
                    </label>
                    {errors.password && <div>{errors.password.message}</div>}
                </div>

                <div>
                    <label>
                        <input type={'number'} {...register('age')}/>
                    </label>
                    {errors.age && <div>{errors.age.message}</div>}
                </div>

                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;