import { Publisher, Subjects, TicketUpdatedEvent } from "@kurreyyh/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
