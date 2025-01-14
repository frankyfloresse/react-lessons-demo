import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number
}

const FormComponent = () => {
    const {handleSubmit, register, formState: {errors, isValid}} = useForm<IFormProps>({mode: 'all'});

    const handleForms = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleForms)}>
                <div>
                    <label>
                        <input type="text" {...register('username',
                        {
                            required: {value: true, message: 'name is required'},
                            minLength: {value: 4, message: 'name wrong'}
                        })}/>
                    </label>

                    {errors.username && <div>{errors.username.message}</div>}
                </div>

                <div>
                    <label>
                        <input type="text" {...register('password',
                        {
                            required: true,
                            minLength: {value: 3, message: 'pass too short'},
                            maxLength: {value: 6, message: 'pass too long'}
                        })}/>
                    </label>

                    {errors.password && <div>{errors.password.message}</div>}
                </div>

                <div>
                    <label>
                        <input type={'number'} {...register('age',
                        {
                            required: true,
                            valueAsNumber: true,
                            min: {value: 1, message: 'age too small'},
                            max: {value: 117, message: 'age too big'},
                        })}/>
                    </label>

                    {errors.age && <div>{errors.age.message}</div>}
                </div>

                <button disabled={!isValid}>send</button>
            </form>
        </div>
    );
};

export default FormComponent;