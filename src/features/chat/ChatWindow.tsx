import { useEffect, useState } from "react";
import useChat from "../../hooks/useChat";
import { fetchMessages } from "../../api/messages";
// import { useAuth } from "../../hooks/useAuth";


type Message = {
    id: number;
    author_id: number;
    body: string;
    created_at: string;
    author: string;
    icon_url: string;
}

interface Props {
    channelID: number;
}

export default function ChatWindow({channelID}: Props) {
    const {sendMessage, lastMessage} = useChat(channelID);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState<string>("");

    // const { token } = useAuth();

    // const userId = token
    // ? JSON.parse(atob(token.split(".")[1])).uid
    // : 0;
    // console.log("UID: ", userId);
    

    useEffect(() => {
        fetchMessages(channelID)
            .then((res) => setMessages(res.data ? res.data : []))
            .catch((err) => {
                console.error("Messages fetch error:", err);
                setMessages([]);
            }
        );
        //! fetchMessages(channelID).then((res) => setMessages(res.data.reverse() ?? []))
    },[channelID]);

    useEffect(() => {
        if(lastMessage) {
            const msg = JSON.parse(lastMessage.data);
            setMessages([...messages, msg]);
        }
    },[lastMessage]);

    useEffect(() => {
        const iv = setInterval(() => sendMessage(JSON.stringify({type: "hearbeat"})),30000);
        return clearInterval(iv);
    },[sendMessage]);

    const send = () => {
        if(input.trim()) {
            sendMessage(JSON.stringify({body: input}));
            setInput("");
        }
    }

    return (
        <div className="flex flex-col h-full">
            <div className="flex-1 p-2 overflow-y-auto">
                {
                    messages.map((message) => (
                        <div key={`${message.id}-${message.created_at}`}>
                            <img
                                src={
                                    message.icon_url
                                    ? `http://localhost:8001${message.icon_url}`
                                    : "/default-avatar.png"
                                }
                                className="w-6 h-6 rounded-full"
                            />
                            <b>{message.author}</b>: {message.body}
                        </div>
                    ))
                }
            </div>

            <div className="flex p-2 border-t">
                <input 
                    type="text"
                    placeholder="Message..."
                    value={input}
                    className="flex px-2 py-1 border rounded"
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key == "Enter" && send()}
                />
                <button
                    onClick={send}
                    className="ml-2 px-3 py-1 bg-blue-500 text-white rounded"
                >Send</button>
            </div>
        </div>
    )
}