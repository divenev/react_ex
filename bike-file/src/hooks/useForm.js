import { useState } from "react";

export const useForm = (initialValues) => {
    const [values, setForm] = useState(initialValues)
    const changeHandler = (e) => {
        setForm(state => ({...state, [e.target.name]:[e.target.value]}))
    }

    return {values, changeHandler}
};