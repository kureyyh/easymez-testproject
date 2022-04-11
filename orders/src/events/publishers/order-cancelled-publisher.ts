import { Publisher, Subjects, OrderCancelledEvent } from "@kurreyyh/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
