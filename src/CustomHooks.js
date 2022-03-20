import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }
        callback(inputs);
        navigate('/');
    }

    const handleInputChange = (event) => {
        setInputs(inputs => ({
            ...inputs,
            [event.target.name] : event.target.value
        }));
    }

    return {
        inputs,
        handleInputChange,
        handleSubmit
    };
}

export default useSignUpForm;