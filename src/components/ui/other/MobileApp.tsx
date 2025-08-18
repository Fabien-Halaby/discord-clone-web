import AndroidApp from "../../../assets/icons/AndroidApp";

export default function MobileApp() {
    return (
        <div className="my-5">
            <p className="text-sm text-white font-extralight mb-2">Others</p>
            <button className={`flex items-center hover:bg-gray-800 transition-colors duration-100 justify-stretch text-gray-500 px-3 py-2 hover:cursor-pointer gap-1 rounded`}>
                <AndroidApp />
                <p className="text-sm font-semibold">Andoid App</p>
            </button>
        </div>
    )
}