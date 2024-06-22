import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import PropTypes from "prop-types";

const schema = yup.object().shape({
    name: yup.string().required("Please fill name"),
    surname: yup.string().required("Please fill surname"),
    salary: yup.number().typeError("Salary must be a number").required("Please fill salary").positive("Salary must be a positive number")
});

export const AddUser = ({ onAdd }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema)
    });

    const handelAdd = data => {
        axios
            .post("http://localhost:3004/users", { ...data, salary: +data.salary })
            .then(res => {
                onAdd(res.data);
                reset(); // Clear the form fields
            })
            .catch(err => {
                console.error("Error adding user:", err);
            });
    };

    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={handleSubmit(handelAdd)}>
                <div>
                    <label>Name</label>
                    <input {...register('name')} />
                    {errors.name && <p style={{ color: "red" }}>{errors.name.message}</p>}
                </div>

                <div>
                    <label>Surname</label>
                    <input {...register('surname')} />
                    {errors.surname && <p style={{ color: "red" }}>{errors.surname.message}</p>}
                </div>

                <div>
                    <label>Salary</label>
                    <input {...register('salary')} />
                    {errors.salary && <p style={{ color: "red" }}>{errors.salary.message}</p>}
                </div>

                <button>Save</button>
            </form>
        </div>
    );
};

AddUser.propTypes = {
    onAdd: PropTypes.func.isRequired
};
