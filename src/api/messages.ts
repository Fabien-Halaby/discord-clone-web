import { api } from "./api"

export const fetchMessages = (channelID: number) => {
    return api.get(`/api/channels/${channelID}/messages`);
}