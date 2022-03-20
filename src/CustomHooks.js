import { useState } from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({});

    const handleSubmit = (event) => {
        if(event) {
            event.preventDefault();
        }

        callback();
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