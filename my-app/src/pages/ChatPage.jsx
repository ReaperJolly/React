import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { Message } from "../components/Message";

export function ChatPage() {
    return (
        <div>
            Chat page 
            <div className="message-list"> 
                <Message author="John" text="Lorem ipsum" />
                <Message author="Jack" text="Dolor sit amen"/>
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send"/>
            </form>
        </div>      
    );
}