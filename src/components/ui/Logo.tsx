import CloseWindow from "../../assets/icons/CloseWindow";

export default function Logo() {
    return (
        <div className="text-white flex mb-3 mt-3 justify-between">
            <div className="flex items-center gap-2 font-semibold">
                <img
                    src="/server_avatar.png"
                    alt="Server avatar"
                    className="size-6"
                />
                <p className="text-sm md:text-xl">Discord</p>
            </div>
            <button className="hover:cursor-pointer hover:opacity-50 transition-colors duration-100">
                <CloseWindow />
            </button>
        </div>
    )
}