import { Publisher, OrderCreatedEvent, Subjects } from "@kurreyyh/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
