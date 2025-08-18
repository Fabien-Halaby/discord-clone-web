import type { Message } from "../../types/message";

export default function MessageItem({author,body, icon_url, created_at, is_owner}: Message) {
    return (
        <div className={`flex flex-col mb-5 ${is_owner ? "items-end" : "items-start"}`}>
            <p className={`text-gray-400 md:text-sm text-xs ${is_owner ? "mr-1" : "ml-1"} font-extrahight`}>{author}</p>
            <div className={`inline-flex ${is_owner ? "flex-row-reverse" : ""} gap-2 max-w-[90%] md:max-w-[80%] lg:max-w-[70%] text-gray-100 font-medium py-1 px-3 md:p-2 rounded-xl text-xs md:text-sm ${is_owner ? "bg-blue-700" : "bg-gray-700"}`}>
                <img
                    src={icon_url ? icon_url : "/user_avatar.png"}
                    alt={`Avatar of ${author}`}
                    className="size-6 md:size-8 rounded-full object-cover"
                />
                <p className="break-words">{body}</p>
            </div>
            <p className={`text-gray-400 text-xs ${is_owner ? "mr-2" : "ml-2"} text-sm font-extrahight`}>{created_at}</p>
        </div>
    )
}