export default function MessageInput() {
    return (
        <div className="w-full md:w-[calc(100%-2rem)] lg:w-[calc(100%-4rem)] flex justify-between flex-col overflow-y-auto mx-auto my-2 border-1 border-sky-600 rounded-xl p-2 bg-gray-800">
            <textarea
                placeholder="Your message..."
                className="w-full resize-none bg-transparent text-white text-sm md:text-base focus:border-none border-none outline-none"
            />
            <div className="flex justify-between text-white">
                <button className="bg-gray-950 hover:bg-gray-700 transition-colors duration-100 hover:cursor-pointer rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" />
                    </svg>
                </button>
                <button disabled className="hover:cursor-pointer hover:bg-gray-700 transition-colors duration-100 disabled:opacity-50 opacity-100 bg-gray-950 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m15 11.25-3-3m0 0-3 3m3-3v7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}