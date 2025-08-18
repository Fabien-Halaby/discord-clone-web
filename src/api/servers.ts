import { api } from "./api"

export const fetchServers = () => {
    return api.get("/api/servers");
}

export const fetchChannels = (serverID: number) => {
    return api.get(`/api/servers/${serverID}/channels`);
}