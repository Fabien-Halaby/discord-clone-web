import { useEffect, useState } from "react";
// import { serverList } from "../seeds/serverList";
import ServerList from "./server/ServerList";
import Logo from "./ui/Logo";
import NewServer from "./ui/NewServer";
import MobileApp from "./ui/other/MobileApp";
import UserAvatar from "./ui/UserAvatar";
import { fetchServers } from "../api/servers";
import type { Server } from "../types/server";

export default function Sidebar() {
    const [servers, setServers] = useState<Server[]>([]);
    const [selectedServer, setSelectedServer] = useState(0);
    console.log(selectedServer);

    useEffect(() => {
        fetchServers().then((res) => setServers(res.data));
        setSelectedServer(1)
    },[]);

    return (
        <aside className="hidden sm:flex sm:flex-col sm:justify-between md:h-[100dvh] w-full sm:w-54 md:w-54 lg:w-64 h-auto border-1 border-sky-600 rounded-xl m-1 px-2 md:px-4 pt-2 pb-2 bg-gray-800 overflow-y-auto">
            <div className="flex flex-col justify-between">
                {/* Logo + name + close-sidebar */}
                <Logo />
                {/* Button for creating new server */}
                <NewServer />
                {/* Server Lists */}
                <ServerList 
                    servers={servers}
                />
            </div>
            <div>
                {/* Others: Android App */}
                <MobileApp />
                {/* User avatar + username */}
                <UserAvatar
                    avatar_url={null}
                    username="Fabien"
                />
            </div>
        </aside>
    )
}