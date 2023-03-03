import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";

export function ChatPage() {
    return (
        <div>
            Chat page 
            <div className="message-list"> 
                <div className="message">
                    <div className="message-author">Username</div>
                    <div className="message-text">Message</div>
                </div>
                <div className="message">
                    <div className="message-author">Username</div>
                    <div className="message-text">Message</div>
                </div>
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send"/>
            </form>
        </div>      
    );
};