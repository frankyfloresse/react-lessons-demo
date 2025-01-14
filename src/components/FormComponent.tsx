import {useForm} from "react-hook-form";

interface IFormProps {
    username: string;
    password: string;
    age: number;
}

const FormComponent = () => {
    const { handleSubmit, register } = useForm<IFormProps>();

    const handleForms = (formDataProps: IFormProps) => {
        console.log(formDataProps);
    }


    return (
        <div>
            <form onSubmit={handleSubmit(handleForms)}>
                {/*<input type="text" name={"username"}/>*/}
                {/*<input type="text" name={"password"}/>*/}
                {/*<input type="text" name={"age"}/>*/}

                <input type="text" {...register('username')}/>
                <input type="text" {...register('password')}/>
                <input type="text" {...register('age')}/>

                <button>send</button>
            </form>
        </div>
    );
};

export default FormComponent;