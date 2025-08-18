import { useEffect, useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { fetchChannels, fetchServers } from "../api/servers";
import ChatWindow from "../features/chat/ChatWindow";

type Server = {
    id: number;
    name: string;
}

type Channel = {
    id: number;
    name: string;
}

export default function DashboardPage() {
    const {token} = useAuth();
    const [servers, setServers] = useState<Server[]>([]);
    const [channels, setChannels] = useState<Channel[]>([]);
    const [selectedServer, setSelectedServer] = useState<number | null>(null);
    const [selectedChannel, setSelectedChannel] = useState<number | null>(0);

    useEffect(() => {
        fetchServers().then((res) => setServers(res.data))
    },[]);

    useEffect(() => {
        if(selectedServer) {
            fetchChannels(selectedServer).then((res) => setChannels(res.data))
        }
        console.log("Channels: ", channels);
    },[selectedServer]);

    if(!token) {
        return (
            <h1>Loading...</h1>
        )
    }
    return (
        <div className="flex h-screen">
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h1 className="text-lg font-bold mb-5">Servers</h1>
                {
                    servers.map((server) => (
                        <button
                            key={server.id}
                            className="block w-full text-left px-2 py-1 mb-1 hover:bg-gray-700 hover:cursor-pointer rounded"
                            onClick={() => setSelectedServer(server.id)}
                        >{server.name}</button>
                    ))
                }
            </aside>

            <main className="flex-1 p-4">
                {
                    selectedServer ? (
                        <div>
                            <h2 className="text-xl font-bold mb-2">Channels</h2>
                            {
                                channels.map((channel) => (
                                    <button
                                        key={channel.id}
                                        className={
                                            `w-full text-left px-3 py-1 mb-1 rounded transition-colors ${
                                            selectedChannel === channel.id ? 'bg-blue-600' : 'hover:bg-gray-700'
                                        }`}
                                        onClick={() => setSelectedChannel(channel.id)}
                                    >
                                        #{channel.name}
                                    </button>
                                ))
                            }
                        </div>
                    ) : (
                        <p>Choose a server</p>
                    )
                }
            </main>
            <main className="flex-1">
                {
                    selectedChannel && (
                        <ChatWindow channelID={selectedChannel} />
                    )
                }
            </main>
        </div>
    )
}