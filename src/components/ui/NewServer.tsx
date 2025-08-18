import AddCircleIcon from "../../assets/icons/AddCircleIcon";

export default function NewServer() {
    return (
        <button className="flex items-center justify-center text-sm text-gray-300 font-medium hover:bg-gray-900 gap-2 transition-colors duration-100 hover:cursor-pointer w-full border-1 border-gray-500 rounded-xl shadow px-5 py-1 md:py-2 my-5">
            <AddCircleIcon />
            <p className="hidden md:inline">New Server</p>
            <p className="hidden sm:inline md:hidden">New</p>
        </button>
    )
}