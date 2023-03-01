import { useState } from "react";
import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";

export function SignInPage() {
    const [ formState, setFormState ] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        props.onSubmit(formState);
    }

    function handleUsernameChange(value) {
        setFormState(value);
    }

    function handlePasswordChange(value) {
        setFormState(value);
    }

    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form" onSubmit={handleSubmit}> 
                    <InputFormField label="Username" type="text" onChange={handleUsernameChange}/>
                    <InputFormField label="Password" type="password" onChange={handlePasswordChange} />
                    <SubmitFormField />
                </form> 
            </div>
        </div>
    );
};