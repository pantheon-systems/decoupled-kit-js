import type { ListenerFunction, SandpackMessage, UnsubscribeFunction } from "./types";
export declare class IFrameProtocol {
    private frameWindow;
    private origin;
    private globalListeners;
    private globalListenersCount;
    private channelListeners;
    private channelListenersCount;
    readonly channelId: number;
    constructor(iframe: HTMLIFrameElement, origin: string);
    cleanup(): void;
    register(): void;
    dispatch(message: SandpackMessage): void;
    globalListen(listener: ListenerFunction): UnsubscribeFunction;
    channelListen(listener: ListenerFunction): UnsubscribeFunction;
    private eventListener;
}
