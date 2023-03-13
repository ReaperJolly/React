import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { Message } from "../components/Message";
import { useState } from "react";

/* const messages = [
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
]; */


export function ChatPage(props) {

    const [ formState, setFormState ] = useState(``);
    const [ messages, setMessages ] = useState([]);

    function handleChange(message) {
        setFormState(message);
    }

    function handleSubmit(event) {
        event.preventDefault();
        setFormState(``);
        setMessages([...messages, {
            id: Date.now(), 
        author: {
            username: props.username,
            avatarIndex: props.avatarIndex,
        },
        text: formState,
        }]);
    }
   
    const messageComponents = messages.map((message) => {
        return <Message key={message.id} avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />
    });

    return (
        <div>
            Chat page 
            <div className="message-list"> 
                {messageComponents}
            </div>
            <form onSubmit={handleSubmit}>
                <InputFormField label="Message" type="text" value={formState} onChange={handleChange} />
                <SubmitFormField label="Send"/>
            </form>
        </div>      
    );
}