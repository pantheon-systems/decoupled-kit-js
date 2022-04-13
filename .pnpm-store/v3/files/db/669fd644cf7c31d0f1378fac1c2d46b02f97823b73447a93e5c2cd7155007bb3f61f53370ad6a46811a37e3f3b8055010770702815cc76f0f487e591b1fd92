/**
 * This file is a copy of the resolver from the `codesandbox-api` package.
 * We wanted to avoid to reference codesandbox-api because of the code that runs on load in the package.
 * The plan is to take some time and refactor codesandbox-api into what it was supposed to be in the first place,
 * an abstraction over the actions that can be dispatched between the bundler and the iframe.
 */
export default class Protocol {
    private type;
    private handleMessage;
    private target;
    private outgoingMessages;
    private internalId;
    private isWorker;
    constructor(type: string, handleMessage: (message: any) => any, target: Worker | Window);
    getTypeId(): string;
    createConnection(): void;
    dispose(): void;
    sendMessage<PromiseType>(data: any): Promise<PromiseType>;
    private _messageListener;
    private _postMessage;
}
