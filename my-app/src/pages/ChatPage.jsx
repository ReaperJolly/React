import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { Message } from "../components/Message";
import { useState } from "react";

const messages = [
    {
        id: "1234", 
        author: {
            username: "John",
            avatarIndex: 0,
        },
        text: "Hey Joe",
    },
    {
        id: "5678", 
        author: {
            username: "Walker",
            avatarIndex: 1,
        },
        text: "Hey Jack",
    },
];


export function ChatPage() {

    const [ formState, setFormState ] = useState(``);

    function handleChange(message) {
        setFormState(message);
    }

    console.log(formState);
   
    const messageComponents = messages.map((message) => {
        return <Message key={message.id} avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />
    });

    return (
        <div>
            Chat page 
            <div className="message-list"> 
                {messageComponents}
            </div>
            <form>
                <InputFormField label="Message" type="text" value={formState} onChange={handleChange} />
                <SubmitFormField label="Send"/>
            </form>
        </div>      
    );
}