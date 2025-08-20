import { useAuth } from "../../hooks/useAuth";
import { useServer } from "../../hooks/useServer";
import type { Message } from "../../types/message";
import MessageItem from "./MessageItem";

export default function MessageList({messages}: {messages: Message[]}) {
    const {token} = useAuth();
    const {selectedChannelID} = useServer();

    const userId = token
    ? JSON.parse(atob(token.split(".")[1])).uid
    : 0;
    console.log("UID: ", userId);

    return (
        <>
            {
                (messages != null && selectedChannelID !== null) 
                &&
                <div className="flex-1 max-h-100 h-100 mx-0 lg:mx-8 overflow-y-auto my-5 rounded-xl p-2 bg-gray-800">
                    {
                        messages.map((v,i) => (
                            <MessageItem
                                key={i}
                                author={v.author}
                                body={v.body}
                                icon_url={v.icon_url}
                                created_at={v.created_at}
                                is_owner={userId === v.author_id}
                                author_id={v.author_id}
                            />
                        ))
                    }
                </div>
            }
        </>
    )
}