import type { Server } from "../../types/server";
import ServerItem from "./ServerItem";

export default function ServerList({servers, selectedServer}: {servers: Server[], selectedServer: number}) {
    return (
        <div>
            <p className="text-sm text-white font-extralight mb-2">Servers</p>
            <div className="max-h-80 overflow-y-auto">
                <div className="flex flex-col gap-2">
                    {
                        servers.map((v, i) => (
                            <ServerItem
                                key={i}
                                id={v.id}
                                isSelected={v.id == selectedServer} 
                                name={v.name}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}