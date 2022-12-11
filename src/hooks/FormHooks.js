import React from "react";

// Hook para nao ter que utilizar useState para todos os campos do formulario
export default function useForm(props) {
    const [values, setValues] = React.useState(props.initialValue);
    return {
        values,
        handleChange: (e) => {
            const value = e.target.value;
            const name = e.target.name;
            setValues({
                ...values,
                [name]: value
            });
        },
        clearForm: () => {
            setValues({ titulo: '', url: ''});
        }
    }
}