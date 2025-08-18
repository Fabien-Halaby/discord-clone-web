import type { Message } from "../../types/message";
import MessageItem from "./MessageItem";

export default function MessageList({messages}: {messages: Message[]}) {
    return (
        <div className="flex-1 max-h-100 h-100 mx-0 lg:mx-8 overflow-y-auto my-5 rounded-xl p-2 bg-gray-800">
            {
                messages.map((v,i) => (
                    <MessageItem
                        key={i}
                        author={v.author}
                        body={v.body}
                        icon_url={v.icon_url ? v.icon_url : "/user_avatar.png"}
                        created_at={v.created_at}
                        is_owner={v.is_owner}
                    />
                ))
            }
        </div>
    )
}