import { useServer } from "../../hooks/useServer";
import type { Server } from "../../types/server";

export default function ServerItem({name, id, isSelected}: Server) {
    const {setSelectedServer, setSelectedChannel} = useServer();
    return (
        <button
            className={`flex items-center hover:bg-gray-900 transition-colors duration-100 justify-stretch text-gray-500 px-3 py-1 md:py-2 hover:cursor-pointer gap-1 rounded ${isSelected ? "bg-gray-900" : ""}`}
            onClick={() => {
                setSelectedServer(id);
                setSelectedChannel(null);
            }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
            </svg>

            <p className="text-sm font-semibold">{name}</p>
        </button>
    )
}