import ChatMessage from "../components/ChatMessage";
import Sidebar from "../components/Sidebar";
import SeverProvider from "../hooks/useServer";

export default function DashboardPage() {
    return (
        <SeverProvider>
            <div className="flex">
                <Sidebar />
                <ChatMessage />
            </div>
        </SeverProvider>
    )
}