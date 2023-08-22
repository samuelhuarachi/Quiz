import { DomainEvent } from "src/domain/event/DomainEvent";

interface Handler {
    eventName: string;
    handle(event: DomainEvent): Promise<void>;
}


export { Handler };
