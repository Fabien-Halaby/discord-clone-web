import ChatMessage from "./components/ChatMessage";
import Sidebar from "./components/Sidebar";

export default function Test() {
    return (
        <div className="flex">
            <Sidebar />
            <ChatMessage />
        </div>
    )
}
