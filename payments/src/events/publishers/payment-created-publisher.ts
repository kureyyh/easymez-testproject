import { PaymentCreatedEvent, Publisher, Subjects } from "@kurreyyh/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
