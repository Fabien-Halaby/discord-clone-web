import AddCircleIcon from "../../../assets/icons/AddCircleIcon";
import ShareIcon from "../../../assets/icons/ShareIcon";

export default function ChannelOption() {
    return (
        <div className="flex gap-5">
            <button className="flex items-center gap-2 text-white border-1 border-gray-400 rounded-xl px-4 py-1 md:py-2 hover:bg-gray-700 transition-colors duration-100 hover:cursor-pointer text-sm font-extralight">
                <AddCircleIcon />
                <p className="hidden md:inline">New channel</p>
                <p className="hidden sm:inline md:hidden">New</p>
            </button>
            <button className="flex items-center gap-2 text-white border-1 border-gray-400 rounded-xl px-4 py-1 md:py-2 hover:bg-gray-700 transition-colors duration-100 hover:cursor-pointer text-sm font-extralight">
                <ShareIcon />
                <p className="hidden md:inline">Share link</p>
                <p className="hidden sm:inline md:hidden">Share</p>
            </button>
        </div>
    )
}