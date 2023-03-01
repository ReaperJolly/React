import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";

export function SignInPage() {
    return (
        <div className="sign-in-page">
            <div className="card">
                <form className="sign-in-form">
                    <InputFormField label="Username" type="text" />
                    <InputFormField label="Password" type="password" />
                    <SubmitFormField />
                </form> 
            </div>
        </div>
    );
};