import { InputFormField } from "../components/InputFormField";
import { SubmitFormField } from "../components/SubmitFormField";
import { Message } from "../components/Message";

const messages = [
    {
        id: "1234", 
        author: {
            username: "Jack",
            avatarIndex: 0,
        },
        text: "Lorem ipsum dolor sit amet",
    },
];


export function ChatPage() {
    const message = messages [0];

    return (
        <div>
            Chat page 
            <div className="message-list"> 
                <Message avatarIndex={message.author.avatarIndex} author={message.author.username} text={message.text} />
                <Message author="Jack" text="Dolor sit amen"/>
            </div>
            <form>
                <InputFormField />
                <SubmitFormField label="Send"/>
            </form>
        </div>      
    );
}