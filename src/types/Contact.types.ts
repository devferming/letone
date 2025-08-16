import contactChannels from "../data/contactChannels.json";

export type ServiceKey = keyof typeof contactChannels;
export type ChannelItem = (typeof contactChannels)[ServiceKey];

