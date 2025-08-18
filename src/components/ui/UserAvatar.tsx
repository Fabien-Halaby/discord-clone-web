import type { User } from "../../types/user";

export default function UserAvatar({username, avatar_url}: User) {
    return (
        <button className="flex items-center gap-1 px-4 py-1 border-1 hover:cursor-pointer hover:bg-gray-900 transition-colors duration-100 border-gray-400 rounded-xl w-full">
            <img
                src={avatar_url || "/user_avatar.png"}
                alt="avatar"
                className="size-8 rounded-full object-cover"
            />
            <p className="text-sm font-semibold text-gray-400">{username}</p>
        </button>
    )
}