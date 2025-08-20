import { createContext, useContext, useState } from "react";

type ServerContext = {
    selectedServerID: number | null;
    selectedChannelID: number | null;
    setSelectedServer: React.Dispatch<React.SetStateAction<number | null>>;
    setSelectedChannel: React.Dispatch<React.SetStateAction<number | null>>;
}


const ServerCtx = createContext<ServerContext>(null!);

export default function SeverProvider({children}: {children: React.ReactNode}) {
    const [selectedServerID, setSelectedServer] = useState<number | null>(null);
    const [selectedChannelID, setSelectedChannel] = useState<number | null>(null);
    const value: ServerContext = {
        selectedServerID,
        selectedChannelID,
        setSelectedServer,
        setSelectedChannel,
    };
    return (
        <ServerCtx.Provider value={value}>
            {children}
        </ServerCtx.Provider>
    )
}

export const useServer = () => useContext(ServerCtx);