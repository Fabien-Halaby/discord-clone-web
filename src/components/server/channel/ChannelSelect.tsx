import type { Channel } from "../../../types/channel";

export default function ChannelSelect({channels}: {channels: Channel[]}) {
    return (
        <select className="text-white border-1 border-gray-400 rounded-xl px-4 py-1 md:py-2 hover:bg-gray-700 transition-colors duration-100 hover:cursor-pointer text-sm font-extralight">
            {/* TODO: actual channel */}
            <option value="general" selected>
                # General
            </option>
            {
                channels.map((v) => (
                    <option
                        value={v.name}
                        key={v.id}
                    >
                        # {v.name}
                    </option>
                ))
            }
        </select>
    )
}