import { useAuth } from "./useAuth";
import useWebSocket from "react-use-websocket";

export default function useChat(channelID: number) {
    const {token} = useAuth();
    return useWebSocket(
        token ? `ws://localhost:8001/ws/channels/${channelID}?token=${token}` : null,
        {
            shouldReconnect: () => true,
        },
    )
}