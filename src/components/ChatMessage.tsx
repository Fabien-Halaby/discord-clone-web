import { useEffect, useState } from "react";
// import { channelList } from "../seeds/channelList";
// import { messageList } from "../seeds/messageList";
import ChannelOption from "./server/channel/ChannelOption";
import ChannelSelect from "./server/channel/ChannelSelect";
import MessageInput from "./message/MessageInput";
import MessageList from "./message/MessageList";
import type { Channel } from "../types/channel";
import { fetchChannels } from "../api/servers";
import { useServer } from "../hooks/useServer";
import type { Message } from "../types/message";
import { fetchMessages } from "../api/messages";

export default function ChatMessage() {
    const [channels, setChannels] = useState<Channel[]>([]);
    const [messages, setMessages] = useState<Message[]>([]);

    const {selectedServerID} = useServer();
    console.log("Selected server: ", selectedServerID);
    
    const {selectedChannelID} = useServer();

    useEffect(() => {
        if(selectedServerID) {
            fetchChannels(selectedServerID).then((res) => setChannels(res.data))
        } else {
            fetchChannels(1).then((res) => setChannels(res.data));
        }
    },[selectedServerID]);

    useEffect(() => {
        if(selectedChannelID) {
            fetchMessages(selectedChannelID).then((res) => setMessages(res.data));
        }
    }, [selectedChannelID,selectedServerID]);

    return (
        <main className="flex-1 md:h-[100dvh] overflow-y-auto justify-between flex flex-col w-full h-auto border-1 border-sky-600 rounded-xl m-1 px-4 pt-2 pb-2 bg-gray-800">
            {/* Header: Select channel, new channel and share link */}
            <div className="w-full flex my-3 justify-between">
                <ChannelSelect
                    channels={channels}
                />
                <ChannelOption />
            </div>
            {/* Message lists */}
            <MessageList 
                messages={messages}
            />
            {/* Message input */}
            <MessageInput />
        </main>
    );
}